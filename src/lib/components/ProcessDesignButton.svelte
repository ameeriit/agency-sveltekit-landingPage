<script lang="ts">
	export let label: string;
	export let id: number;
	export let extendClass: string | undefined = undefined;
	export let color: string | 'bg-white text-raisinBlack' = 'bg-white text-raisinBlack';
</script>

<div class="flex {extendClass}">
	<div
		class=" flex gap-4 font-semibold border-[1px] border-raisinBlack w-fit md:px-10 sm:px-8 md:py-8 sm:py-6 px-8 py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl {color}"
	>
		<span
			class=" font-bold flex bg-apricot h-[32px] w-[32px] justify-center items-center border-[1px] text-raisinBlack border-raisinBlack rounded-full"
			>{id}</span
		>
		{label}
	</div>
</div>
