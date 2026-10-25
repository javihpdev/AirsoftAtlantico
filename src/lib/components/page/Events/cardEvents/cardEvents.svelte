<script lang="ts">
	import NewEvent from '$lib/components/icons/NewEvent.svelte';
	import CalendarIcon from '../../../icons/Calendar.svelte';
	import LocationIcon from '../../../icons/Location.svelte';
	import type { Component } from 'svelte';
	type Props = {
		title?: string;
		description?: string;
		gameMode?: string;
		day?: string;
		month?: string;
		year?: string;
		location?: string;
		img?: string;
		iconGameMode?: Component;
		typeEvent?: string;
	};

	let {
		title,
		description,
		gameMode,
		day,
		month,
		year,
		location,
		img,
		typeEvent,
		iconGameMode: IconGameMode
	}: Props = $props();
</script>

<div
	class="relative isolate flex w-full max-w-md flex-col gap-4 rounded-xl text-white shadow-lg lg:h-120"
>
	<img
		src="/images/events/fondoEvent.png"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 z-0 h-full w-full rounded-xl object-cover"
	/>
	<div class="relative z-10 h-44 w-full overflow-hidden rounded-t-xl">
		<img
			src={img}
			alt="Imagen del evento"
			class="absolute inset-0 h-full w-full object-cover object-center"
		/>
		<div
			class="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-[#00ACC9] px-3 py-1 text-sm font-semibold text-black"
		>
			<NewEvent />
			<span class="text-sm font-semibold text-black md:text-lg">{typeEvent}</span>
		</div>
		<div
			class="absolute top-3 right-3 flex items-center justify-center gap-2 rounded-lg bg-black/70 px-3 py-2 text-white"
		>
			<span class="flex flex-col items-center gap-2">
				<CalendarIcon width={36} height={36} class="text-[#00ACC9]" />
				<span class="text-xl font-semibold text-[#00ACC9]">{month}</span>
			</span>
			<span class="flex flex-col items-center gap-2 font-bold">
				<span class="text-3xl font-semibold">{day}</span>
				<span class="text-lg font-semibold">{year}</span>
			</span>
		</div>
	</div>
	<div class="relative z-10 flex flex-col gap-2 px-6 pt-2 text-left">
		<h1 class="text-2xl font-bold sm:text-3xl lg:text-3xl">{title}</h1>

		<p class="flex min-w-0 items-center gap-2">
			<LocationIcon width={36} height={36} class="text-[#00ACC9]" />
			<span class="text-lg sm:text-xl">{location}</span>
		</p>

		<p class="text-lg">{description}</p>
	</div>
	<div
		class="relative z-10 mt-auto flex items-center px-4 pb-4 lg:absolute lg:right-0 lg:bottom-5 lg:left-0 lg:mt-0 lg:pb-0"
	>
		<IconGameMode width={36} height={36} class="shrink-0 text-[#00ACC9] lg:h-[60px] lg:w-[60px]" />
		<p class="flex pl-2 text-lg lg:w-50 lg:flex-none">{gameMode}</p>
		<a
			href="https://wa.me/34674957386"
			target="_blank"
			class="ml-auto shrink-0 rounded-lg bg-[#00ACC9] px-3 py-2 text-base text-white hover:bg-[#007FAA] md:text-lg lg:px-4"
		>
			Reservar Plaza
		</a>
	</div>
</div>
