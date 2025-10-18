<script>
	import Footer from "$lib/components/web/common/Footer.svelte";
	import Contact from "$lib/components/web/common/Contact.svelte";
	import Rules from "./rulesAirsoft/Rules.svelte";

	
</script>

<section class="flex h-full w-full flex-col mt-30 justify-center items-center ">
	
<!-- section para el video documental incial -->


	<!-- Imagen que ira mas abajo de informacion con algun texto en absoluto -->
	<div class="flex w-full min-h-screen">
		<img src="images/galleryImages/_M1A3364.jpg" alt="">
	</div>


	<!-- seccion de los modos de juego -->

	<section id="gameMode" class="flex w-full justify-center items-center">

		<h2>MODOS DE JUEGO</h2>

	</section>

	<!-- seccion de reglas -->

	<section id="rules" class="flex w-full justify-center items-center scroll-mt-32">
		<Rules/>
	</section>

	<!-- seccion de imagenes varias que van apareciendo -->

	<section id="images">
		<h2>IMÁGENES</h2>
	</section>

	<!-- section redes solicales con enlaces e informacion de para que son -->

	<!-- seccion de nosotros-->

	<section id="aboutUs">
		<h2>NOSOTROS</h2>
	</section>
	
<div id="contact" class="w-full scroll-m-32">

	<Contact/>
</div>
	<div id="footer" class="w-full mt-10">

		<Footer/>
	</div>
</section>

