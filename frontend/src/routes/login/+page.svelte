<script>
	import "@styles/routes/login/style.scss"

	let username = '';
	let password = '';

	const handleLogin = () => {
		console.log('ログインボタンが押されました:', { username, password });

	};
</script>

<div class="login-container">
	<div class="login-form">
		<h1>ログイン</h1>
		<div class="form-group">
			<label for="username">ユーザー名</label>
			<input
				type="text"
				id="username"
				bind:value={username}
				placeholder="ユーザー名を入力"
			/>
		</div>

		<div class="form-group">
			<label for="password">パスワード</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				placeholder="パスワードを入力"
			/>
		</div>

		<button class="login-button" on:click={handleLogin}>ログイン</button>
	</div>
</div>