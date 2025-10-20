<script>
    // Coordenadas del Mirador El Mazape
    const latitude = 28.39008543229673;
    const longitude = -16.62935377304104;
    const placeName = "Mirador El Mazape, La Guancha";
    
    // URL para abrir en Google Maps
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    
    // URL correcta para el iframe
    const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z=15&output=embed`;
</script>

<section class="w-full p-8 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">SOBRE NOSOTROS</h2>
        <p class="text-xl text-center mb-12 text-gray-700">Asociación de Airsoft del Atlántico</p>
        
        <!-- Información -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold mb-4 text-gray-900">¿Quiénes Somos?</h3>
                <p class="text-gray-700 mb-4">
                    Somos una asociación dedicada al deporte del airsoft en Tenerife. 
                    Organizamos partidas regulares en un entorno natural privilegiado.
                </p>
                <p class="text-gray-700">
                    Nuestro campo está ubicado en el Mirador El Mazape, San Juan de la Rambla, 
                    ofreciendo un escenario único para la práctica de este deporte.
                </p>
            </div>
            
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Nuestra Ubicación</h3>
                <p class="text-gray-700 mb-4">
                    <strong>🏟️ Nombre del Campo:</strong> RAID
                </p>
                <p class="text-gray-700 mb-4">
                    <strong>📍 Dirección:</strong> Mirador El Mazape, San Juan de la Rambla
                </p>
                <p class="text-gray-700 mb-4">
                    <strong>📧 Email:</strong> asociacionairsoftatlantico@gmail.com
                </p>
                <p class="text-gray-700">
                    <strong>📱 WhatsApp:</strong> +34 674 957 386
                </p>
            </div>
        </div>

        <!-- Mapa -->
        <div class="bg-white p-4 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-gray-900 text-center">Cómo Llegar</h3>
            
            <!-- Google Maps Iframe -->
            <div class="relative w-full h-96 rounded-lg overflow-hidden mb-4">
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
                    class="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Abrir en Google Maps
                </a>
            </div>
        </div>
    </div>
</section>