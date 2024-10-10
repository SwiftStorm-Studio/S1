<script>
	import "@styles/global.scss"
	import { fade } from 'svelte/transition';
</script>

<style>
    main {
        position: relative;
    }

    .fade-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>

<main>
	<div class="fade-container" transition:fade|local={{ duration: 400 }}>
		<slot />
	</div>
</main>
