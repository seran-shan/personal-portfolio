<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	// import { modalOpened } from '$lib/store';
	import { goto } from '$app/navigation';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	openGraph={{
		title: 'Seran Shanmugathas - Portfolio',
		description:
			'I am currently in my third year of study at the Norwegian University of Science and Technology pursuing a degree in M.Sc. Computer Science. In my spare time, I enjoy developing my skills in software development and learning new technologies.',
		url: 'https://seranshan.no/',
		type: 'website'
	}}
/>

<svelte:head>
	<title>Seran Shanmugathas - Portfolio</title>
	<meta name="description" content="Seran Shanmugathas - Portfolio" />
</svelte:head>
<main>
	<h1>Hi!✋ <br /> I'm Seran Shanmugathas a Software Developer 💻 based in Norway</h1>
	<div class="icons">
		<div
			on:click={() => {
				goto('mailto:seran@live.no');
				console.log('clicked');
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</div>

		<a
			href="https://github.com/seran-shan"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/seran-shanmugathas/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #efc000;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
