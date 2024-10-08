<script lang="ts">
	import '@styles/header.scss';
	import { onMount } from 'svelte';

	let lastScrollPosition = 0;
	let isHidden = false;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.scrollY;

			if (currentScrollPosition > lastScrollPosition) {
				isHidden = true;
			} else {
				isHidden = false;
			}

			lastScrollPosition = currentScrollPosition;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="header {isHidden ? 'hidden' : ''}">
	<nav class="navbar">
		<div class="navbar-logo">
			<img src="/logo.png" alt="logo"/>
		</div>
		<ul class="navbar-links">
			<li><a href="/">ホーム</a></li>
			<li><a href="/about">概要</a></li>
			<li><a href="/services">サービス</a></li>
		</ul>
	</nav>
</header>
