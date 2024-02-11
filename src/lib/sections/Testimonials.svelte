<script>
	import BoxCard from '$lib/components/BoxCard.svelte';

	let dataArray = [
		{
			imageUrl:
				'https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			tags: ['Web Design', 'Branding'],
			title: 'Bolix Website Designa',
			description:
				'It is a long established fact that a reader will be lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit quasi accusamus quod, perferendis placeat',
			author: [
				{
					name: 'Author Name',
					role: 'Author Role',
					avatarUrl:
						'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
			],
			extendClass: 'bg-lavenderBlue z-20',
			href: '/'
		},
		{
			imageUrl:
				'https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			tags: ['Web Design', 'Branding'],
			title: 'Bolix Website Designa',
			description:
				'It is a long established fact that a reader will be lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit quasi accusamus quod, perferendis placeat',
			author: [
				{
					name: 'Author Name',
					role: 'Author Role',
					avatarUrl:
						'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
			],
			extendClass: 'bg-lightRed absolute -top-16 left-0 -z-10 scale-95',
			href: '/'
		},
		{
			imageUrl:
				'https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			tags: ['Web Design', 'Branding'],
			title: 'Bolix Website Designa',
			description:
				'It is a long established fact that a reader will be lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit quasi accusamus quod, perferendis placeat',
			author: [
				{
					name: 'Author Name',
					role: 'Author Role',
					avatarUrl:
						'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
			],
			extendClass: 'bg-teaGreen absolute -top-28 left-0 -z-20 scale-90',
			href: '/'
		},
		{
			imageUrl:
				'https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			tags: ['Web Design', 'Branding'],
			title: 'Bolix Website Designa',
			description:
				'It is a long established fact that a reader will be lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit quasi accusamus quod, perferendis placeat',
			author: [
				{
					name: 'Author Name',
					role: 'Author Role',
					avatarUrl:
						'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
			],
			extendClass: 'bg-apricot absolute -top-44 left-0 -z-30 scale-75',
			href: '/'
		}
	];
</script>

<section class="pb-20 pt-32 md:pt-48">
	<div class="container mx-auto">
		<div class="relative z-50">
			{#each dataArray as data}
				<BoxCard {data} />
			{/each}
		</div>
	</div>
</section>
