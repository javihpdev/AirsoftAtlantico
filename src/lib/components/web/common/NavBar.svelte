<script>
	import Link from "$lib/components/common/form/Link.svelte";

  let isOpen = $state(false);

  function toggleMenu() {
   isOpen = !isOpen
  }



</script>



<nav class="flex w-full lg:flex-row flex-col gap-2 p-3 justify-center z-50 items-center lg:p-2  lg:gap-10 bg-gray-800 text-white">
  
  <div class="flex overflow-hidden justify-center items-center rounded-full">
    <img class="object-fill" src="/images/logo.png" alt="logo" width="85" height="85"/>
  </div>
  <div class="hidden lg:flex justify-center items-center">
    <div class="flex  gap-20 justify-center items-center text-lg">
      <Link href="/">INICIO</Link>
      <Link href="#gameModes" class="tracking-[2px]">MODOS DE JUEGO</Link>
      <Link href="#rules">REGLAS</Link>
      <Link href="#galleryImages">IMÁGENES</Link>
      <Link href="#aboutUs">NOSOTROS</Link>
      <Link href="#contact">CONTACTO</Link>
    </div>
  </div>
  
  <div class="flex flex-col lg:flex-row justify-center items-center">
        <!-- Botón hamburguesa con animación -->
       <!-- Este padding es para separar la hamburguesa de la imagen de historiatelo -->
       <div class="-translate-y-0.5 lg:pt-0">
      <button class="p-1 lg:hidden flex flex-col gap-1" aria-label="Boton Menu" onclick={toggleMenu}>
        <!-- Ponemos {` `} para que svelte entienda la logica de javascript si lo ponmos con " " no es dinamico -->
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
          </div>
      <!-- Menu con los links al desplegar el menu hamburguesa -->
      <div class={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div class="flex flex-col lg:hidden items-center gap-5 p-4 text-lg ">
        <Link href="/">INICIO</Link>
            <Link href="#gameModes" class="tracking-[2px]">MODOS DE JUEGO</Link>
            <Link href="#rules">REGLAS</Link>
            <Link href="#galleryImages">IMÁGENES</Link>
            <Link href="#about">NOSOTROS</Link>
            <Link href="#contact">CONTACTO</Link>
      </div>
      </div>
  </div>
</nav>