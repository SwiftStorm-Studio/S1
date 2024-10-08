<script lang="ts">
	import '@styles/header.scss';
	import { onMount } from 'svelte';
	import { changeLocale, loading } from '@lib/i18n';
	import { _ } from 'svelte-i18n';
	import { setCookie, getCookie } from '@lib/cookie';

	let lastScrollPosition = 0;
	let isHidden = false;
	let isLanguageLoading = true;

	const loadingMessages = {
		ja: "読み込み中…",
		en: "Loading..."
	};

	let selectedLanguage: keyof typeof loadingMessages = (getCookie('lang') as keyof typeof loadingMessages) || 'ja';

	changeLocale(selectedLanguage);
	loading.then(() => {
		isLanguageLoading = false;
	});

	function handleLanguageChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedLanguage = target.value as keyof typeof loadingMessages;
		isLanguageLoading = true;
		changeLocale(selectedLanguage);
		setCookie('lang', selectedLanguage, 365);

		loading.then(() => {
			isLanguageLoading = false;
		});
	}

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


{#if isLanguageLoading}
	<div class="loading-screen">
		<div class="loading-logo">
			<img src="/loading.png" alt="Logo" class="rotating-logo"/>
		</div>
		<div class="loading-text">
			{loadingMessages[selectedLanguage] || "Loading..."}
		</div>
	</div>
{:else}
	<header class="header {isHidden ? 'hidden' : ''}">
		<nav class="navbar">
			<div class="navbar-logo">
				<img src="/logo.png" alt="logo"/>
			</div>
			<ul class="navbar-links">
				<li><a href="/">{$_('page.nav.home')}</a></li>
				<li><a href="/services">{$_('page.nav.services')}</a></li>
				<li><a href="/login">{$_('page.nav.login')}</a></li>
				<li class="navbar-language">
					<select on:change={handleLanguageChange} bind:value={selectedLanguage} aria-label="言語を選択">
						<option value="ja">日本語</option>
						<option value="en">English</option>
					</select>
				</li>
			</ul>
		</nav>
	</header>
{/if}
