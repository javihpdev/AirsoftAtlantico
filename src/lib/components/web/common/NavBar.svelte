<script>
	import Link from "$lib/components/common/form/Link.svelte";





</script>



<nav class="flex fixed w-full justify-center z-50 gap-20 items-center p-4 bg-gray-800 text-white">
  <div class="flex overflow-hidden rounded-full">
    <img src="/images/logo.png" alt="logo" width="100" height="100"/>
  </div>
    <div class="flex gap-20 justify-center items-center text-lg font-semibold">
        <Link href="/">INICIO</Link>
        <Link href="#gameModes" class="tracking-[2px]">MODOS DE JUEGO</Link>
        <Link href="#rules">REGLAS</Link>
        <Link href="#galleryImages">IMÁGENES</Link>
        <Link href="#about">NOSOTROS</Link>
        <Link href="#contact">CONTACTO</Link>
    </div>
</nav>