<script lang="ts">
	import TiktokIcon from "$lib/components/icons/TiktokIcon.svelte";
	import YoutubeIcon from "$lib/components/icons/YoutubeIcon.svelte";


	const videos = [
		// Cambiar los videos por las rutas correctas de tus videos
        {
            src:'videos/galleryVideos/BatGhost.mp4',
            title:'Bat Ghost',
            instagram:'https://www.instagram.com/bat_ghost_/',
            tiktok:'https://www.tiktok.com/@batghost_official',
            ocupacion: 'Creador de contenido',
        },
	{
        src:'videos/galleryVideos/NhanduAirsoft.mov',
        title:'Nhandu Airsoft',
        instagram:'https://www.instagram.com/nhandu_airsoft',
        youtube:'https://www.youtube.com/@NhanduAirsoft',
        ocupacion: 'Creador de contenido'
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

<div class="flex flex-col w-full max-w-full justify-center items-center scroll-mt-32 p-8 shadow-md">
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
                    {#if video.instagram}
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
                        {/if}
                        {#if video.tiktok}
                        <a 
                            href={video.tiktok} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-cyan-600 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                            aria-label="Ver perfil de TikTok de {video.title}"
                        >
                            <TiktokIcon class="h-5 w-5" />
                            Tik Tok
                        </a>
                        {/if}
                        {#if video.youtube}
                        <a href={video.youtube} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg" aria-label="Ver canal de YouTube de {video.title}">
                            <YoutubeIcon />
                            Ver canal
                        </a>
                        {/if}
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
