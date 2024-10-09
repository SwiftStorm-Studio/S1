<script>
	import '@styles/global.scss';
	import Header from '@components/Header.svelte';
	import Footer from '@components/Footer.svelte';
	import { fade, slide } from 'svelte/transition';
</script>

<div class="main-container">
	<Header />

	<main class="content" transition:fade={{ duration: 400 }}>
		<slot />
	</main>

	<Footer />
</div>
