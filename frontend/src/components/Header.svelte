<script>
	import '@styles/header.scss';
	let isLoggedIn = false;
</script>

<header class="header">
	<a href="/" class="logo-link">
		<img class="logo" src="/logo.png" alt="Logo"/>
	</a>

	<button
		class="login-btn"
		on:click={() => {
      if (isLoggedIn) {
        isLoggedIn = false;
      } else {
        window.location.href = '/login';
      }
    }}
	>
		<img class="icon" src="/login.png" alt="icon"/>
		{#if isLoggedIn}
			<span>Logout</span>
		{:else}
			<span>Login</span>
		{/if}
	</button>
</header>
