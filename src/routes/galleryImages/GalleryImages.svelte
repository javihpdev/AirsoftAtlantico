<script lang="ts">
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    // Lista de imágenes de la galería
    const images = [
        'images/galleryImages/_14A1028.avif',
        'images/galleryImages/_14A1029.avif',
        'images/galleryImages/_M1A3275.avif',
        'images/galleryImages/_M1A3277.avif',
        'images/galleryImages/_M1A3280.avif',
        'images/galleryImages/_M1A3283.avif',
        'images/galleryImages/_M1A3286.avif',
        'images/galleryImages/_M1A3298.avif',
        'images/galleryImages/_M1A3301.avif',
        'images/galleryImages/_M1A3306.avif',
        'images/galleryImages/_M1A3311.avif',
        'images/galleryImages/_M1A3312.avif',
        'images/galleryImages/_M1A3319.avif',
        'images/galleryImages/_M1A3323.avif',
        'images/galleryImages/_M1A3352.avif',
        'images/galleryImages/_M1A3364.avif',
        'images/galleryImages/_M1A3371.avif',
        'images/galleryImages/_M1A3381.avif',
        'images/galleryImages/_M1A3384.avif',
        'images/galleryImages/_M1A3422.avif',
        'images/galleryImages/_M1A3446.avif',
        'images/galleryImages/_M1A3449.avif',
        'images/galleryImages/_M1A3455.avif',
        'images/galleryImages/_M1A3457.avif',
        'images/galleryImages/_M1A3496.avif',
        'images/galleryImages/_M1A3506.avif',
        'images/galleryImages/_M1A3516.avif',
        'images/galleryImages/_M1A3534.avif',
        'images/galleryImages/_M1A3535.avif',
        'images/galleryImages/_M1A3540.avif',
        'images/galleryImages/_M1A3546.avif'
    ];

    let showModal = false;
    let modalImg = '';

    function openModal(img: string) {
        modalImg = img;
        showModal = true;
    }
    function closeModal() {
        showModal = false;
    }
</script>

<div class="w-full p-4 flex flex-col items-center justify-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-[900px]">
    <h2 class="mb-8 text-center text-3xl font-bold text-gray-900">GALERÍA DE IMÁGENES</h2>
    <div class="w-full max-w-7xl">
        {#if browser}
            <Carousel
                autoplay={true}
                autoplaySpeed={3000}
                showArrows={true}
                showIndicators={true}
                itemsToShow={1}
                itemsToScroll={1}
                transitionDuration={500}
                infinite={true}
                centerMode={true}
            >
                {#each images as img}
                    <div class="flex items-center justify-center h-[18rem] sm:h-[24rem] md:h-[36rem] rounded-lg bg-black">
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                        <img src={img} alt="Imagen galería"
                            class="object-contain h-full w-full rounded-xl cursor-pointer bg-black"
                            onclick={() => openModal(img)}
                        />
                    </div>
                {/each}
            </Carousel>
        {/if}
    </div>
</div>

{#if showModal}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onclick={closeModal}>
        <button class="absolute top-4 right-4 z-10 text-4xl text-white hover:text-gray-300" onclick={closeModal}>×</button>
        <img src={modalImg} alt="Imagen ampliada" class="max-h-full max-w-full object-contain bg-black" />
    </div>
{/if}