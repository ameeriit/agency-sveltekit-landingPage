<script lang="ts">
	import logo1 from '$lib/assets/PARENT.svg';
	import logo2 from '$lib/assets/THINK.svg';
	import logo3 from '$lib/assets/hotel.svg';
	import logo4 from '$lib/assets/loading.svg';
	import quote from '$lib/assets/quote.svg';

	let clientSectionTitle: string = 'we help more than 50+ businesses to build brands';
	let clientName: string = 'Esther howard';
	let clientPosition: string = 'Hr of var group';
	let clientTestimonial: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa aspernatur adexcepturi odit pariatur provident, similique hic libero natus officiis ipsam qui dolores enim aut voluptatum, amet illo laborum. Lorem ipsum dolor sit amet consectetur adipisicing eli. amet illo laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit.';

	let logos = [
		{ logo: logo1 },
		{ logo: logo2 },
		{ logo: logo3 },
		{ logo: logo4 },
		{ logo: logo1 },
		{ logo: logo2 },
		{ logo: logo3 },
		{ logo: logo4 },
		{ logo: logo1 }
	];
</script>

<section id="project" class="bg-raisinBlack py-16 lg:py-36">
	<div class="container mx-auto">
		<div>
			<h3 class="max-w-[640px] leading-tight text-white mb-12">
				{clientSectionTitle}
			</h3>
			<div class="md:flex-row flex flex-col-reverse">
				<div class="grid grid-cols-2 md:grid-cols-3 gap-0 flex-[55%]">
					{#each logos as logoItem, logoIndex}
						<div
							class="{logoIndex === logos.length - 1 &&
								'md:col-span-1 col-span-full'} border-[1px] h-[100%] min-h-28 border-white flex items-center justify-center p-5"
						>
							<img class="object-cover w-[120px] h-auto" src={logoItem.logo} alt="Logo" />
						</div>
					{/each}
				</div>

				<div
					class="flex-[45%] border-b-0 md:border-l-0 md:border-b-[1px] border-[1px] border-white px-8 py-6 lg:pl-20 lg:pr-12 lg:pb-16 lgpt-8"
				>
					<img class="w-[60px] lg:w-[80px] h-auto object-cover mb-4" src={quote} alt="quote.svg" />
					<p class="text-white mb-10">
						{clientTestimonial}
					</p>

					<div class="flex gap-4">
						<div class="rounded-full w-[60px] h-[60px]">
							<img
								class="w-full h-full object-cover rounded-[inherit]"
								src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="avatar.svg"
							/>
						</div>

						<div>
							<h6 class="text-white">{clientName}</h6>
							<p class="text-white">{clientPosition}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div></div>
	</div>
</section>
