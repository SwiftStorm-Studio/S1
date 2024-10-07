import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const componentsPath = path.resolve(__dirname, './src/components');
const stylesPath = path.resolve(__dirname, './src/styles');

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@components': componentsPath,
      '@styles': stylesPath
    }
  },
  server: {
    port: 8080
  },
  build: {
    sourcemap: true,
  }
});
