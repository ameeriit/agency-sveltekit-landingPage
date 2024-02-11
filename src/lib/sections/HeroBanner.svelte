<script>
	import RoundArrow from '$lib/assets/roundedWhiteArrow.svg';

	const dynamicContentData = [
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' },
		{ text: 'An idea for a project? Now use our cost estimator for free.' }
	];
</script>

<section class="bg-raisinBlack">
	<div class="flex whitespace-nowrap overflow-hidden gap-28 animate-scrollInfiniteX py-2">
		<div class="flex whitespace-nowrap gap-28 animate-scrollInfiniteX">
			{#each dynamicContentData as item}
				<div class="flex gap-4 items-center">
					<p class="font-medium text-white">{item.text}</p>
					<img
						class="w-[24px] h-[24px] -rotate-[45deg]"
						src={RoundArrow}
						alt="roundedRightArrow.svg"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
