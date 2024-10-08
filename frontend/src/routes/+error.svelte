<script lang="ts">
	import { page } from '$app/stores';
	import '@styles/error.scss'
	import { _ } from 'svelte-i18n';
	let errorMessage: string;

	switch ($page.status) {
		case 404:
			errorMessage = "ページが見つかりません";
			break;
		case 500:
			errorMessage = "サーバーエラーが発生しました";
			break;
		case 403:
			errorMessage = "アクセスが拒否されました";
			break;
		default:
			errorMessage = "不明なエラーが発生しました";
	}
</script>

<main class="error-page">
	<h1>{errorMessage}</h1>
	<a href="/">ホームに戻る</a>
</main>