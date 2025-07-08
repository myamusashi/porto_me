import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit()
	],
	resolve: {
		alias: {
			'$components': path.resolve("./src/components"),
			'$lib': path.resolve("./src/lib"),
		}
	}
});
