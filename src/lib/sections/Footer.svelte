<script>
	import dribble from '$lib/assets/dribble.svg';
	import Hiring from '$lib/assets/hiring.svg';
	import instagram from '$lib/assets/instagram.svg';
	import location from '$lib/assets/location.svg';
	import phone from '$lib/assets/phone.svg';
	import solidMail from '$lib/assets/solidMail.svg';
	import twitter from '$lib/assets/twitter.svg';
	import youtube from '$lib/assets/youtube.svg';
	import Logo from '$lib/components/Logo.svelte';

	let socialHandles = [
		{ url: 'www.instagram.com', icon: instagram },
		{ url: 'www.dribble.com', icon: dribble },
		{ url: 'www.twitter.com', icon: twitter },
		{ url: 'www.youtube.com', icon: youtube }
	];

	let quickLinks = [
		{ url: 'www.instagram.com', name: 'Portfolio' },
		{ url: 'www.dribble.com', name: 'Blogs' },
		{ url: 'www.twitter.com', name: 'About' },
		{ url: 'www.youtube.com', name: 'Press' },
		{ url: 'www.facebook.com', name: 'Careers' }
	];

	let services = [
		{ url: 'www.instagram.com', name: 'UX/UI Design' },
		{ url: 'www.dribble.com', name: 'App Development' },
		{ url: 'www.twitter.com', name: 'Web Development' },
		{ url: 'www.youtube.com', name: 'Quality Assurance' },
		{ url: 'www.facebook.com', name: 'Machine Learning' }
	];

	let reachUs = [
		{ url: 'mailto:xyz@gmail.com', name: 'xyz@gmail.com', icon: solidMail },
		{ url: 'tel:+9842725665252', name: '9842725665', icon: phone },
		{ url: 'www.twitter.com', name: '2717 Ash Dr. San Jose, South Dakota 24517', icon: location }
	];

	let footerBottomLinks = [
		{ url: '/', name: 'Terms & Condition' },
		{ url: '/', name: 'Privacy Policy' },
		{ url: '/', name: 'Sitemap' },
		{ url: '/', name: 'Disclaimer' }
	];

	let footerCompanyIntro =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptatum quaerat? Exercitationem quasi!';

	let companyFooterDetails = {
		href: '"mailto:xyz@gmail.com',
		email: 'xyz@gmail.com'
	};
</script>

<footer class="bg-charlestonGreen pt-16 lg:pt-20">
	<div class="container mx-auto">
		<div class="flex gap-12 md:gap-8 flex-wrap mb-6 md:mb-12 sm:mb-20">
			<!-- <div class="grid grid-cols-4 gap-8"> -->
			<div class="flex flex-col gap-8 lg:flex-1">
				<div class="flex gap-4">
					<Logo variant="white" /> <a href="/" class="font-bold text-3xl text-white">Agency</a>
				</div>
				<p class="text-lightSilver mb-2 font-medium text-lg">
					{footerCompanyIntro}
				</p>
				<ul class="flex gap-4 flex-wrap">
					{#each socialHandles as { url, icon }}
						<a
							class="bg-raisinBlack rounded-full p-2 hover:scale-105 transition-all hover:bg-iris"
							href={url}
						>
							<img class="w-[24px] h-[24px]" src={icon} alt="social icon" />
						</a>
					{/each}
				</ul>
			</div>
			<div class="flex-1">
				<h5 class="text-white mb-8">Quick Links</h5>
				<ul class="flex flex-col gap-6">
					{#each quickLinks as { url, name }, quickLinksIndex}
						<li>
							<a
								class="text-lightSilver inline-flex gap-4 items-center hover:text-iris transition-all font-medium"
								href={url}
							>
								{name}
								{#if quickLinksIndex === quickLinks.length - 1}
									<img class="w-[100px]" src={Hiring} alt="hiring.svg" />
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex-[100%] sm:flex-1">
				<h5 class="text-white mb-8">Services</h5>
				<ul class="flex flex-col gap-6">
					{#each services as { url, name }}
						<li>
							<a
								class="text-lightSilver inline-flex gap-4 items-center hover:text-iris transition-all font-medium"
								href={url}
							>
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="sm:flex-[100%] md:flex-1">
				<h5 class="text-white mb-8">Reach us</h5>
				<ul class="flex flex-col gap-8">
					{#each reachUs as { url, name, icon }}
						<li>
							<a class="text-lightSilver inline-flex gap-4 items-center font-medium" href={url}>
								<img class="w-[24px] h-[24px]" src={icon} alt="social icon" />
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div
			class="py-8 text-lightSilver flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-4"
		>
			<div>
				<span>&#169; 2023</span>
				<a href={companyFooterDetails.href}>{companyFooterDetails.email}</a>
			</div>
			<ul class="flex flex-col sm:flex-row sm:divide-x sm:gap-0 gap-4">
				{#each footerBottomLinks as { url, name }, footerLinksIndex}
					<li
						class="sm:px-3 {footerLinksIndex === footerBottomLinks.length - 1 &&
							'sm:pr-0'} {footerLinksIndex === 0 && 'sm:pl-0'}"
					>
						<a
							class="text-lightSilver flex gap-4 items-center font-medium hover:text-iris transition-all"
							href={url}
						>
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
