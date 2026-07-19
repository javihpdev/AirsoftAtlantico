<script lang="ts">
	import { images } from './GalleryImages.svelte.js';

	let selectedImage = $state(null as string | null);
	let visibleImages = $state(10); // Mostrar solo 10 inicialmente

	function loadMore() {
		visibleImages += 10;
	}

	function loadLess() {
		visibleImages = 10;
		window.location.href='/#galleryImages';
	}

	function openImage(image: string) {
		selectedImage = image;
	}

	function closeImage() {
		selectedImage = null;
	}
</script>

<div class="flex w-full max-w-full scroll-mt-32 flex-col items-center justify-center p-8">
	<h2 class="max-w-[85%] text-center text-4xl font-bold">GALERÍA DE IMÁGENES</h2>
	<p class="mt-2 max-w-[85%] text-center text-gray-600">Imágenes de las partidas en RAID</p>
	<div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each images.slice(0, visibleImages) as photo, index}
			<button
				onclick={() => openImage(photo)}
				class="group aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 hover:shadow-xl"
			>
				<img
					src={photo}
					alt="Airsoft Atlántico {index + 1}"
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
			</button>
		{/each}
	</div>

	{#if visibleImages < images.length}
		<div class="mt-8 flex justify-center">
			<button
				onclick={loadMore}
				class="cursor-pointer rounded-lg bg-[#00ACC9] px-6 py-3 text-white transition-all duration-600 hover:scale-105 hover:bg-gray-800"
			>
				Cargar más imágenes ({images.length - visibleImages} restantes)
			</button>
		</div>
	{/if}
	{#if visibleImages > images.length}
		<div class="mt-8 flex justify-center">
			<button
				onclick={loadLess}
				class="cursor-pointer rounded-lg bg-[#00ACC9] px-6 py-3 text-white transition-all duration-600 hover:scale-105 hover:bg-gray-800"
			>
				Ocultar imágenes
			</button>
		</div>
	{/if}
</div>

<!-- Modal para ver imagen completa -->
{#if selectedImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
		onclick={closeImage}
		onkeypress={(e) => e.key === 'Escape' && closeImage()}
		role="button"
		tabindex="0"
	>
		<button
			class="absolute top-4 right-4 z-10 text-4xl text-white hover:text-gray-300"
			onclick={closeImage}
		>
			×
		</button>
		<img src={selectedImage} alt="Imagen ampliada" class="max-h-full max-w-full" />
	</div>
{/if}
