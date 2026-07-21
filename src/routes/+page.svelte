<script lang="ts">
	import AboutUs from "$lib/components/page/aboutUs/AboutUs.svelte";
	import Contact from "$lib/components/page/contact/Contact.svelte";
	import GalleryImages from "$lib/components/page/galleryImages/GalleryImages.svelte";
	import GameModes from "$lib/components/page/gamesmodes/GameModes.svelte";
	import Rules from "$lib/components/page/rulesAirsoft/Rules.svelte";
    import ArrowUpIcon from '$lib/components/icons/ArrowUp.svelte';
	import Influencers from "$lib/components/page/Influencers/Influencers.svelte";
	import ArrowDowns from "$lib/components/icons/ArrowDown.svelte";
	import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
 

    let scrollY = $state(0);
	let showScrollButton = $derived(() => scrollY > 600);
    
   // funcion para establecer el volumen del video al 10% por defecto
	function setVolume(event: Event) {
        const video = event.target as HTMLVideoElement;
        video.volume = 0.1;
    }

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
    
    <!-- Hero con parallax -->
    <div class="w-full h-screen relative overflow-hidden bg-gray-900">
        <img
            src="images/galleryImages/_M1A3364.avif"
            alt="foto inicio"
            class="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover"
            style="transform: translate(-50%, calc(-50% + {scrollY * 0.3}px))"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" style="z-index:1"></div>
        <div
            class="absolute inset-0 flex flex-col md:justify-center items-center px-4 mt-20 text-center"
            style="opacity: {Math.max(0, 1 - scrollY / 400)}; z-index: 2"
        >
            <p class="text-white text-[2rem] md:-mt-50 md:text-[3.5rem] lg:text-[5rem] drop-shadow-2xl tracking-[3px] leading-tight font-bold">
                ASOCIACIÓN DE AIRSOFT<br/><span class="text-[#00ACC9]">DEL ATLÁNTICO</span>
            </p>
        </div>
        <div
            class="absolute bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
            style="opacity: {Math.max(0, 1 - scrollY / 250)}; z-index: 2"
        >
            <span class="text-xs tracking-widest uppercase opacity-90">Descubre más</span>
            <ArrowDown />
        </div>
    </div>

    <section class="relative flex w-full overflow-hidden justify-center items-center min-h-[500px]">
        <img
            src="images/galleryImages/_M1A3535.avif"
            alt="foto presentación"
            class="absolute inset-0 min-w-full min-h-full object-cover brightness-[0.35]"
        />
        <div class="relative z-10 w-full py-16 text-white flex flex-col gap-8 justify-center max-w-[90%] md:max-w-[70%] items-center">
            <div class="flex flex-col items-center gap-1">
                <span class="text-[#00ACC9] text-sm tracking-[6px] uppercase">Mira lo que hacemos</span>
                <p class="tracking-[4px] text-2xl md:text-3xl font-bold">VÍDEO DE PRESENTACIÓN</p>
            </div>
            <video
                src="videos/4259e1e5-d72a-44f1-9c02-c5a462bea0fc.mp4"
                controls
                controlslist='nodownload'
                onloadedmetadata={setVolume}
                class="rounded-xl shadow-2xl ring-1 ring-white/20 md:max-w-[30%] w-full"
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
    <section id="rules" class="flex flex-col w-full max-w-full justify-center items-center scroll-mt-32 pt-12">
    <h2 class="text-4xl font-bold max-w-[85%] text-center">REGLAS</h2>
		<p class="mt-2 text-gray-600 max-w-[85%] text-center">Reglas de Seguridad, Réplicas, Distancias y Notas de Interés</p>
    <div class="bg-gradient-to-r from-gray-50 to-cyan-200 shadow-2xl rounded-2xl my-8 text-lg text-gray-900 text-center transition-transform duration-300 hover:shadow-cyan-400/40 max-w-[90%]">
            <Rules/>
        </div>
    </section>
    <!-- NOTE: separador provisional mirar si queda bien cuando esten los modos de juego-->
    <!-- <span class="flex w-300 max-w-[90%] h-0.5 bg-gray-700"></span> -->
    <!-- seccion de imagenes varias que van apareciendo -->
    <section id="galleryImages" class="scroll-mt-32">
        <GalleryImages/>
    </section>

    <section id="influencers" class="scroll-mt-32">
        <Influencers />
    </section>

    <!-- seccion de nosotros-->
    <section id="aboutUs" class="scroll-mt-32">
        <AboutUs/>
    </section>

    <section id="contact" class="w-full scroll-mt-32 max-w-full">
        <Contact/>
    </section>
</section>

<!-- Botón de volver arriba -->
{#if showScrollButton()}
    <button
        onclick={scrollToTop}
        class="fixed md:bottom-20 md:right-10 bottom-20 right-2 z-1000 bg-[#00ACC9] hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
    >
       <ArrowUpIcon />
    </button>
{/if}



