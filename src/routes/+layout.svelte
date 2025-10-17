<script lang="ts">
	import NavBar from '$lib/components/web/common/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>
<div class="min-h-full flex flex-col">
	<NavBar/>
</div>

{@render children()}
