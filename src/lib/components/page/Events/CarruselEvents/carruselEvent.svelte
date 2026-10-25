<script lang="ts">
	import type { Component } from 'svelte';
	import CardEvents from '../cardEvents/cardEvents.svelte';

	type Event = {
		title: string;
		description: string;
		gameMode: string;
		day: string;
		month: string;
		year: string;
		location: string;
		img: string;
		typeEvent: string;
		iconGameMode: Component;
	};

	let { events }: { events: Event[] } = $props();
	let activeIndex = $state(Math.max(0, Math.min(1, events.length - 1)));

	function showPrevious() {
		activeIndex = Math.max(0, activeIndex - 1);
	}

	function showNext() {
		activeIndex = Math.min(events.length - 1, activeIndex + 1);
	}
</script>

<div
	class="relative w-full max-w-7xl px-12"
	role="region"
	aria-roledescription="carrusel"
	aria-label="Próximos eventos"
>
	<button
		type="button"
		onclick={showPrevious}
		disabled={activeIndex === 0}
		aria-label="Ver evento anterior"
		class="absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full bg-[#00ACC9] p-3 text-white shadow-lg transition hover:bg-[#007FAA] disabled:cursor-not-allowed disabled:opacity-40"
	>
		<svg aria-hidden="true" viewBox="0 0 24 24" class="h-6 w-6" fill="none">
			<path
				d="m15 18-6-6 6-6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>

	<div class="grid w-full overflow-x-clip pb-8">
		{#each events as event, index (event.title + event.day + index)}
			{@const offset = index - activeIndex}
			{@const isVisible = Math.abs(offset) <= 1}
			<div
				class="col-start-1 row-start-1 flex w-full max-w-md justify-self-center transition-[transform,opacity] duration-500 ease-in-out motion-reduce:transition-none"
				style={`z-index: ${offset === 0 ? 2 : 1}; transform: translateX(${offset * 80}%) scale(${offset === 0 ? 1 : 0.86}); opacity: ${offset === 0 ? 1 : 0.4}; visibility: ${isVisible ? 'visible' : 'hidden'}`}
				role="group"
				aria-roledescription="diapositiva"
				aria-label={`${index + 1} de ${events.length}`}
				aria-hidden={!isVisible}
				inert={!isVisible}
			>
				<CardEvents {...event} />
			</div>
		{/each}
	</div>

	<button
		type="button"
		onclick={showNext}
		disabled={activeIndex >= events.length - 1}
		aria-label="Ver siguiente evento"
		class="absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full bg-[#00ACC9] p-3 text-white shadow-lg transition hover:bg-[#007FAA] disabled:cursor-not-allowed disabled:opacity-40"
	>
		<svg aria-hidden="true" viewBox="0 0 24 24" class="h-6 w-6" fill="none">
			<path
				d="m9 18 6-6-6-6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>
