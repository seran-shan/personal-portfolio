<script lang="ts">
	import { onMount } from 'svelte';

	export let email: string;

	let textarea: HTMLTextAreaElement;

	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={email} bind:this={textarea} />
