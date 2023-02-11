<script>
	import skills from '$lib/skills';
</script>

<svelte:head>
	<title>Seran Shanmugathas - About</title>
	<meta name="description" content="About Seran Shanmugathas" />
</svelte:head>

<div class="max-w-900 p-0 flex justify-center">
	<main class="max-w-full min-h-500 text-left mx-auto box-border">
		<h1 class="font-bold text-xl mt-0 mb-5 font-sans text-start">About</h1>
		<p>
			I'm a Software developer with over 2 years of front-end development experience, experienced in
			both enterprise and open-source software development. I'm based in Italy and currently working
			as a consultant at Junior Consulting. I tend to learn and use the best technology and approach
			to best solve the problem I'm facing.
		</p>
		<h2 class="mt-5">Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list flex flex-col sm:flex-row gap-5 sm:gap-30">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>
