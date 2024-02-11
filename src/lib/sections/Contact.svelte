<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';

	let contactTitle: string = "Have Project in Mind? Let's Talk";
	let contactContent: string = 'It is a long Established fact that a reader';
</script>

<section id="contact" class="bg-lavenderBlue pt-24 pb-40">
	<div class="container mx-auto">
		<div class="max-w-[720px] mx-auto text-center mb-[80px]">
			<h2 class="uppercase font-normals mb-8">{contactTitle}</h2>
			<h6 class="uppercase font-bold text-iris">{contactContent}</h6>
		</div>
		<div class="text-center">
			<Buttons label="Contact" variant="roundedSecondary" href="/" />
		</div>
	</div>
</section>
