<script>
	// Coordenadas del Mirador El Mazape

	const latitude = 28.389735584930182;
	const longitude = -16.629758936999046;
	const placeName = 'Mirador El Mazape, La Guancha';

	// URL para abrir en Google Maps
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

	// URL correcta para el iframe
	const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z=15&output=embed&t=k`;
</script>

<div class="w-full p-8">
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
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
						/>
					</svg>
					Abrir en Google Maps
				</a>
			</div>
		</div>
	</div>
</div>
