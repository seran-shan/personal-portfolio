<script>
	import skills from '$lib/skills';
</script>

<svelte:head>
	<title>Seran Shanmugathas - About</title>
	<meta name="description" content="About Seran Shanmugathas" />
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			In 2020, I embarked on my career as a software developer when I enrolled in the Computer
			Science master's program at the Norwegian University of Science and Technology. I was eager to
			take on new challenges and opportunities and I was introduced to web development, agile
			software development methods, and engineering principles. I was immediately drawn to this
			field.
		</p>
		<p>
			In 2022, I took on a part-time role as a software developer and project lead at Junior
			Consulting, Scandinavia's largest student-run consultancy firm. This experience has given me
			valuable insights into the work of a software consultant. At Junior Consulting, I have had the
			opportunity to work on various projects with a focus on cutting-edge web development.
		</p>
		<p>
			I am currently in my third year of study at the Norwegian University of Science and Technology
			pursuing a degree in Computer Science. In my spare time, I enjoy developing my skills in
			software development and learning new technologies.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<div class="list">
				{#each technologies as technology}
					<div class="list-box">
						<p style="color: #efc000">
							{technology}
						</p>
					</div>
				{/each}
			</div>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
		padding-top: 6%;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	p {
		color: white;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.list-box {
		background: #2c2100;
		padding: 0px 5px;
		border-radius: 10px;
		opacity: 0.8;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
