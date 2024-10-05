import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const componentsPath = path.resolve(__dirname, './src/components');
const assetsPath = path.resolve(__dirname, './src/assets');

console.log('Components Path:', componentsPath);
console.log('Assets Path:', assetsPath);

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@components': componentsPath,
      '@assets': assetsPath
    }
  },
  build: {
    outDir: '../backend/src/main/resources/frontend',
    sourcemap: true
  }
});
