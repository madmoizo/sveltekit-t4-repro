import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";
import tailwindcssCleaner from "./vite-plugin-tailwindcss-cleaner.js";

export default defineConfig({
	plugins: [
		tailwindcss(),
		tailwindcssCleaner(),
		sveltekit()
	],
	server: {
		host: "127.0.0.1"
	}
});
