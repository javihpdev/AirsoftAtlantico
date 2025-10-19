<script lang="ts">
    const images = [
        "/images/galleryImages/_14A1028.webp",
        "/images/galleryImages/_14A1029.webp",
        "/images/galleryImages/_14A1032.webp",
        "/images/galleryImages/_M1A3276.webp",
        "/images/galleryImages/_M1A3278.webp",
        "/images/galleryImages/_M1A3287.webp",
        "/images/galleryImages/_M1A3288.webp",
        "/images/galleryImages/_M1A3289.webp",
        "/images/galleryImages/_M1A3298.webp",
        "/images/galleryImages/_M1A3312.webp",
        "/images/galleryImages/_M1A3317.webp",
        "/images/galleryImages/_M1A3318.webp",
        "/images/galleryImages/_M1A3323.webp",
        "/images/galleryImages/_M1A3325.webp",
        "/images/galleryImages/_M1A3329.webp",
        "/images/galleryImages/_M1A3350.webp",
        "/images/galleryImages/_M1A3352.webp",
        "/images/galleryImages/_M1A3364.webp",
        "/images/galleryImages/_M1A3371.webp",
        "/images/galleryImages/_M1A3382.webp",
        "/images/galleryImages/_M1A3384.webp",
        "/images/galleryImages/_M1A3387.webp",
        "/images/galleryImages/_M1A3388.webp",
        "/images/galleryImages/_M1A3393.webp",
        "/images/galleryImages/_M1A3400.webp",
        "/images/galleryImages/_M1A3403.webp",
        "/images/galleryImages/_M1A3451.webp",
        "/images/galleryImages/_M1A3489.webp",
        "/images/galleryImages/_M1A3506.webp",
        "/images/galleryImages/_M1A3546.webp",
    ];

    let selectedImage = $state(null as string | null);
    let visibleImages = $state(12); // Mostrar solo 12 inicialmente

    function loadMore() {
        visibleImages += 12;
    }

    function openImage(image: string) {
        selectedImage = image;
    }

    function closeImage() {
        selectedImage = null;
    }
</script>

<section class="w-full p-8">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-900">GALERÍA DE IMÁGENES</h2>
    
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {#each images.slice(0, visibleImages) as photo, index}
            <button
                onclick={() => openImage(photo)}
                class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group bg-gray-200 cursor-pointer"
            >
                <img 
                    src={photo} 
                    alt="Airsoft Atlántico {index + 1}"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </button>
        {/each}
    </div>

    {#if visibleImages < images.length}
        <div class="flex justify-center mt-8">
            <button 
                onclick={loadMore}
                class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Cargar más imágenes ({images.length - visibleImages} restantes)
            </button>
        </div>
    {/if}
</section>

<!-- Modal para ver imagen completa -->
{#if selectedImage}
    <div 
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onclick={closeImage}
        onkeypress={(e) => e.key === 'Escape' && closeImage()}
        role="button"
        tabindex="0"
    >
        <button 
            class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onclick={closeImage}
        >
            ×
        </button>
        <img 
            src={selectedImage} 
            alt="Imagen ampliada" 
            class="max-w-full max-h-full object-contain"
            loading="lazy"
        />
    </div>
{/if}