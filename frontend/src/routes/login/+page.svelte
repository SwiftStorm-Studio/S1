<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let showLogin = true;

	function switchToRegister() {
		showLogin = false;
	}

	function switchToLogin() {
		showLogin = true;
	}

	// アニメーションが終了したら `/register` に移動
	function handleRegisterAnimationEnd() {
		if (!showLogin) {
			console.log('Register animation ended. Navigating to /register');
			setTimeout(() => goto('/register'), 100); // 確実に移動するようにディレイをかける
		}
	}

	// アニメーションが終了したら `/login` に移動
	function handleLoginAnimationEnd() {
		if (showLogin) {
			console.log('Login animation ended. Navigating to /login');
			setTimeout(() => goto('/login'), 100); // 確実に移動するようにディレイをかける
		}
	}
</script>

<main>
	<div class="card">
		<div
			class="left-side {showLogin ? '' : 'register-left'}"
			transition:fade={{ duration: 500 }}
			on:transitionend={handleRegisterAnimationEnd}
		>
		{#if showLogin}
			<h1>Don't Have an Account?</h1>
			<p>If you don't have an account, please register and join us to explore amazing features and benefits.</p>
			<button class="register-button" on:click={switchToRegister}>Register Now</button>
		{:else}
			<h2>Welcome!</h2>
			<p>Join us by creating a new account!</p>
			<button class="register-button" on:click={switchToLogin}>Back to Login</button>
		{/if}
	</div>

		<div
		class="right-side {showLogin ? '' : 'register-right'}"
		transition:fade={{ duration: 500 }}
		on:transitionend={handleLoginAnimationEnd}
	>
	{#if showLogin}
		<h2>Welcome Back!</h2>
		<div class="input-field">
			<input type="text" placeholder="Username or Email or User ID" />
		</div>
		<div class="input-field">
			<input type="password" placeholder="Password" />
		</div>
		<div class="remember-me">
			<input type="checkbox" id="remember" />
			<label for="remember">Remember Me</label>
		</div>
		<button class="login-button">Login</button>
		<button class="forgot-password">Forgot Password?</button>
	{:else}
		<h1>Create Account</h1>
		<div class="input-field">
			<input type="text" placeholder="Username" />
		</div>
		<div class="input-field">
			<input type="email" placeholder="Email" />
		</div>
		<div class="input-field">
			<input type="password" placeholder="Password" />
		</div>
		<button class="register-button">Sign Up</button>
		{/if}
		</div>
	</div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 99vh;
        background-color: #1e1e1e;
    }

    .card {
        width: 1200px;
        height: 700px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        display: flex;
        overflow: hidden;
    }

    .left-side, .right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        transition: width 0.5s;
    }

    .left-side {
        width: 40%;
        background: linear-gradient(to right, #1a3c5a, #64afcd);
        color: white;
        text-align: center;
    }

		.left-side h1 {
				margin-bottom: 30px;
    }

    .right-side {
        width: 60%;
        background-color: #ffffff;
        color: black;
    }

    .register-left {
        width: 60%;
    }

    .register-right {
        width: 40%;
    }

    .input-field {
        width: 100%;
        margin-bottom: 20px;
    }

    .input-field input {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 5px;
    }

    .login-button, .register-button {
        width: 85%;
        background-color: #1a3c5a;
        color: #ffffff;
        border: none;
        padding: 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        margin-bottom: 10px;
    }

		.login-button {
				margin-top: 20px;
				margin-bottom: 20px;
		}

		.register-button {
				margin-top: 50px;
		}

    .login-button:hover, .register-button:hover {
        background-color: #64afcd;
    }

    .forgot-password {
        background: none;
        border: none;
        color: #1a3c5a;
        cursor: pointer;
        text-decoration: underline;
        font-size: 1rem;
    }

    h1, h2, p {
        margin: 0;
    }
</style>
