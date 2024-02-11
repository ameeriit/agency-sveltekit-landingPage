<script>
	import Buttons from '$lib/components/Buttons.svelte';
	import Card from '$lib/components/Card.svelte';

	const cards = [
		{
			title: 'UI/UX Design',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex amet laborum assumenda, laudantium nostrum enim odit maiores, blanditiis.',
			img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'We Design',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex amet laborum assumenda, laudantium nostrum enim odit maiores, blanditiis.',
			img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: '3D Art',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex amet laborum assumenda, laudantium nostrum enim odit maiores, blanditiis.',
			img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];

	const sectionTitle = "We're the agency that builds brands";
</script>

<section id="aboutUs" class="bg-raisinBlack py-16 md:py-36 border-l-[5px] border-white">
	<div class="container mx-auto">
		<div class="mb-12 md:mb-20">
			<h3 class="max-w-[640px] leading-tight text-white mb-8 md:mb-12">
				{sectionTitle}
			</h3>
			<div class="text-end">
				<Buttons label="BOOK A FREE CALL" variant="primary" />
			</div>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
			{#each cards as card, cardIndex}
				<Card {card} {cardIndex} {cards} />
			{/each}
		</div>
	</div>
</section>
