<script>
	import "@styles/login.scss"

	let username = '';
	let password = '';
	let isFormValid = false;

	function validateForm() {
		isFormValid = username.trim().length > 0 && password.length >= 4;
	}

	function navigateToRegister() {
		window.location.href = '/register';
	}

	function handleLogin() {
		if (isFormValid) {
			alert('Logging in...');
		} else {
			alert('Please fill in all fields correctly.');
		}
	}

	function handleForgotPassword() {
		alert('Redirecting to password reset...');
	}
</script>

<main>
	<div class="card">
		<div class="left-side">
			<h1>Don't Have an Account?</h1>
			<p>If you don't have an account, please register and join us to explore amazing features and benefits.</p>
			<button class="register-button" on:click={navigateToRegister}>Register Now</button>
		</div>

		<div class="right-side">
			<h2>Welcome Back!</h2>

			<div class="input-field">
				<input type="text" placeholder="Username or Email or User ID" bind:value={username} on:input={validateForm} />
			</div>

			<div class="input-field">
				<input type="password" placeholder="Password" bind:value={password} on:input={validateForm} />
			</div>

			<div class="remember-me">
				<input type="checkbox" id="remember" />
				<label for="remember">Remember Me</label>
			</div>

			<button class="login-button" on:click={handleLogin} disabled={!isFormValid}>Login</button>

			<button class="forgot-password" on:click={handleForgotPassword}>Forgot Password?</button>
		</div>
	</div>
</main>
