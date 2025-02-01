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
| CSS output | [17.3kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-no-plugin/assets/index-JtgcKGRz.css) | [4.07kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/build-with-plugin/assets/index-JtgcKGRz.css) |

![image](https://github.com/user-attachments/assets/95dbf5a2-49b5-4501-a99d-9a08fa69325a)
