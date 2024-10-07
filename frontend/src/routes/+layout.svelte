<script lang="ts">
	import '@styles/global.scss';
</script>

<main>
	<slot />
</main>

<style>
    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
