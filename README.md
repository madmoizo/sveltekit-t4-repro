# Vite plugin tailwindcss cleaner

## Why?
Tailwind v4 as been released and the tailwind vite plugin does not (yet) eliminate dead css.

## What does it do?
- Remove unused custom properties in cascade
- Remove unused keyframes
- Print basic logs

## How to use it?
- Copy/paste the [plugin file](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite-plugin-tailwindcss-cleaner.ts) in your project
- Add the plugin to your [vite config](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/vite.config.ts)

## Is it worth it?
|            | No plugin | With plugin |     
|------------|-----------|--------|
| CSS output | [17.3kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/compare/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css) | [4.06kb](https://github.com/madmoizo/vite-plugin-tailwindcss-cleaner/blob/main/.svelte-kit/output/client/_app/immutable/assets/2.D6LpQ2Rr.css) |

![image](https://github.com/user-attachments/assets/e022c34f-04ea-4e14-9395-d1f1b06c3c27)


## Want to contribute?
You can clone this repository in a [dev container](https://code.visualstudio.com/docs/devcontainers/containers)
