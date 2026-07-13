<script>
	import Link from '$lib/components/common/form/Link.svelte';
	import ArrowUpIcon from '$lib/components/icons/ArrowUp.svelte';

	let isOpen = $state(false);
	let isGameModesOpen = $state(false);
	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 100);

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

<svelte:window bind:scrollY />

<nav
	class="sticky top-0 z-50 flex w-full max-w-full flex-col gap-40 border-b border-gray-700 bg-gray-800 text-white shadow-lg"
>
	<!-- Barra en móvil/tablet: al inicio el logo y la hamburguesa están juntos en el centro;
	     al hacer scroll se separan a los extremos y aparece el título en el medio -->
	<div class="relative h-20 lg:hidden">
		<div
			class={`absolute top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full transition-all duration-700 ease-in-out ${isScrolled ? 'left-5 translate-x-0' : 'left-1/2 -translate-x-[60px]'}`}
		>
			<img
				class="h-full w-full object-cover"
				src="/images/logo.png"
				alt="logo"
				width="60"
				height="60"
			/>
		</div>

		<p
			class={`absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 text-center text-[0.65rem] leading-tight font-bold tracking-[2px] transition-opacity duration-700 ease-in-out sm:text-sm ${isScrolled ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
		>
			ASOCIACIÓN DE AIRSOFT<br /><span class="text-[#00ACC9]">DEL ATLÁNTICO</span>
		</p>

		<button
			class={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-1 p-1 transition-all duration-700 ease-in-out ${isScrolled ? 'right-5 translate-x-0' : 'right-1/2 translate-x-[60px]'}`}
			aria-label="Boton Menu"
			aria-expanded={isOpen}
			onclick={toggleMenu}
		>
			<!-- Ponemos {` `} para que svelte entienda la logica de javascript si lo ponmos con " " no es dinamico -->
			<span
				class={`block h-1 w-6 bg-white transition-all duration-500 ${isOpen ? ' translate-x-2 translate-y-[2.7px] scale-x-70 rotate-45' : ''}`}
			></span>
			<span class={`block h-1 w-6 bg-white`}></span>
			<span
				class={`block h-1 w-6 bg-white transition-all duration-500 ${isOpen ? ' translate-x-2 -translate-y-[2.7px] scale-x-70 -rotate-45' : ''}`}
			></span>
		</button>
	</div>

	<!-- Barra en escritorio -->
	<div class="hidden items-center justify-center gap-10 p-2 lg:flex">
		<div class="flex items-center justify-center overflow-hidden rounded-full">
			<img class="object-fill" src="/images/logo.png" alt="logo" width="85" height="85" />
		</div>
		<div class="flex items-center justify-center">
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
						class={`absolute -left-9 mt-2 w-60 overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-800 ease-in-out ${isGameModesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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
				<Link href="/#galleryVideos">VÍDEOS</Link>
				<Link href="/#aboutUs">NOSOTROS</Link>
				<Link href="/#contact">CONTACTO</Link>
			</div>
		</div>
	</div>
</nav>

<!-- Overlay + panel deslizante desde la derecha para móvil/tablet -->
<div
	class={`fixed inset-0 z-60 lg:hidden  ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
>
	<button
		aria-label="Cerrar menu"
		tabindex={isOpen ? 0 : -1}
		class={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
		onclick={closeMenu}
	></button>
	<div
		class={`absolute top-20 right-0 flex h-130 w-72 max-w-[80%] transform flex-col items-center justify-center gap-5 rounded-bl-2xl bg-gray-800 p-6 text-center text-lg shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
	>
		<!-- boton para cerrar navbar, se puede cerrar pulsando la pantalla, pero esto es mas vistoso -->
		<button onclick={closeMenu}>
			<ArrowUpIcon class="h-10 w-10 rotate-90 text-white " />
		</button>

		<button onclick={closeMenu}>
			<Link href="/">INICIO</Link>
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
			<Link href="/#galleryVideos">VÍDEOS</Link>
		</button>
		<button onclick={closeMenu}>
			<Link href="/#aboutUs">NOSOTROS</Link>
		</button>
		<button onclick={closeMenu}>
			<Link href="/#contact">CONTACTO</Link>
		</button>

		<!-- Separacion -->
		<span class="h-0.5 w-full bg-gray-600"></span>

		<span class="text-sm leading-tight font-bold tracking-[2px] text-white">
			ASOCIACIÓN DE AIRSOFT<br /><span class="text-[#00ACC9]">DEL ATLÁNTICO</span>
		</span>
	</div>
</div>
