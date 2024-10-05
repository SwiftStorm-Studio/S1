<script lang="ts">
  import Header from '@components/Header.svelte';
  import '@assets/styles/App.svelte.scss';

  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<main>
  <Header title="Svelte + Vite Project" />
  <h1>Welcome to Svelte + TypeScript + SCSS</h1>
  <p>Count: {count}</p>
  <button on:click={increment}>Increment</button>
</main>
