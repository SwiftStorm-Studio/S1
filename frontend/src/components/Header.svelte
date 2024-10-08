<script lang="ts">
	import '@styles/header.scss';
	import { onMount } from 'svelte';

	let lastScrollY = 0;
	let headerVisible = true;

	function handleScroll() {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY) {
			headerVisible = false;
		} else {
			headerVisible = true;
		}
		lastScrollY = currentScrollY;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="header {headerVisible ? '' : 'hidden'}">
	<nav class="navbar">
		<div class="navbar-logo">
			<img src="/logo.png" alt="logo" />
		</div>
		<ul class="navbar-links">
			<li><a href="/">ホーム</a></li>
			<li><a href="/services">サービス</a></li>
			<li><a href="/login">ログイン</a></li>
		</ul>
	</nav>
</header>