<script lang="ts">
   const images = [
  '/images/galleryImages/_14A1028.avif',
  '/images/galleryImages/_14A1029.avif',
  '/images/galleryImages/_M1A3275.avif',
  '/images/galleryImages/_M1A3277.avif',
  '/images/galleryImages/_M1A3280.avif',
  '/images/galleryImages/_M1A3283.avif',
  '/images/galleryImages/_M1A3286.avif',
  '/images/galleryImages/_M1A3298.avif',
  '/images/galleryImages/_M1A3301.avif',
  '/images/galleryImages/_M1A3306.avif',
  '/images/galleryImages/_M1A3311.avif',
  '/images/galleryImages/_M1A3312.avif',
  '/images/galleryImages/_M1A3319.avif',
  '/images/galleryImages/_M1A3323.avif',
  '/images/galleryImages/_M1A3352.avif',
  '/images/galleryImages/_M1A3364.avif',
  '/images/galleryImages/_M1A3371.avif',
  '/images/galleryImages/_M1A3381.avif',
  '/images/galleryImages/_M1A3384.avif',
  '/images/galleryImages/_M1A3422.avif',
  '/images/galleryImages/_M1A3446.avif',
  '/images/galleryImages/_M1A3449.avif',
  '/images/galleryImages/_M1A3455.avif',
  '/images/galleryImages/_M1A3457.avif',
  '/images/galleryImages/_M1A3496.avif',
  '/images/galleryImages/_M1A3506.avif',
  '/images/galleryImages/_M1A3516.avif',
  '/images/galleryImages/_M1A3534.avif',
  '/images/galleryImages/_M1A3535.avif',
  '/images/galleryImages/_M1A3540.avif',
  '/images/galleryImages/_M1A3546.avif'
];

    let selectedImage = $state(null as string | null);
    let visibleImages = $state(15); // Mostrar solo 12 inicialmente

    function loadMore() {
        visibleImages += 15;
    }

    function openImage(image: string) {
        selectedImage = image;
    }

    function closeImage() {
        selectedImage = null;
    }
</script>

<div class="w-full p-8">
	<h2 class="mb-8 text-center text-3xl font-bold text-gray-900">GALERÍA DE IMÁGENES</h2>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each images.slice(0, visibleImages) as photo, index}
			<button
				onclick={() => openImage(photo)}
				class="group aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 hover:shadow-xl"
			>
				<img
					src={photo}
					alt="Airsoft Atlántico {index + 1}"
                    loading='lazy'
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</button>
		{/each}
	</div>

	{#if visibleImages < images.length}
		<div class="mt-8 flex justify-center">
			<button
				onclick={loadMore}
				class="rounded-lg bg-[#00ACC9] px-6 py-3 text-white transition-colors duration-600 hover:bg-gray-800"
			>
				Cargar más imágenes ({images.length - visibleImages} restantes)
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
		<img
			src={selectedImage}
			alt="Imagen ampliada"
			class="max-h-full max-w-full"
			loading="lazy"
		/>
	</div>
{/if}
