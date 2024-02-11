<script lang="ts">
	export let variant: Variant;

	type Variant = 'black' | 'white';

	const variants: Record<Variant, string> = {
		black: 'bg-raisinBlack',
		white: 'bg-white'
	};
</script>

<div class={'relative  w-8 h-8 rounded-full ' + variants[variant]}>
	<span class="absolute bg-iris w-4 h-4 rounded-full right-0 top-2/4 -translate-y-1/2"></span>
</div>
