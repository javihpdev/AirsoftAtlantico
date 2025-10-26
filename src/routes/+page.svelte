<script lang="ts">
	import Footer from "$lib/components/web/common/Footer.svelte";
	import Contact from "$lib/components/web/common/Contact.svelte";
	import Rules from "./rulesAirsoft/Rules.svelte";
	import GalleryImages from "./galleryImages/GalleryImages.svelte";
	import AboutUs from "./aboutUs/AboutUs.svelte";
	import GameModes from "./gamesmodes/GameModes.svelte";

	let videoElement: HTMLVideoElement;
	// funcion para establecer el volumen del video al 30% por defecto
	$effect(() => {
		if (videoElement) {
			videoElement.volume = 0.1;
		}
	});
</script>

<section class="flex h-full w-full flex-col max-w-[90%] md:max-w-full justify-center items-center">
	
	<!-- Imagen hero con texto -->
	<div class="w-full h-screen relative overflow-hidden ">
		<p class="absolute md:top-20 top-10 left-1/2 -translate-x-1/2 text-white text-[2rem] md:text-[4rem] lg:text-[4rem] text-center z-10 drop-shadow-2xl px-4">
			ASOCIACIÓN DE AIRSOFT DEL ATLÁNTICO
		</p>
		<img 
			src="images/galleryImages/_M1A3364.avif" 
			alt="foto inicio" 
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
		/>
	</div>

	<section>
		<video bind:this={videoElement} src="videos/4259e1e5-d72a-44f1-9c02-c5a462bea0fc.mp4" controls class="w-full max-w-4xl my-12 rounded-lg shadow-lg">
			<track kind="captions" src="" label="Spanish" srclang="es" default />
		</video>
		
	</section>
	<!-- seccion de los modos de juego -->
	<section id="gameMode" class="flex w-full justify-center items-center scroll-mt-32">
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

