<script lang="ts">
    import { fade } from 'svelte/transition';

    // Datos de los modos disponibles
    const modes = [
        {
            id: 'captura-bandera',
            title: 'Captura la Bandera',
            short: 'Dos equipos intentan tomar la bandera enemiga y llevarla a su base.',
            objectives: [
                'Capturar la bandera enemiga.',
                'Transportarla a tu base sin ser eliminado.',
                'Defender la bandera propia.'
            ],
            rules: [
                'Si el portador es eliminado, la bandera queda en el suelo.',
                'Un compañero puede recuperar la bandera caída.',
                'No ocultar ni enterrar la bandera.'
            ],
            video: 'videos/videoplayback.mp4',
            color: 'bg-emerald-500/10'
        },
        {
            id: "duelo-por-equipos",
            title: 'Combate a Muerte por Equipos',
            short: 'Dos equipos se enfrentan por eliminaciones y control del mapa.',
            objectives: [
                'Eliminar al mayor número de jugadores enemigos.',
                'Mantenerse con vida y coordinar tácticas de equipo.'
            ],
            rules: [
                'Cada eliminación suma puntos al equipo contrario.',
                'Respawns según normas (limitados o ilimitados).'
            ],
            video: 'videos/4259e1e5-d72a-44f1-9c02-c5a462bea0fc.mp4',
            color: 'bg-rose-500/10'
        },
        {
            id: "baja-confirmada",
            title: 'Baja Confirmada',
            short: 'Recoger placas/identificadores para confirmar bajas y sumar puntos.',
            objectives: [
                'Confirmar bajas recogiendo la placa del eliminado.',
                'Recuperar placas de compañeros para denegar puntos al rival.'
            ],
            rules: [
                'La baja solo cuenta si la placa es recogida.',
                'Cada placa confirmada suma +1 punto.'
            ],
            video: 'videos/videoplayback.mp4',
            color: 'bg-yellow-500/10'
        },
        {
            id: 'colocar-y-desactivar',
            title: 'Colocar y Desactivar la Bomba',
            short: 'Atacantes plantan, defensores desactivan. Rondas sin respawn.',
            objectives: [
                'Atacantes: plantar y proteger la bomba.',
                'Defensores: impedir la plantación o desactivar la bomba.'
            ],
            rules: [
                'Plantar: 10s sin interrupciones.',
                'Bomba detona a los 45s si no se desactiva.',
                'Desactivar: 10s sin interrupciones.',
                'Rondas sin respawn; alternar roles en rondas múltiples.'
            ],
            video: 'videos/videoplayback.mp4',
            color: 'bg-sky-500/10'
        }
    ];

    let openMode = ''; // id del modo abierto

    function toggleMode(id: string) {
        openMode = openMode === id ? '' : id;
    }

    function handleVideoLoad(event: Event) {
        const video = event.target as HTMLVideoElement;
        if (video) {
            video.volume = 0.08;
        }
    }
</script>

<div class="w-full px-6 py-10 max-w-7xl mx-auto">
    <header class="text-center mb-8">
        <h2 class="text-4xl font-bold">MODOS DE JUEGO</h2>
        <p class="text-gray-600 mt-2">Reglas, objetivos y formato de las partidas en nuestro campo.</p>
    </header>

    <div class="flex flex-wrap gap-6 w-full items-start">
        {#each modes as mode}
            <article id={mode.id} class={`rounded-xl border border-gray-200 p-6 ${mode.color} shadow-sm hover:shadow-lg transition-shadow duration-300 flex-grow-0 w-full sm:w-[48%] lg:w-[48%] min-w-[320px] max-w-[600px]`}>
                <div class="flex items-start gap-4">
                    <!-- Icono sencillo -->
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-md flex items-center justify-center bg-white/20">
                            {#if mode.id === 'captura-bandera'}
                                <svg class="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2v16h2V6h8l2 4 4-8H6z"/></svg>
                            {:else if mode.id === 'duelo-por-equipos'}
                                <svg class="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 7 12 4.5 19.8 7 12 9.5z"/></svg>
                            {:else if mode.id === 'baja-confirmada'}
                                <svg class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 00-5 5v5H5l7 7 7-7h-2V7a5 5 0 00-5-5z"/></svg>
                            {:else}
                                <svg class="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>
                            {/if}
                        </div>
                    </div>

                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900 flex items-center justify-between">
                            <span>{mode.title}</span>
                            <button
                                class="ml-4 px-3 py-1 text-sm rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                                onclick={() => toggleMode(mode.id)}
                            >
                                {openMode === mode.id ? 'Cerrar' : 'Ver más'}
                            </button>
                        </h3>
                        <p class="mt-2 text-gray-600">{mode.short}</p>

                        {#if openMode === mode.id}
                            <div in:fade={{duration:200}} out:fade={{duration:150}} class="mt-4 space-y-3">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 class="text-sm font-semibold text-gray-800">🎯 Objetivos</h4>
                                        <ul class="text-gray-700 mt-2 space-y-1">
                                            {#each mode.objectives as obj}
                                                <li>{obj}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-gray-800">📋 Reglas</h4>
                                        <ul class="text-gray-700 mt-2 space-y-1">
                                            {#each mode.rules as rules}
                                                <li>{rules}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <div class="rounded-md overflow-hidden border border-gray-200">
                                        <video
                                            src={mode.video}
                                            controls
                                            controlsList="nodownload"
                                            class="w-full h-48 object-cover bg-black"
                                            onloadedmetadata={handleVideoLoad}
                                        >
                                            <track kind="captions" srclang="es" label="Español" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </article>
        {/each}
    </div>

    <div class="mt-10 text-center">
        <p class="text-sm text-gray-500">Si quieres que añadamos más modos o reglas específicas, dínoslo en el apartado de <a href="#contact" class="underline">CONTACTO</a> y lo documentamos aquí.</p>
    </div>
</div>

