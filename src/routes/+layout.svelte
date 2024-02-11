<script>
	import Footer from '$lib/sections/Footer.svelte';
	import Header from '$lib/sections/Header.svelte';
	import HeroBanner from '$lib/sections/HeroBanner.svelte';
	import '../app.css';
</script>

<HeroBanner />
<Header />
<main class="h-full min-h-[calc(100vh-549px)]pt-[72px]">
	<slot />
</main>
<Footer />
