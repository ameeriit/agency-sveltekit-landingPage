<script lang="ts">
	import type { BoxCardType } from '$lib/types.ds';
	import Buttons from './Buttons.svelte';

	export let data: BoxCardType;
</script>

<div class="flex flex-col md:flex-row border-[1px] border-raisinBlack {data.extendClass}">
	<div class="w-full md:max-w-[550px] h-[450px] md:h-[600px] p-6 md:p-10 md:flex-1">
		<img class="w-full h-full object-cover" src={data.imageUrl} alt="" />
	</div>
	<div class="p-6 md:pl-10 md:py-10 md:pr-24 md:flex-1 flex flex-col justify-between">
		<div class="mb-20 md:mb-0">
			<div class="flex gap-2 mb-4">
				{#each data.tags as tag}
					<span class="bg-white px-5 py-1 rounded-full">{tag}</span>
				{/each}
			</div>
			<h5>{data.title}</h5>
			<div class="mt-12 mb-10">
				<p class="italic font-normal capitalize">{data.description}</p>
			</div>
			{#each data.author as author}
				<div class="flex gap-4 border-b-[1px] border-raisinBlack pb-8">
					<div class="rounded-full w-[60px] h-[60px]">
						<img
							class="w-full h-full object-cover rounded-[inherit]"
							src={author.avatarUrl}
							alt="avatar.svg"
						/>
					</div>
					<div>
						<h6 class="font-semibold">{author.name}</h6>
						<p>{author.role}</p>
					</div>
				</div>
			{/each}
		</div>
		<div>
			<Buttons label="Ready Case Study" variant="secondary" href={data.href} />
		</div>
	</div>
</div>
