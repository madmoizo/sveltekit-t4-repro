# vite-plugin-tailwindcss-cleaner

## Why?
Tailwind v4 as been released and the tailwind vite plugin does not (yet) eliminate dead css.

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
| CSS output | [17.3kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-no-plugin/assets/index-Dw0kXIKz.css) | [4.04kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-with-plugin/assets/index-Dw0kXIKz.css) |

![image](https://github.com/user-attachments/assets/f5424288-d964-4599-a2bb-20c3c919a337)
