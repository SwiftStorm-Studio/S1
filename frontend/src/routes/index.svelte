<script>
  let count = 0;
  const increment = () => count += 1;
</script>

<div class="index-container">
  <h1>Welcome to SwiftStorm Studio</h1>
  <p>We create awesome web experiences!</p>

  <div class="counter">
    <button on:click={increment}>Increment</button>
    <p>Count: {count}</p>
  </div>
</div>

<style lang="scss" src="@styles/index.svelte.scss"></style>
