<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { goto } from '$app/navigation';
	import SvelteSeo from 'svelte-seo';
	import seran from '$lib/images/seran.jpg';
	import { experiences } from '$lib/experiences';
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
	<div class="container">
		<div class="about">
			<h1 class="header">Hi!✋ I'm Seran Shanmugathas</h1>
			<p class="paragraph">
				Software Developer 💻 based in Norway. Currently in my third year of study at the Norwegian
				University of Science and Technology pursuing a degree in M.Sc. Computer Science.
			</p>
			<div class="icons">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => {
						goto('mailto:seran@live.no');
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
		</div>
		<div class="image-container">
			<img src={seran} class="image" alt="Seran Shanmugathas" />
		</div>
	</div>
	<div class="experiences-container">
		<h1 class="experience-header">Experiences</h1>
		{#each experiences as experience}
			<div class="experience">
				<div class="experience-details">
					<h3 style="font-size: medium;">{experience.title}{' - '}{experience.company}</h3>
					<div class="experience-description">
						<p>{experience.description}</p>
						<span class="experience-date">{experience.startDate}</span>
					</div>
				</div>
			</div>
		{/each}
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

	.container {
		display: grid;
		grid-template-columns: 3fr 1fr;
		align-items: center;
		margin-top: 30vh;
	}

	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 900px;
	}

	.header {
		width: 100%;
		text-align: left;
	}

	.paragraph {
		text-align: left;
		margin: 0;
		max-width: 800px;
		margin-right: 20px;
	}

	.icons {
		display: flex !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
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

	.image {
		width: 200px;
		height: 200px;
		border-radius: 10px;
	}

	.experiences-container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin-top: 5%;
	}

	.experience {
		display: flex;
		margin: 10px;
		padding: 10px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		width: 800px;
		text-align: left;
		border-bottom: 1px solid rgba(239, 192, 0, 0.5);
	}

	.experience-header {
		text-align: center;
		font-size: 28px;
		font-weight: bold;
		font-size: x-large;
		text-align: left;
		text-decoration: underline;
		text-decoration-color: #efc000;
		text-underline-offset: 10px;
	}

	.experience-details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}

	.experience-details h3 {
		margin: 0;
		font-size: 1.2rem;
	}

	.experience-details p {
		margin: 5px 0 10px;
	}

	.experience-description {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.experience-date {
		font-size: 0.8rem;
		color: #efc000;
		right: 0;
	}

	.experience-description p {
		font-size: small;
		flex-grow: 1;
		word-wrap: break-word;
		max-width: 600px;
	}

	.experience-description .experience-date {
		font-size: small;
		margin-left: auto;
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

	@media (max-width: 900px) {
		.container {
			grid-template-rows: 1fr 2fr;
			grid-template-columns: none;
			margin-top: 15vh;
		}

		.about {
			grid-row: 2;
		}

		.about {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.header {
			width: 90%;
			text-align: center;
			font-size: large;
		}

		.paragraph {
			text-align: center;
			width: 80%;
			margin-right: 0;
			font-size: small;
		}

		.image {
			grid-row: 1;
		}

		.experience {
			width: 90%;
		}

		.experience-description p {
			font-size: small;
			flex-grow: 1;
			word-wrap: break-word;
			max-width: 200px;
		}
	}
</style>
