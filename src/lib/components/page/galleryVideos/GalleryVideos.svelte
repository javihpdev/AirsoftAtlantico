<script lang="ts">

	const videos = [
		// Cambiar los videos por las rutas correctas de tus videos
	{
        src:'videos/galleryVideos/NhanduAirsoft.mov',
        title:'Nhandu Airsoft',
        instagram:'https://www.instagram.com/nhandu_airsoft',
        youtube:'https://www.youtube.com/@NhanduAirsoft',
        ocupacion: 'Creador de contenido',
    }
 	
	];

	let visibleVideos = $state(3);

	// funcion para establecer el volumen del video al 10% por defecto
	function setVolume(event: Event) {
        const video = event.target as HTMLVideoElement;
        video.volume = 0.1;
    }

	function loadMore() {
		visibleVideos += 3;
	}
</script>

<div class="flex flex-col w-full max-w-full justify-center items-center scroll-mt-32 p-8">
	<h2 class="text-4xl font-bold max-w-[85%] text-center">GALERÍA DE VÍDEOS</h2>
		<p class="mt-2 text-gray-600 max-w-[85%] text-center">Vídeos de las partidas en RAID, realizados por nuestro equipo y creadores de contenido invitados</p>

	<div class="flex flex-wrap gap-20 justify-center items-center mt-10">
		{#each videos.slice(0, visibleVideos) as video}
            <div class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                <!-- Video -->
                <div class="overflow-hidden bg-gray-900">
                    <video
                        src={video.src}
                        controls
                        controlslist="nodownload"
                        onloadedmetadata={setVolume}
                        class="h-full w-full object-contain"
                    >
                        <track kind="captions" src="" label="Spanish" srclang="es" default />
                    </video>
                </div>

                <!-- Info card debajo del video -->
                <div class="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">{video.title}</h3>
                        <p class="text-sm text-gray-500">{video.ocupacion}</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <a 
                            href={video.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                            aria-label="Ver perfil de Instagram de {video.title}"
                        >
                            <img 
                                src="images/logoInstragram.png" 
                                alt="Instagram" 
                                class="h-5 w-5"
                            >
                            Seguir
                        </a>
                        <a href={video.youtube} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg" aria-label="Ver canal de YouTube de {video.title}">
                            <svg 
                                class="h-5 w-5 fill-current" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            Ver canal
                        </a>
                    </div>
                </div>
            </div>
        {/each}
	</div>
    {#if visibleVideos < videos.length}
        <div class="col-span-full mt-4 flex justify-center">
            <button
                onclick={loadMore}
                class="rounded-lg bg-[#00ACC9] hover:bg-gray-800 hover:scale-105 px-6 py-3 text-white transition-all duration-600 cursor-pointer"
            >
                Cargar más vídeos
            </button>
        </div>
    {/if}
</div>
