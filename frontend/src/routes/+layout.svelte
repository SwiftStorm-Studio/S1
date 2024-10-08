<script lang="ts">
	import "@styles/global.scss";
	import "@styles/routes/style.scss";
	import Header from '@components/Header.svelte';
	import Footer from '@components/Footer.svelte';
	import { onMount } from 'svelte';
	import { isLoading } from '$lib/stores/loadingStore';
	import { initLocale } from '$lib/i18n';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { cubicOut } from 'svelte/easing';

	let loadingDuration = 1000;
	let loadingTimeout: ReturnType<typeof setTimeout>;

	navigating.subscribe((nav) => {
		if (nav) {
			isLoading.set(true);
			clearTimeout(loadingTimeout);
		} else {
			loadingTimeout = setTimeout(() => {
				isLoading.set(false);
			}, loadingDuration);
		}
	});

	onMount(async () => {
		await initLocale();
	});
</script>

{#if $isLoading}
	<div class="loading-screen">
		<img src="/loading.png" alt="Loading..." class="loading-image"/>
	</div>
{:else}
	<div class="page-container">
		<div in:fade={{ duration: 500, delay: 0, easing: cubicOut }}>
			<Header />
		</div>
		<main class="main-content" in:fade={{ duration: 500, delay: 0, easing: cubicOut }}>
			<slot />
		</main>
		<Footer />
	</div>
{/if}
