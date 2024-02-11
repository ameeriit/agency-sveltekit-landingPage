<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
	import NameArtIllustration from '../components/NameArtIllustration.svelte';

	let bannerContent: string =
		'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from';
</script>

<section class="pb-32 md:48 pt-48 md:pb-52 relative bg-platinum">
	<div class="container mx-auto">
		<div class="text-center">
			<div class="mb-12 relative">
				<div>
					<NameArtIllustration
						extendClass="bg-apricot -top-[80px] lg:-top-[20px] right-[0px] rotate-[20deg] lg:rotate-[32deg]"
						label="Development"
					/>
					<NameArtIllustration
						extendClass="bg-lavenderBlue right-0 -bottom-[29px] lg:bottom-[0px] lg:right-[100px] -rotate-[20deg]"
						label="Design"
					/>
					<NameArtIllustration
						extendClass="bg-white -bottom-[100px] lg:-bottom-[170px] -left-[40px] lg:left-[100px] -bottom-[50px] -rotate-[70deg] lg:-rotate-[20deg]"
						label="Marketing"
					/>
				</div>
				<h1 class="max-w-[620px] mx-auto leading-tight mb-4">
					We're here to <span class="font-bold">elicit</span> strong
					<span class="font-bold">feelings.</span>
				</h1>
				<p class="max-w-[750px] mx-auto text-xl">
					{bannerContent}
				</p>
			</div>
			<Buttons label="Book a free Call" variant="primary" />
		</div>
	</div>
</section>
