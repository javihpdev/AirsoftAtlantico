<script lang="ts">
    function downloadFile(){
		const link = document.createElement('a');
		link.href = '/files/Asociación de  Airsoft del Atlántico.pdf';
		link.download = 'Asociación de  Airsoft del Atlántico.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}


    let isOpen = $state(false);

    function toggleSection() {
       isOpen = !isOpen;
    }
</script>


{#if isOpen}
<div  class="flex flex-col max-w-4xl mx-auto p-8 rounded-xl shadow-lg shadow-blue-800 gap-8 bg-gradient-to-br from-gray-50 to-white {isOpen ? ' block' : ' hidden'}">
    <img src="/AirsoftAtlantico/images/logo.png" alt="logo" class="w-32 h-32 mx-auto mb-4"/>
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">REGLAS DE LA ASOCIACIÓN DE AIRSOFT DEL ATLÁNTICO</h1>

    <!-- Sección Seguridad -->
    <section>
        <h2 class="text-xl font-bold text-red-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
            </svg>
            SEGURIDAD
        </h2>
        <ul class="space-y-3">
            <li class="flex items-start p-4 rounded-md bg-red-50 border-l-4 border-red-400 rounded-r-lg hover:bg-red-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Aconsejable mantener la protección ocular tanto en el terreno como en el área de descanso.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-red-50 border-l-4 border-red-400 rounded-r-lg hover:bg-red-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Obligatorio el uso de protección ocular y vocal durante las partidas.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-red-50 border-l-4 border-red-400 rounded-r-lg hover:bg-red-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Para probar réplicas, entrar a la zona de campo o en caso de duda preguntar a la organización.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-red-50 border-l-4 border-red-400 rounded-r-lg hover:bg-red-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Nunca probar réplicas en el parking.</span>
            </li>
        </ul>
    </section>

    <!-- Sección Réplicas -->
    <section>
        <h2 class="text-xl font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            RÉPLICAS
        </h2>
        <ul class="space-y-3">
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Está prohibido el uso de réplicas reales o que se asemejen a armas reales (ejemplo: Glock 17 real, M4 real, etc).</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Todos pasaremos chrono antes de empezar la partida.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Las réplicas deben cumplir con la potencia en julios y fps establecidas a nivel estatal.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Si hay jugadores que vayan a usar el rol de apoyo/tirador selecto/ sniper, por favor comunicarlo pues los roles están limitados.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Si alguien va a usar escudo, por favor comuníquenlo antes para indicarles el sistema de uso.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Granadas de fogueo prohibidas.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Réplicas cuerpo a cuerpo (cuchillos) no se pueden lanzar, solo tocando y no pueden ser reales.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-blue-50 border-l-4 border-blue-400 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Cualquier duda con algún tipo de réplica que tengan, pregunten para aclarar dudas.</span>
            </li>
        </ul>
    </section>

    <!-- Sección Distancias -->
    <section>
        <h2 class="text-xl font-bold text-green-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            DISTANCIAS
        </h2>
        <ul class="space-y-3">
            <li class="flex items-center rounded-md rounded-md justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                <span class="text-gray-800 font-medium">Rol de asalto</span>
                <span class="px-3 py-1 bg-green-200  text-green-800 text-sm font-semibold rounded-full">0 metros</span>
            </li>
            <li class="flex items-center rounded-md justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                <span class="text-gray-800 font-medium">Rol de Apoyo</span>
                <span class="px-3 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">15 metros</span>
            </li>
            <li class="flex items-center rounded-md justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                <span class="text-gray-800 font-medium">DMR</span>
                <span class="px-3 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">25 metros</span>
            </li>
            <li class="flex items-center rounded-md justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                <span class="text-gray-800 font-medium">Sniper</span>
                <span class="px-3 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">30 metros</span>
            </li>
        </ul>
        <p class="text-sm text-gray-600 mt-2 italic">* Para rol de asalto: aplicar coherencia y sentido común para no causar daño de más a un jugador</p>
    </section>

    <!-- Sección Notas de Interés -->
    <section>
        <h2 class="text-xl font-bold text-purple-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            NOTAS DE INTERÉS
        </h2>
        <ul class="space-y-3">
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Granadas de mano se lanzan por debajo del abdomen. Si hay diferencia de altura entre el que lanza la granada y el que la va a recibir, evitar que le golpee directamente en cualquier parte del cuerpo.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Prácticamente una granada limpia una habitación entera del campo. En caso de lanzarlas fuera, calcular un rango de 5 metros a la redonda de la zona impacto. En caso de duda, darse por eliminado.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Libanesa = No permitido</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Los setos o arbustos no son coberturas firmes por lo que si nos disparan a través de uno y las bbs impactan directamente o con baja potencia sobre nosotros, hemos de darnos por eliminados. Si tenemos dudas, también.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Hay fuego amigo. Se va al respawn el jugador que recibió el impacto de la bola.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Cuando se tenga dudas de haber sido impactado por una bb o por lanzamiento de granada, siempre darse por eliminado y no buscar al posible causante de nuestra eliminación.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Es muy importante levantar la mano y en voz ALTA decir "muerto / eliminado" para tener un buen juego.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Hay entorno CQB por lo que es probable que recibamos BBS de jugadores de ambos equipos mientras estamos eliminados y volvemos al respawn, por lo que no enfadarse por esto, es algo normal y nadie lo hace con mala fe.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">De camino al respawn al ser eliminado, interferir lo mínimo posible en el juego de los jugadores "vivos".</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">"Los muertos no hablan de camino al respawn".</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">En caso de que algún jugador pueda estar siendo impactado y no se dé por eliminado en reiteradas ocasiones, no dirigirse a él directamente si no a la organización.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">Prohibido discutir sobre cualquier asunto en el campo (destruye la inmersión en el juego). Comentad cualquier situación con la organización.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">El material ajeno encontrado durante las partidas se entrega a la organización. No apropiarse indebidamente de material ajeno.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">En caso de que alguna cobertura o atrezo se caiga o tenga desperfectos, comunicarlo a la organización, no tocar nada antes.</span>
            </li>
            <li class="flex items-start p-4 rounded-md bg-red-100 border-l-4 border-red-500 rounded-r-lg hover:bg-red-200 transition-colors duration-200">
                <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800 font-semibold">PROHIBIDO consumo de alcohol o estupefacientes (hay que recordarlo).</span>
            </li>
        </ul>
    </section>

    <!-- Footer -->
    <div class="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p class="text-gray-800">
            Cualquier duda, sugerencia o idea es bienvenida, ponte en contacto con nosotros en el apartado 
        </p>
        <a href="#contact" class="text-blue-600 ">CONTACTO</a>🫡
    </div>
    <button onclick={toggleSection} class="bg-red-500 text-white rounded-lg p-2"><a href="#rules" class="flex w-full justify-center" aria-label="ocultar reglas">OCULTAR REGLAS</a></button>

</div>
{:else}
<div class="flex flex-col">
    <div class="mt-4 p-4 bg-gray-100 rounded-lg">   <p class="text-gray-800">Las reglas están ocultas.</p></div>
    <button class="mt-2 cursor-pointer rounded-lg p-3 bg-[#00ACC9] text-white" onclick={toggleSection}>Mostrar Reglas</button>
</div>

{/if}