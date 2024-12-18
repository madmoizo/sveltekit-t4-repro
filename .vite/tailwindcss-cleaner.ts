import type { Plugin } from "vite"

export default function tailwindcssCleaner(): Plugin {
	return {
		name: "tailwindcss-cleaner",

		generateBundle(options, bundle) {
			for (const [fileName, file] of Object.entries(bundle)) {
				if (file.type === "asset" && fileName.endsWith(".css") && typeof file.source === "string") {
					const customProperties = file.source.match(/--([a-zA-Z0-9_-]+)(?=:)/g) ?? []

					for (const customProperty of customProperties) {
						// lightningcss overrides user defined `color-scheme`
						// and inject 2 variables: `lightningcss-dark` and `lightningcss-light`
						// We must preserve it to avoid side-effects
						if (customProperty.includes("--lightningcss-")) {
							continue
						}

						const reg = new RegExp(`var\\(${customProperty}[,)]`, "g")
						const used = file.source.match(reg)
						if (!used) {
							const customPropertyDeclaration = new RegExp(`${customProperty}:.*?;`, "g")
							file.source = file.source.replace(customPropertyDeclaration, "")
						}
					}
				}
			}
		}
	}
}
