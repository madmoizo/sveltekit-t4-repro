# vite-plugin-tailwindcss-cleaner

## Deprecated
The official tailwind vite plugin support this feature since Tailwind CSS v4.0.5

## Why?
Tailwind v4 as been released but the official tailwind vite plugin does not (yet) eliminate dead css.

## What does it do?
- Remove unused custom properties in cascade
- Remove unused keyframes
- Print basic logs

## How to install?
```
npm i vite-plugin-tailwindcss-cleaner
```

## How to use?
```js
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import tailwindcssCleaner from "vite-plugin-tailwindcss-cleaner"

export default defineConfig({
	plugins: [
		tailwindcss(),
		tailwindcssCleaner()
	]
})
```

## Is it worth it?
|            | No plugin | With plugin |     
|------------|-----------|--------|
| CSS output | [17.3kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-no-plugin/assets/index-CDc_evQZ.css) | [4.04kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-with-plugin/assets/index-CDc_evQZ.css) |

![image](https://github.com/user-attachments/assets/b5406ef0-94f5-4511-ac50-12731c92a5e5)

