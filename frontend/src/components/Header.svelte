<script lang="ts">
	import '@styles/header.scss';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

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

<header class="header {headerVisible ? '' : 'scroll-hidden'}">
	<nav class="navbar">
		<div class="navbar-logo">
			<img src="/logo.png" alt="logo" />
		</div>
		<ul class="navbar-links">
			<li><a href="/">{$_('page.nav.home')}</a></li>
			<li><a href="/services">{$_('page.nav.services')}</a></li>
			<li><a href="/login">{$_('page.nav.login')}</a></li>
		</ul>
	</nav>
</header>