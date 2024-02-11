<script lang="ts">
	import RoundedRightArrow from '$lib/assets/roundedRightArrow.svg';
	import Buttons from '$lib/components/Buttons.svelte';
	import type { Article } from '$lib/types.ds';

	export let article: Article = {
		title: 'A team of full-time creative folks',
		titleImage:
			'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: [
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed praesentium cum saepe velit. Vitae sed impedit eligendi. Laudantium mollitia consectetur porro et exercitationem odit accusamus facere alias laboriosam? Quibusdam, sapiente?',
			'Another paragraph of the article.'
		],
		contentImage:
			'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	};
</script>

<section id="blog" class="bg-lightSilver py-20 lg:py-32">
	<div class="container mx-auto">
		<div class="flex md:flex-row flex-col bg-lavenderBlue justify-between">
			<div
				class="md:pl-10 md:pr-28 md:py-12 p-6 sm:p-8 md:flex-[68%] border-b-0 md:border-r-0 border-[1px] border-raisinBlack"
			>
				<h2 class="leading-[1.2] mb-4">
					{article.title}
				</h2>
			</div>
			<div class="md:flex-[32%] relative border-[1px] border-b-0 border-raisinBlack">
				<div class="h-full w-full">
					<img
						class="w-full h-full object-cover absolute top-0 left-0 z-10"
						src={article.titleImage}
						alt=""
					/>
				</div>
			</div>
		</div>
		<div class="flex md:flex-row flex-col bg-white justify-between">
			<div class="flex-[45%] relative border-r-0 border-[1px] border-raisinBlack">
				<div class="h-full w-full">
					<img
						class="w-full h-full object-cover absolute top-0 left-0 z-10"
						src={article.contentImage}
						alt=""
					/>
				</div>
			</div>
			<div class="p-6 sm:p-8 lg:pl-10 lg:pr-28 lg:py-12 flex-[55%] border-[1px] border-raisinBlack">
				<div class="mb-4">
					{#each article.content as paragraph}
						<p class="lg:mb-8 mb-4 text-sm mob:text-base lg:text-xl">{paragraph}</p>
					{/each}
				</div>
				<Buttons label="Know More" variant="plain" image={RoundedRightArrow} />
			</div>
		</div>
	</div>
</section>
