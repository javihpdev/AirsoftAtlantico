<script lang="ts">
	import { fade } from 'svelte/transition';
	import { modes } from './GameModes.svelte.js';
	import Flag from '$lib/components/icons/Flag.svelte';
	import Deathmatch from '$lib/components/icons/Deathmatch.svelte';
	import DeathConfirm from '$lib/components/icons/DeathConfirm.svelte';
	import SearchAndDestroy from '$lib/components/icons/SearchAndDestroy.svelte';
	
	let openMode = ''; // id del modo abierto

	function toggleMode(id: string) {
		openMode = openMode === id ? '' : id;
	}

</script>

<div class="mx-auto w-full max-w-7xl px-6 py-10">
	<header class="mb-8 text-center">
		<h2 class="text-4xl font-bold">MODOS DE JUEGO</h2>
		<p class="mt-2 text-gray-600">Reglas de juego, objetivos y formato de las partidas en nuestro campo.</p>
	</header>

	<div class="flex w-full flex-wrap items-start gap-6">
		{#each modes as mode}
			<article
				id={mode.id}
				class={`scroll-mt-32 rounded-xl border border-gray-200 p-6 ${mode.color} w-full max-w-[600px] min-w-[320px] flex-grow-0 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[48%] lg:w-[48%]`}
			>
				<div class="flex items-start gap-4">
					<!-- Icono sencillo -->
					<div class="flex-shrink-0">
						<div class="flex h-12 w-12 items-center justify-center rounded-md bg-white/20">
							{#if mode.id === 'captura-bandera'}
								<Flag />
							{:else if mode.id === 'duelo-por-equipos'}
								<Deathmatch />
							{:else if mode.id === 'baja-confirmada'}
								<DeathConfirm />
							{:else}
								<SearchAndDestroy />
							{/if}
						</div>
					</div>

					<div class="flex-1">
						<h3 class="flex items-center justify-between text-xl font-semibold text-gray-900">
							<span>{mode.title}</span>
							<button
								class="ml-4 cursor-pointer rounded-md bg-white/10 px-3 py-1 text-sm transition-colors hover:bg-white/20"
								onclick={() => toggleMode(mode.id)}
							>
								{openMode === mode.id ? 'Cerrar' : 'Ver más'}
							</button>
						</h3>
						<p class="mt-2 text-gray-600">{mode.short}</p>

						{#if openMode === mode.id}
							<div in:fade={{ duration: 200 }} out:fade={{ duration: 150 }} class="mt-4 space-y-3">
								<div class="grid gap-4 sm:grid-cols-2">
									<div>
										<h4 class="text-sm font-semibold text-gray-800">🎯 Objetivos</h4>
										<ul class="mt-2 space-y-1 text-gray-700">
											{#each mode.objectives as obj}
												<li>{obj}</li>
											{/each}
										</ul>
									</div>
									<div>
										<h4 class="text-sm font-semibold text-gray-800">📋 Reglas</h4>
										<ul class="mt-2 space-y-1 text-gray-700">
											{#each mode.rules as rules}
												<li>{rules}</li>
											{/each}
										</ul>
									</div>
								</div>
								<div class="mt-3 ">
									
									<div class="flex flex-col w-full md:flex-row  overflow-hidden rounded-md border-2 p-6 border-gray-600 gap-4 max-w-full md:gap-10">
										<p class="font-bold text-">PRÓXIMAMENTE...</p>
										<p class="text-sm text-gray-500">Estamos preparando varios videos para cada modo de juego.</p>
									</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<p class="text-sm text-gray-500">
			Si quieres que añadamos más modos o reglas específicas, dínoslo en el apartado de 
			<a
				href="#contact"
				class="underline">CONTACTO
			</a> y lo documentamos aquí.
		</p>
	</div>
</div>
