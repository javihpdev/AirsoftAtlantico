<script lang="ts">
	import NextEvents from './nextEvents/nextEvents.svelte';
</script>

<div
	class="flex h-full w-full flex-col gap-4 rounded-xl mt-20 mb-20 px-4 text-center"
>
	<div class="flex items-center justify-center gap-5">
		<span class="flex h-1 w-20 bg-[#00ACC9]"></span>
		<h1 class="text-3xl font-bold">PRÓXIMOS EVENTOS</h1>
		<span class="flex h-1 w-20 bg-[#00ACC9]"></span>
	</div>

	<p class="text-lg text-gray-600">
		Prepárate, equipate y no te quedes sin plaza.
	</p>

	<div
		class="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl p-4 text-center "
	>
		<NextEvents />
	</div>
</div>
