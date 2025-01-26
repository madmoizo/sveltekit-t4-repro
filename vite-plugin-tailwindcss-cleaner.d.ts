import type { Plugin } from "vite"

declare module 'vite-plugin-tailwindcss-cleaner' {
    export function tailwindcssCleaner(): Plugin
}