<script lang="ts">
	import { page } from '$app/stores';
	import '@styles/error.scss'
	let errorMessage: string;

	switch ($page.status) {
		case 404:
			errorMessage = 'お探しのページは見つかりませんでした。';
			break;
		case 500:
			errorMessage = 'サーバーに問題が発生しました。';
			break;
		case 403:
			errorMessage = 'アクセスが禁止されています。';
			break;
		default:
			errorMessage = '不明なエラーが発生しました。';
	}
</script>

<main class="error-page">
	<h1>{errorMessage}</h1>
	<a href="/">ホームに戻る</a>
</main>