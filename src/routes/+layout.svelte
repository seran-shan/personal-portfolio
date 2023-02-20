<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';
	import { customBackground } from '$lib/store';

	const cssVariables = (node: HTMLElement, variables: Record<string, string>) => {
		setCssVariables(node, variables);

		return {
			update(variables: Record<string, string>) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: Record<string, string>) => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};
</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

<!-- <header class="header"> -->
<Navbar segment={$page.url.pathname} />
<!-- </header> -->

<slot />

<footer>
	Powered with ❤️ by <span class="me">Seran</span> in
	<span class="svelte">Svelte</span>
</footer>

<style>
	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0a0908;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: #c1dbe3;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: white;
		background: #efc000;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	:global(a) {
		text-decoration: none;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	.header {
		width: 100vw;
		backdrop-filter: blur(20px);
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
	}

	footer a {
		text-decoration: none;
		color: #4158d0;
		font-size: x-small;
	}
	footer .svelte {
		color: #efc000;
	}

	footer .me {
		color: #efc000;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}

		footer {
			font-size: medium;
		}
	}
</style>
