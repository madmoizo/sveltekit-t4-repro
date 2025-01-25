# Vite plugin tailwindcss cleaner

## How to use it
- Copy/paste the [plugin file](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite-plugin-tailwindcss-cleaner.ts) in your project
- Add the plugin to your [vite config](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite.config.ts)

## Features
- Remove unused keyframes
- Remove unused var in cascade. example:
```css
:root {
  --unused-child: 10px; /* unused after the first pass -> removed on the second pass */
  --unused-parent: var(--unused-child); /* unused -> removed on the first pass */
}
```
- Print basic logs

![image](https://github.com/user-attachments/assets/d80172cf-4998-42fe-87b5-0552c46aef32)

## Comparison
- `compare` folder contains a base (sveltekit) project:
  - [CSS output](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/compare/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css): 17.3kb
- root contains a base (sveltekit) project using the plugin:
  - [CSS output (optimized)](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css): 4.06kb
