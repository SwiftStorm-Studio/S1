import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src/styles'],
    },
    typescript: {
      transpileOnly: true,
    }
  }),
  kit: {
    adapter: adapter(),
    alias: {
      '@components': 'src/components',
      '@styles': 'src/styles'
    }
  }
};
