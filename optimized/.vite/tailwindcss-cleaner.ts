import type { Plugin } from "vite"

export default function tailwindcssCleaner(): Plugin {
	return {
		name: "tailwindcss-cleaner",
		generateBundle(options, bundle) {
			for (const [fileName, file] of Object.entries(bundle)) {
				if (file.type === "asset" && fileName.endsWith(".css") && typeof file.source === "string") {
					const logs = {}
					
					// Remove unused custom properties
					let loopCount = 0
					let removedCustomPropertiesCount = 0

					do {
						loopCount++
						removedCustomPropertiesCount = 0
						let detectedCustomPropertiesCount = 0
						const customProperties = file.source.matchAll(/(--[a-zA-Z0-9_-]+):/g)

						if (customProperties) {
							for (const [,customProperty,] of customProperties) {
								detectedCustomPropertiesCount++
								// lightningcss polyfills light-dark function
								// https://lightningcss.dev/transpilation.html
								// We must preserve custom properties added by lightningcss to avoid side-effects
								if (customProperty.startsWith("--lightningcss-")) {
									continue
								}

								const used = new RegExp(`var\\(${customProperty}[,)]`).test(file.source)
								if (!used) {
									file.source = file.source.replace(new RegExp(`${customProperty}:.*?;`, "g"), "")
									removedCustomPropertiesCount++
								}
							}
						}

						logs[`Custom properties: ${loopCount} pass`] = {
							"Total": detectedCustomPropertiesCount,
							"Unused": removedCustomPropertiesCount,
						}
					} while (removedCustomPropertiesCount > 0)

					
					// Remove unused keyframes
					let detectedKeyframesCount = 0
					let removedKeyframesCount = 0
					const keyframes = file.source.matchAll(/@keyframes ([a-zA-Z0-9_-]+)\{/g)

					if (keyframes) {
						for (const [,keyframe,] of keyframes) {
							detectedKeyframesCount++
							const used = new RegExp(`--animate-${keyframe}:`).test(file.source)
							if (!used) {
								file.source = file.source.replace(new RegExp(`@keyframes ${keyframe}\{(?:[^{}]|\{[^{}]*\})*\}`, "g"), "")
								removedKeyframesCount++
							}
						}
					}

					logs['Keyframes'] = {
						"Total": detectedKeyframesCount,
						"Unused": removedKeyframesCount
					}
					
					console.log("\x1b[34m%s\x1b[0m", `\n\n[plugin] Tailwindcss Cleaner`)
					console.table(logs)
					console.log(`\n`)
				}
			}
		}
	}
}
