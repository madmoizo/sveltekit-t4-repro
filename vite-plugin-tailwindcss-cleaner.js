function stringToKb (str) {
	const byteSize = new Blob([str]).size
	return byteSize / 1024
}

export default function tailwindcssCleaner() {
	return {
		name: "vite-plugin-tailwindcss-cleaner",
		generateBundle(options, bundle) {
			for (const [fileName, file] of Object.entries(bundle)) {
				if (file.type === "asset" && fileName.endsWith(".css") && typeof file.source === "string") {
					const defaultSize = stringToKb(file.source)
					const logs = {}

					// Remove unused custom properties
					let firstPass = true
					let keepSearching = true
					let detectedCustomPropertiesCount = 0
					let removedCustomPropertiesCount = 0

					while (keepSearching) {
						keepSearching = false
						
						const customProperties = file.source.matchAll(/(--[a-zA-Z0-9_-]+):/g)
						if (customProperties) {
							for (const [, customProperty] of customProperties) {
								if (firstPass) {
									detectedCustomPropertiesCount++
								}

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
									keepSearching = true
								}
							}
						}

						firstPass = false
					}

					logs[`Custom properties`] = {
						Total: detectedCustomPropertiesCount,
						Removed: removedCustomPropertiesCount
					}

					// Remove unused keyframes
					let detectedKeyframesCount = 0
					let removedKeyframesCount = 0
					const keyframes = file.source.matchAll(/@keyframes ([a-zA-Z0-9_-]+)\{/g)

					if (keyframes) {
						for (const [, keyframe] of keyframes) {
							detectedKeyframesCount++
							const used = new RegExp(`--animate-${keyframe}:`).test(file.source)
							if (!used) {
								file.source = file.source.replace(
									new RegExp(`@keyframes ${keyframe}\{(?:[^{}]|\{[^{}]*\})*\}`, "g"),
									""
								)
								removedKeyframesCount++
							}
						}
					}

					logs["Keyframes"] = {
						Total: detectedKeyframesCount,
						Removed: removedKeyframesCount
					}

					const cleanedSize = stringToKb(file.source)

					console.log("\x1b[34m%s\x1b[0m", `\n\n[plugin] Tailwindcss Cleaner`)
					console.table(logs)
					console.table({
						"Size (Kb)" : {
							"Before": Number(defaultSize.toFixed(2)),
							"After": Number(cleanedSize.toFixed(2)),
							"Saved": Number((defaultSize - cleanedSize).toFixed(2))
						}
					})
					console.log(`\n`)
				}
			}
		}
	}
}
