<script lang="ts">
	import { page } from '$app/stores';
	import '@styles/error.scss'
	import { _ } from 'svelte-i18n';
	let errorMessage: string;

	switch ($page.status) {
		case 404:
			errorMessage = $_('page.error.404');
			break;
		case 500:
			errorMessage = $_('page.error.500');
			break;
		case 403:
			errorMessage = $_('page.error.403');
			break;
		default:
			errorMessage = $_('page.error.999');
	}
</script>

<main class="error-page">
	<h1>{errorMessage}</h1>
	<a href="/">ホームに戻る</a>
</main>