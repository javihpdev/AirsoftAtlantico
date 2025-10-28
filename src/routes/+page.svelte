<script lang="ts">
    import Footer from "$lib/components/web/common/Footer.svelte";
    import Contact from "$lib/components/web/common/Contact.svelte";
    import Rules from "./rulesAirsoft/Rules.svelte";
    import GalleryImages from "./galleryImages/GalleryImages.svelte";
    import AboutUs from "./aboutUs/AboutUs.svelte";
    import GameModes from "./gamesmodes/GameModes.svelte";

    let videoElement: HTMLVideoElement;
    let scrollY = $state(0);
	let showScrollButton = $derived(() => scrollY > 2500);
    
    // funcion para establecer el volumen del video al 30% por defecto
    $effect(() => {
        if (videoElement) {
            videoElement.volume = 0.1;
        }
    });

	  // Función para volver arriba
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
	
</script>

<svelte:window bind:scrollY />

<section class="flex h-full w-full flex-col max-w-full justify-center items-center">
    
    <!-- Imagen con texto y efecto parallax suave -->
    <div class="w-full h-screen relative overflow-hidden bg-gray-800">
        <p 
            class="absolute md:top-20 top-10 left-1/2 -translate-x-1/2 text-white text-[2rem] md:text-[4rem] lg:text-[4rem] text-center z-10 drop-shadow-2xl px-4"
            style="opacity: {Math.max(0, 1 - scrollY / 400)}"
        >
            ASOCIACIÓN DE AIRSOFT DEL ATLÁNTICO
        </p>
        <img 
            src="images/galleryImages/_M1A3364.avif" 
            alt="foto inicio" 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            style="transform: translate(0%, calc(-0% + {scrollY * 0.3}px))"
        />
    </div>

    <section class="flex relative flex-col gap-2 text-4xl font-bold text-center w-full overflow-hidden justify-center items-center">
        <img 
            src="images/galleryImages/_M1A3535.avif" 
            alt="foto presentación" 
            class="z-10 absolute min-w-full min-h-full object-cover"
        />
        <div class="relative z-20 w-full py-10 text-white flex flex-col gap-6 justify-center max-w-[70%] items-center">
            <p class="tracking-[5px]">VÍDEO DE PRESENTACIÓN</p>
            <video 
                bind:this={videoElement} 
                src="videos/4259e1e5-d72a-44f1-9c02-c5a462bea0fc.mp4" 
                controls 
                controlslist='nodownload' 
                class="rounded-lg shadow-lg"
            >
                <track kind="captions" src="" label="Spanish" srclang="es" default />
            </video>
        </div>
    </section>

    <!-- seccion de los modos de juego -->
    <section id="gameModes" class="flex w-full justify-center items-center scroll-mt-32">
        <GameModes/>
    </section>

    <!-- seccion de reglas -->
    <section id="rules" class="flex w-full justify-center items-center scroll-mt-32">
        <Rules/>
    </section>
    <!-- NOTE: separador provisional mirar si queda bien cuando esten los modos de juego-->
     <span class="flex w-300 max-w-[90%] h-0.5 bg-gray-700"></span>
    <!-- seccion de imagenes varias que van apareciendo -->
    <section id="galleryImages" class="scroll-mt-32">
        <GalleryImages/>
    </section>

    <!-- seccion de nosotros-->
    <section id="aboutUs" class="scroll-mt-32">
        <AboutUs/>
    </section>

    <section id="contact" class="w-full translate-y-0.5 scroll-mt-32 max-w-full">
        <Contact/>
    </section>
    
    <div id="footer" class="w-full z-10">
        <Footer/>
    </div>
</section>

<!-- Botón de volver arriba -->
{#if showScrollButton()}
    <button
        onclick={scrollToTop}
        class="fixed md:bottom-20 md:right-10 bottom-20 right-2 z-1000 bg-[#00ACC9] hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
    >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
{/if}

