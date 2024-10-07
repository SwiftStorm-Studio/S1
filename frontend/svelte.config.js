import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@components': path.resolve('src/components'),
			'@styles': path.resolve('src/styles'),
			'@routes': path.resolve('src/routes')
		}
	}
};

export default config;
