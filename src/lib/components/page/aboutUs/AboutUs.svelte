<script lang="ts">
	// Coordenadas del Mirador El Mazape

	import Location from "$lib/components/icons/Location.svelte";

	const latitude = 28.389735584930182;
	const longitude = -16.629758936999046;
	const placeName = 'Mirador El Mazape, La Guancha';

	// URL para abrir en Google Maps
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

	// URL correcta para el iframe
	const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z=15&output=embed&t=k`;
</script>

<div class="w-full mb-5  p-8">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-900">SOBRE NOSOTROS</h2>
		<p class="mb-12 text-center text-xl text-gray-700">Asociación de Airsoft del Atlántico</p>

		<!-- Información -->
		<div class="mb-12 flex items-center justify-center text-center">
			<div class="rounded-lg bg-white p-8 shadow-lg">
				<h3 class="mb-4 text-2xl font-bold text-gray-900">¿Quiénes Somos?</h3>
				<p class="mb-4 text-gray-700">
					Somos una asociación dedicada al deporte / hobby del Airsoft en Tenerife que organiza
					partidas en diferentes lugares de la isla de forma legal y segura.
				</p>
				
			</div>
		</div>

		<!-- Mapa -->
		<div class="rounded-lg bg-white p-4 shadow-lg">
			<h3 class="mb-4 text-center text-2xl font-bold text-gray-900">Cómo Llegar</h3>

			<!-- Google Maps Iframe -->
			<div class="relative mb-4 h-96 w-full overflow-hidden rounded-lg">
				<iframe
					src={embedUrl}
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen={true}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Mapa de ubicación - Mirador El Mazape"
				></iframe>
			</div>

			<!-- Botón para abrir en Google Maps -->
			<div class="flex justify-center">
				<a
					href={googleMapsUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-lg bg-[#00ACC9] px-6 py-3 text-white shadow-lg transition-all duration-300 duration-600 hover:scale-105 hover:bg-gray-800"
				>
					<Location/>
					Abrir en Google Maps
				</a>
			</div>
		</div>
	</div>
</div>
