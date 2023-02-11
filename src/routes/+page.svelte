<script>
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import { modalOpened } from '$lib/store';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col items-center justify-center h-full">
	<h1 class="text-center text-xl font-bold mb-6">
		Hi!✋ <br /> I'm Seran a Software Developer 💻 based in Norway
	</h1>
	<div class="flex items-center justify-between gap-10 w-64">
		<div
			on:click={() => {
				modalOpened.set(true);
			}}
			class="text-white cursor-pointer hover:text-indigo-400 transition-colors duration-200"
		>
			<FaEnvelope />
		</div>
		<a
			href="https://github.com/Ladvace"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white cursor-pointer hover:text-indigo-400 transition-colors duration-200"
		>
			<FaGithub />
		</a>
		<a
			href="https://www.linkedin.com/in/ladvace/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white cursor-pointer hover:text-indigo-400 transition-colors duration-200"
		>
			<FaLinkedin />
		</a>
		<a
			href="https://medium.com/@ladvace"
			aria-label="Medium"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white cursor-pointer hover:text-indigo-400 transition-colors duration-200"
		>
			<FaMedium />
		</a>
	</div>
</main>
