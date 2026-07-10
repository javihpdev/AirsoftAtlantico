<script lang="ts">
	import Footer from '$lib/components/web/common/Footer/Footer.svelte';
	import NavBar from '$lib/components/web/common/NavBar.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	
	let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="Asociación de Airsoft del Atlántico">
    <title>Asociación de Airsoft del Atlántico</title>
    <link rel="icon" type="image/png" href="images/logo.png">
</svelte:head>


	<NavBar/>

{@render children()}

    <Footer/>
