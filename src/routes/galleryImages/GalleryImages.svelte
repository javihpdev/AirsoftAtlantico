<script lang="ts">
   const images = [
  '/images/galleryImages/_14A1029.avif',
  '/images/galleryImages/_14A1030.avif',
  '/images/galleryImages/_14A1031.avif',
  '/images/galleryImages/_14A1032.avif',
  '/images/galleryImages/_14A1033.avif',
  '/images/galleryImages/_14A1040.avif',
  '/images/galleryImages/_14A1041.avif',
  '/images/galleryImages/_14A1042.avif',
  '/images/galleryImages/_M1A3279.avif',
  '/images/galleryImages/_M1A3280.avif',
  '/images/galleryImages/_M1A3281.avif',
  '/images/galleryImages/_M1A3282.avif',
  '/images/galleryImages/_M1A3283.avif',
  '/images/galleryImages/_M1A3284.avif',
  '/images/galleryImages/_M1A3285.avif',
  '/images/galleryImages/_M1A3286.avif',
  '/images/galleryImages/_M1A3287.avif',
  '/images/galleryImages/_M1A3288.avif',
  '/images/galleryImages/_M1A3289.avif',
  '/images/galleryImages/_M1A3290.avif',
  '/images/galleryImages/_M1A3291.avif',
  '/images/galleryImages/_M1A3292.avif',
  '/images/galleryImages/_M1A3293.avif',
  '/images/galleryImages/_M1A3294.avif',
  '/images/galleryImages/_M1A3295.avif',
  '/images/galleryImages/_M1A3297.avif',
  '/images/galleryImages/_M1A3298.avif',
  '/images/galleryImages/_M1A3301.avif',
  '/images/galleryImages/_M1A3302.avif',
  '/images/galleryImages/_M1A3303.avif',
  '/images/galleryImages/_M1A3304.avif',
  '/images/galleryImages/_M1A3306.avif',
  '/images/galleryImages/_M1A3308.avif',
  '/images/galleryImages/_M1A3310.avif',
  '/images/galleryImages/_M1A3311.avif',
  '/images/galleryImages/_M1A3312.avif',
  '/images/galleryImages/_M1A3313.avif',
  '/images/galleryImages/_M1A3314.avif',
  '/images/galleryImages/_M1A3316.avif',
  '/images/galleryImages/_M1A3317.avif',
  '/images/galleryImages/_M1A3318.avif',
  '/images/galleryImages/_M1A3319.avif',
  '/images/galleryImages/_M1A3320.avif',
  '/images/galleryImages/_M1A3322.avif',
  '/images/galleryImages/_M1A3323.avif',
  '/images/galleryImages/_M1A3324.avif',
  '/images/galleryImages/_M1A3325.avif',
  '/images/galleryImages/_M1A3326.avif',
  '/images/galleryImages/_M1A3327.avif',
  '/images/galleryImages/_M1A3328.avif',
  '/images/galleryImages/_M1A3329.avif',
  '/images/galleryImages/_M1A3331.avif',
  '/images/galleryImages/_M1A3332.avif',
  '/images/galleryImages/_M1A3350.avif',
  '/images/galleryImages/_M1A3351.avif',
  '/images/galleryImages/_M1A3352.avif',
  '/images/galleryImages/_M1A3364.avif',
  '/images/galleryImages/_M1A3371.avif',
  '/images/galleryImages/_M1A3374.avif',
  '/images/galleryImages/_M1A3376.avif',
  '/images/galleryImages/_M1A3378.avif',
  '/images/galleryImages/_M1A3381.avif',
  '/images/galleryImages/_M1A3382.avif',
  '/images/galleryImages/_M1A3384.avif',
  '/images/galleryImages/_M1A3387.avif',
  '/images/galleryImages/_M1A3388.avif',
  '/images/galleryImages/_M1A3389.avif',
  '/images/galleryImages/_M1A3390.avif',
  '/images/galleryImages/_M1A3392.avif',
  '/images/galleryImages/_M1A3393.avif',
  '/images/galleryImages/_M1A3394.avif',
  '/images/galleryImages/_M1A3397.avif',
  '/images/galleryImages/_M1A3398.avif',
  '/images/galleryImages/_M1A3399.avif',
  '/images/galleryImages/_M1A3400.avif',
  '/images/galleryImages/_M1A3401.avif',
  '/images/galleryImages/_M1A3402.avif',
  '/images/galleryImages/_M1A3403.avif',
  '/images/galleryImages/_M1A3405.avif',
  '/images/galleryImages/_M1A3406.avif',
  '/images/galleryImages/_M1A3407.avif',
  '/images/galleryImages/_M1A3409.avif',
  '/images/galleryImages/_M1A3410.avif',
  '/images/galleryImages/_M1A3411.avif',
  '/images/galleryImages/_M1A3412.avif',
  '/images/galleryImages/_M1A3419.avif',
  '/images/galleryImages/_M1A3420.avif',
  '/images/galleryImages/_M1A3421.avif',
  '/images/galleryImages/_M1A3422.avif',
  '/images/galleryImages/_M1A3423.avif',
  '/images/galleryImages/_M1A3424.avif',
  '/images/galleryImages/_M1A3425.avif'
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
			class="max-h-full max-w-full object-contain"
			loading="lazy"
		/>
	</div>
{/if}
