<script>
	import { modalOpened } from '$lib/store.js';
	let isOpen = false;
	let closing = false;

	modalOpened.subscribe((value) => {
		closing = false;
		isOpen = value;
	});

	const close = () => {
		closing = true;
		setTimeout(() => {
			modalOpened.set(false);
		}, 300);
	};
</script>

{#if isOpen}
	<div
		class={'fixed top-0 left-0 right-0 bottom-0 w-full h-full z-2000 flex items-center justify-center' +
			(closing
				? 'pointer-events-none opacity-0 transition-opacity animate-slide-out animate-close-modal'
				: '')}
	>
		<div
			class="absolute w-full h-full bg-black bg-opacity-75 animate-slide-in animate-slide-out animate-close-modal"
			on:click={close}
		/>
		<div
			class="z-10 max-w-screen-sm m-auto rounded-lg overflow-hidden bg-gray-900 bg-opacity-75 animate-open-modal"
		>
			<div class="p-10 max-h-full overflow-auto content">
				<slot name="content" />
			</div>
		</div>
	</div>
{/if}

<style>
	.closing {
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
</style>
