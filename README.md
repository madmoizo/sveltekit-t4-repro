# Vite plugin tailwindcss cleaner

## Why?
Tailwind v4 as been released and the tailwind vite plugin does not (yet) purge automatically unused code (custom properties, keyframes).

## What does it do?
- Remove unused keyframes
- Remove unused custom properties in cascade
  ```css
  :root {
    --unused-child: 10px; /* unused after the first pass -> removed on the second pass */
    --unused-parent: var(--unused-child); /* unused -> removed on the first pass */
  }
  ```
- Print basic logs

  ![image](https://github.com/user-attachments/assets/d80172cf-4998-42fe-87b5-0552c46aef32)

## How to use it?
- Copy/paste the [plugin file](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite-plugin-tailwindcss-cleaner.ts) in your project
- Add the plugin to your [vite config](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite.config.ts)

## Is it worth it?
|            | No plugin | With plugin |     
|------------|-----------|--------|
| CSS output | [17.3kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/compare/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css) | [4.06kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css) |
