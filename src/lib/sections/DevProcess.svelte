<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
	import ProcessDesignButton from '$lib/components/ProcessDesignButton.svelte';

	let label: string;
	let id: number;
	let devProcessTitle: string = 'Proved process to maximize your business growth';
	let devProcessContent: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa aspernatur ad excepturi odit pariatur provident, similique hic libero natus officiis ipsam qui dolores enim aut voluptatum, amet illo laborum.';
</script>

{#if label}
	<div class="flex gap-2 font-semibold text-lg bg-white w-fit px-6 py-4 rounded-full">
		<span
			class="text-base font-bold flex bg-apricot h-[24px] w-[24px] justify-center items-center border-[1px] border-raisinBlack rounded-full"
			>{id}</span
		>
		{label}
	</div>
{/if}

<section class="py-10 sm:py-14 md:py-36 bg-lightSilver">
	<div class="container mx-auto">
		<div class="flex sm:flex-row sm:items-center flex-col sm:gap-4 gap-12">
			<div class="flex-1">
				<h3 class="w-full max-w-[400px] leading-tight text-raisinBlack mb-12">
					{devProcessTitle}
				</h3>
				<p class="text-raisinBlack mb-10">
					{devProcessContent}
				</p>
				<Buttons variant="primary" label="Book A Free Call" />
			</div>
			<div class="flex-1">
				<div class="flex flex-col gap-6 sm:gap-12 w-full md:max-w-[540px] ml-auto">
					<ProcessDesignButton label="Discover workshop" id={1} extendClass="justify-end" />
					<ProcessDesignButton label="Design" id={2} />
					<ProcessDesignButton label="Development" id={3} extendClass="justify-end mr-12 mb-10" />
					<ProcessDesignButton
						label="Result"
						id={4}
						extendClass="justify-center ml-[120px]"
						color="bg-raisinBlack text-white"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
