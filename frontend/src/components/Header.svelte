<script>
	import '@styles/header.scss';
	let isLoggedIn = false;  // ログイン状態の管理
</script>

<header class="header">
	<a href="/" class="logo-link">
		<img class="logo" src="/logo.png" alt="Logo"/>
	</a>

	<button class="login-btn" on:click={() => isLoggedIn = !isLoggedIn}>
		<img class="icon" src="/login.png" alt="User Icon"/>
		{#if isLoggedIn}
			<span>Logout</span>
		{:else}
			<span>Login</span>
		{/if}
	</button>
</header>
