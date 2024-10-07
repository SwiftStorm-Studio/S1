<script>
  import Header from '@components/Header.svelte';
</script>

<Header />
<main>
  <slot />
</main>

<footer>
  <p>&copy; 2024 SwiftStorm Studio. All rights reserved.</p>
</footer>

<style lang="scss" src="@styles/layout.scss"></style>
