import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({}),

	kit: {
		adapter: adapter(),
		alias: {
			'@lib': path.resolve('src/lib'),
			'@components': path.resolve('src/components'),
			'@styles': path.resolve('src/styles'),
			'@routes': path.resolve('src/routes'),
			'@static': path.resolve('static')
		}
	}
};

export default config;
