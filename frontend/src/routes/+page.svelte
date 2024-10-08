<div class="content-container">
	<!-- Hero Section -->
	<section class="hero-section">
		<h1>SwiftStorm Studio</h1>
		<p>軽量で高速、そして多言語対応の開発を目指す</p>
		<p>SwiftStorm Studio は、軽量性と柔軟な多言語対応を重視したソフトウェア開発を行っています。</p>
		<button on:click={() => {/* 詳細ページへのリンクを追加 */}}>プロジェクトをもっと見る</button>
	</section>

	<!-- Features Section -->
	<section class="features-section">
		<div class="feature">
			<h2>軽量性</h2>
			<p>リソース消費を最小限に抑え、シンプルで高速な設計を心がけています。</p>
		</div>
		<div class="feature">
			<h2>多言語対応</h2>
			<p>日本語・英語・その他多言語をサポートし、世界中のユーザーに対応します。</p>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="projects-section">
		<h2>プロジェクト紹介</h2>
		<div class="project">
			<h3>プロジェクト名</h3>
			<p>プロジェクトの概要と技術スタックを紹介します。</p>
			<button on:click={() => {/* プロジェクト詳細ページリンク */}}>詳細を見る</button>
		</div>
		<!-- 他のプロジェクトも追加可能 -->
	</section>

	<!-- Team Section -->
	<section class="team-section">
		<h2>チーム紹介</h2>
		<div class="team-member">
			<h3>メンバー名</h3>
			<p>役割: 開発者</p>
			<p>得意分野: フロントエンド、バックエンド</p>
		</div>
		<!-- 他のメンバーも追加可能 -->
	</section>
</div>

<style lang="scss">
  .content-container {
		margin-top: 90px;
    padding: 2rem;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin: 0.5rem 0;
    }
    button {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .features-section, .projects-section, .team-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .feature, .project, .team-member {
      margin-bottom: 1.5rem;
    }
  }
</style>
