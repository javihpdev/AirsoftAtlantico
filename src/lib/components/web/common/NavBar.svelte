<script>
	import Link from '$lib/components/common/form/Link.svelte';

	let isOpen = $state(false);
	let isGameModesOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	function toggleGameModes() {
		isGameModesOpen = !isGameModesOpen;
	}

	// Lista de modos de juego
	const gameModes = [
		{ name: 'Duelo por Equipos', href: '/#duelo-por-equipos' },
		{ name: 'Captura la Bandera', href: '/#captura-bandera' },
		{ name: 'Baja Confirmada', href: '/#baja-confirmada' },
		{ name: 'Colocar y Desactivar la Bomba', href: '/#colocar-y-desactivar' }
	];
</script>

<nav
	class="z-100 flex w-full max-w-full flex-col items-center justify-center gap-2 bg-gray-800 p-3 text-white lg:flex-row lg:gap-10 lg:p-2"
>
	<div class="flex items-center justify-center overflow-hidden rounded-full">
		<img class="object-fill" src="/images/logo.png" alt="logo" width="85" height="85" />
	</div>
	<div class="hidden items-center justify-center lg:flex">
		<div class="flex items-center justify-center gap-20 text-lg">
			<Link href="/">INICIO</Link>
			<!-- Desplegable para desktop -->
			<div class="relative z-50">
				<button
					class="cursor-pointer tracking-[2px] transition-colors duration-700 hover:text-gray-300"
					onclick={toggleGameModes}
				>
					MODOS DE JUEGO {isGameModesOpen ? '▴' : '▾'}
				</button>
				<div
					class={`absolute left-0 mt-2 w-60 overflow-hidden rounded-lg bg-gray-700 shadow-lg transition-all duration-800 ease-in-out ${isGameModesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
				>
					{#each gameModes as mode}
						<Link
							href={mode.href}
							class="block px-4 py-3 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-600"
						>
							{mode.name}
						</Link>
					{/each}
				</div>
			</div>
			<Link href="/#rules">REGLAS</Link>
			<Link href="/#galleryImages">IMÁGENES</Link>
			<Link href="/#aboutUs">NOSOTROS</Link>
			<Link href="/#contact">CONTACTO</Link>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center outline-none lg:flex-row">
		<!-- Botón hamburguesa con animación -->
		<!-- Este padding es para separar la hamburguesa de la imagen de historiatelo -->
		<div class="-translate-y-0.5 lg:pt-0">
			<button
				class="flex flex-col gap-1 p-1 lg:hidden"
				aria-label="Boton Menu"
				onclick={toggleMenu}
			>
				<!-- Ponemos {` `} para que svelte entienda la logica de javascript si lo ponmos con " " no es dinamico -->
				<span
					class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
				></span>
				<span
					class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'opacity-0' : ''}`}
				></span>
				<span
					class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
				></span>
			</button>
		</div>
		<!-- Menu con los links al desplegar el menu hamburguesa -->
		<div
			class={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
		>
			<div class="flex flex-col items-center gap-5 p-4 text-lg lg:hidden">
				<button onclick={closeMenu}>
					<Link href="https://www.airsoftatlantico.com/">INICIO</Link>
				</button>
				<button onclick={closeMenu}>
					<Link href="/#gameModes" class="tracking-[2px]">MODOS DE JUEGO</Link>
				</button>
				<button onclick={closeMenu}>
					<Link href="/#rules">REGLAS</Link>
				</button>
				<button onclick={closeMenu}>
					<Link href="/#galleryImages">IMÁGENES</Link>
				</button>
				<button onclick={closeMenu}>
					<Link href="/#aboutUs">NOSOTROS</Link>
				</button>
				<button onclick={closeMenu}>
					<Link href="/#contact">CONTACTO</Link>
				</button>
			</div>
		</div>
	</div>
</nav>
