<script lang="ts">
	import type { Card } from '$lib/types.ds';

	export let card: Card;
	export let cardIndex: number | null = null;
	export let cards: Card[];
</script>

<div
	class="{cardIndex === cards.length - 1 &&
		'lg:col-span-1 col-span-full'} p-6 md:p-10 border-[1px] border-white text-white"
>
	<div class="mb-8 md:mb-12">
		<h5 class="mb-6">{card.title}</h5>
		<p class="font-normal leading-8 md:leading-10 tracking-wider">
			{card.content}
		</p>
	</div>
	<div>
		<div class="bg-apricot rounded-full inline-block p-4">
			<img
				class="w-[24px] h-[24px] md:w-[40px] md:h-[40px] object-cover"
				src={card.img}
				alt="avatar.svg"
			/>
		</div>
	</div>
</div>
