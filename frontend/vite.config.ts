import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		}
	},
	server: {
		port: 8080
	}
});
