<script lang="ts">
	import TiktokIcon from "$lib/components/icons/TiktokIcon.svelte";
	import YoutubeIcon from "$lib/components/icons/YoutubeIcon.svelte";
	import { influencers } from "./influencers.svelte.js";


	let influencersShow = $state(3);

	// funcion para establecer el volumen del video al 10% por defecto
	function setVolume(event: Event) {
        const video = event.target as HTMLVideoElement;
        video.volume = 0.1;
    }

	function loadMore() {
		influencersShow += 3;
	}
</script>

<div class="flex flex-col w-full justify-center items-center scroll-mt-32 p-8 shadow-md"> 
	<h2 class="text-4xl font-bold max-w-[85%] text-center">INFLUENCERS</h2>
		<p class="mt-2 text-gray-600 max-w-[85%] text-center">Vídeos de las partidas en RAID, realizados por nuestro equipo y creadores de contenido invitados</p>

	<div class="flex flex-wrap gap-20 p-5 justify-center items-center mt-10">
		{#each influencers.slice(0, influencersShow) as influencer}
            <div class="flex w-80 flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                <!-- Video -->
                <div class="h-96 overflow-hidden bg-gray-900">
                    {#if influencer.src} 
                    <video
                        src={influencer.src}
                        controls
                        controlslist="nodownload"
                        onloadedmetadata={setVolume}
                        class="h-full w-full object-cover"
                    >
                        <track kind="captions" src="" label="Spanish" srclang="es" default />
                    </video>
                    {/if}
                    {#if influencer.img} 
                    <img src="images/bisonLogo.jpg" alt="logo Bison"
                        class="h-full w-full object-cover"
                    />
                    {/if}

                </div>

                <!-- Info card debajo del video -->
                <div class="flex flex-col items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 gap-4 px-6 py-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">{influencer.title}</h3>
                        <p class="text-sm text-gray-500">{influencer.ocupacion}</p>
                    </div>
                    <div class="flex gap-4">
                    {#if influencer.instagram}
                        <a 
                            href={influencer.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                            aria-label="Ver perfil de Instagram de {influencer.title}"
                        >
                            <img 
                                src="images/logoInstragram.png" 
                                alt="Instagram" 
                                class="h-5 w-5"
                            >
                            Seguir
                        </a>
                        {/if}
                        {#if influencer.tiktok}
                        <a 
                            href={influencer.tiktok} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-cyan-600 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                            aria-label="Ver perfil de TikTok de {influencer.title}"
                        >
                            <TiktokIcon class="h-5 w-5" />
                            Tik Tok
                        </a>
                        {/if}
                        {#if influencer.youtube}
                        <a href={influencer.youtube} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 p-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg" aria-label="Ver canal de YouTube de {influencer.title}">
                            <YoutubeIcon />
                            Ver canal
                        </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
	</div>
    {#if influencersShow < influencers.length}
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
