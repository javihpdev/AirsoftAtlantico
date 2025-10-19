<script>
	import Footer from "$lib/components/web/common/Footer.svelte";
	import Contact from "$lib/components/web/common/Contact.svelte";
	import Rules from "./rulesAirsoft/Rules.svelte";
	import GalleryImages from "./galleryImages/GalleryImages.svelte";
	import AboutUs from "./aboutUs/AboutUs.svelte";
</script>

<section class="flex h-full w-full flex-col justify-center items-center">
	
	<!-- Imagen hero con texto -->
	<div class="w-full h-screen relative overflow-hidden ">
		<p class="absolute top-20 left-1/2 -translate-x-1/2 text-white text-[1rem] md:text-[4rem] lg:text-[4rem] text-center z-10 drop-shadow-2xl px-4">
			ASOCIACION DE AIRSOFT DEL ATLANTICO
		</p>
		<img 
			src="images/galleryImages/_M1A3364.webp" 
			alt="foto inicio" 
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
		/>
	</div>

	<!-- seccion de los modos de juego -->
	<section id="gameMode" class="flex w-full justify-center items-center scroll-mt-32">
		<h2>MODOS DE JUEGO</h2>
	</section>

	<!-- seccion de reglas -->
	<section id="rules" class="flex w-full justify-center items-center scroll-mt-32">
		<Rules/>
	</section>
 	<span class="w-300 h-0.5 bg-gray-700"></span>
	<!-- seccion de imagenes varias que van apareciendo -->
	<section id="galleryImages" class="scroll-mt-32">
		<GalleryImages/>
	</section>

	<!-- seccion de nosotros-->
	<section id="aboutUs" class="scroll-mt-32">
		<AboutUs/>
	</section>

	<div id="contact" class="w-full translate-y-0.5 scroll-mt-32">
		<Contact/>
	</div>
	
	<div id="footer" class="w-full z-10">
		<Footer/>
	</div>
</section>

