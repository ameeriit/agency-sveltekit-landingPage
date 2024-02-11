<script lang="ts">
	export let label: string;
	export let variant: Variant;
	export let image: string | undefined = undefined;
	export let href: string | undefined = undefined;

	type Variant = 'primary' | 'secondary' | 'plain' | 'roundedSecondary';

	const variants: Record<Variant, string> = {
		primary:
			'bg-iris text-white rounded-full px-8 py-4 md:px-10 md:py-5 uppercase hover:bg-white hover:outline-1 hover:outline hover:outline-raisinBlack hover:text-raisinBlack',
		secondary:
			'bg-raisinBlack text-white rounded-full px-8 py-4 md:px-10 md:py-5 uppercase hover:bg-white hover:outline-1 hover:outline hover:outline-raisinBlack hover:text-raisinBlack',
		plain: 'text-raisinBlack text-lg flex gap-2 items-center hover:text-iris transition-all',
		roundedSecondary:
			'bg-raisinBlack h-[160px] w-[160px] uppercase p-4 sm:p-6 md:p-8 rounded-full text-white justify-center items-center hover:bg-iris text-xl'
	};
</script>

{#if href}
	<a
		{href}
		class={'group transition-all text-semibold rounded-full inline-flex ' + variants[variant]}
	>
		{label}
	</a>
{:else}
	<button class={'group transition-all text-semibold rounded-full ' + variants[variant]}>
		{label}
		{#if image}
			<img class="w-6 group-hover:translate-x-1 transition-all" src={image} alt="Icon.svg" />
		{/if}
	</button>
{/if}
