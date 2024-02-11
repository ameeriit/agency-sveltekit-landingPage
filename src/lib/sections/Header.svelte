<script lang="ts">
	import MailSvg from '$lib/assets/mail.svg';
	import Logo from '$lib/components/Logo.svelte';
	import type { NavLink } from '$lib/types.ds';

	let navLinks: NavLink[] = [
		{ navText: 'About us', id: 'aboutUs' },
		{ navText: 'Project', id: 'project' },
		{ navText: 'Blog', id: 'blog' },
		{ navText: 'Pricing', id: '' },
		{ navText: 'Contact us', id: 'contact' }
	];

	let isMenuOpen: boolean = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClick(link: NavLink) {
		const { id } = link;

		if (id) {
			navigateToSection(id);
		}
		isMenuOpen = false;
	}

	function navigateToSection(sectionId: string) {
		const targetElement = document.getElementById(sectionId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<!-- Header Section -->
<header class="py-8 mob:py-6 absolute top-0 left-0 w-full mt-[40px] bg-platinum z-50">
	<div class="container mx-auto">
		<div class="flex items-center justify-between">
			<div class="w-[inherit] mob:w-[25%] flex gap-2 relative">
				<Logo variant="black" /> <a href="/" class="font-bold text-xl">Agency</a>
			</div>
			<!-- logo wrapper -->
			<nav
				class={`${
					isMenuOpen ? 'left-0' : 'left-[100%]'
				} fixed top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-6 bg-black transition-all md:static md:w-[75%] md:flex-row md:justify-between md:gap-0 md:bg-inherit xl:pl-[42px]`}
			>
				<ul class="flex flex-col items-center gap-[42px] md:flex-row">
					{#each navLinks as { navText, id }}
						<li class="">
							<button
								class="group relative cursor-pointer text-2xl font-bold text-white md:text-raisinBlack md:text-base lg:text-lg hover:text-iris transition-all"
								on:click={() => handleClick({ id })}
							>
								{navText}
							</button>
						</li>
					{/each}
				</ul>
				<!-- navigation -->
				<a
					class="md:flex hidden items-center gap-4 font-medium text-raisinBlack"
					href="mailto:xyz@gmail.com"
					><img class="w-5 h-auto" src={MailSvg} alt="mail.svg" /> xyz@gmail.com</a
				>
			</nav>
			<button
				class={`${
					isMenuOpen && 'fixed right-5 top-[80px]'
				} btn-none z-[100] flex flex-col items-end bg-transparent  md:hidden `}
				on:click={toggleMenu}
			>
				<span
					class={`${
						isMenuOpen && ' w-8 translate-y-[8px] rotate-[45deg] bg-white'
					} hover:none mb-[6px] block h-[2px] w-10 rounded-full bg-black transition-all`}
				></span>
				<span
					class={`${isMenuOpen && 'hidden'} block h-[2px] w-7 rounded-full bg-black transition-all`}
				></span>
				<span
					class={`${
						isMenuOpen ? 'w-8 translate-y-[-6px] rotate-[-45deg] bg-white' : 'w-3'
					} rotate-[-45deg]' }
			  mt-[6px] block h-[2px]  rounded-full bg-black transition-all`}
				></span>
			</button>
		</div>
		<!-- Header wrapper -->
	</div>
	<!-- Header container -->
</header>
