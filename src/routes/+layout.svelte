<script lang="ts">
	import NavBar from '$lib/components/web/common/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="Asociación de Airsoft del Atlántico">
    <title>Asociación de Airsoft del Atlántico</title>
    <link rel="icon" type="image/png" href="/logo.jpg">
</svelte:head>
<div class="min-h-full flex flex-col">
	<NavBar/>
</div>

{@render children()}
