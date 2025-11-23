<script lang="ts">
	import GoogleAnalytics from '$lib/components/web/analytics/GoogleAnalytics.svelte';
	import Footer from '$lib/components/web/common/Footer/Footer.svelte';
	import NavBar from '$lib/components/web/common/NavBar.svelte';
	import CookieBanner from '$lib/components/web/cookieBanner/CookieBanner.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="Asociación de Airsoft del Atlántico">
    <title>Asociación de Airsoft del Atlántico</title>
    <link rel="icon" type="image/png" href="images/logo.png">
</svelte:head>
<GoogleAnalytics/>
<CookieBanner/>

	<NavBar/>


{@render children()}

    <Footer/>
