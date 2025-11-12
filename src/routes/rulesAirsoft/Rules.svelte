<script lang="ts">
    import SecurityRules from "./SecurityRules/SecurityRules.svelte";
    import ReplicasRules from "./ReplicasRules/ReplicasRules.svelte";
	import DistancesRules from "./DistancesRules/DistancesRules.svelte";
	import NotesInterestRules from "./NotesInterest/NotesInterestRules.svelte";    


 function downloadFile(){
    const link = document.createElement('a');
    link.href = 'files/Asociación de  Airsoft del Atlántico.pdf';
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
<div  class="flex flex-col w-full lg:max-w-5xl p-8 rounded-xl shadow-lg shadow-blue-800 gap-8 bg-gradient-to-br from-gray-50 to-white {isOpen ? ' block' : ' hidden'}">
    <img src="images/logo.png" alt="logo" class="w-32 h-32 mx-auto mb-4"/>
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">REGLAS DE LA ASOCIACIÓN DE AIRSOFT DEL ATLÁNTICO</h1>

    <!-- Sección Seguridad -->
    <section>
        <h2 class="text-xl font-bold text-red-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
            </svg>
            SEGURIDAD
        </h2>
        <div class="space-y-3">
            <SecurityRules />
        </div>
    </section>

    <!-- Sección Réplicas -->
    <section>
        <h2 class="text-xl font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            RÉPLICAS
        </h2>
        <div class="space-y-3">
            <ReplicasRules />
        </div>
    </section>

    <!-- Sección Distancias -->
    <section>
        <h2 class="text-xl font-bold text-green-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            DISTANCIAS
        </h2>
        <div class="space-y-3">
          <DistancesRules />
        </div>
    </section>

    <!-- Sección Notas de Interés -->
    <section>
        <h2 class="text-xl font-bold text-purple-600 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            NOTAS DE INTERÉS
        </h2>
        <div class="space-y-3">
            <NotesInterestRules />
        </div>
    </section>

    <!-- Footer -->
    <div class="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p class="text-gray-800">
            Cualquier duda, sugerencia o idea es bienvenida, ponte en contacto con nosotros en el apartado 
        </p>
        <a href="#contact" class="text-blue-600 ">CONTACTO</a>🫡
    </div>
    <button onclick={toggleSection} class="bg-red-500 text-white rounded-lg p-2 hover:scale-105 hover:bg-red-700 transition-all duration-600"><a href="#rules" class="flex w-full justify-center" aria-label="ocultar reglas">OCULTAR REGLAS</a></button>
    <button onclick={downloadFile} class="bg-green-500 text-white rounded-lg p-2 hover:scale-105 hover:bg-green-700 transition-all duration-600"><a href="#rules" class="flex w-full justify-center" aria-label="ocultar reglas">DESCARGAR REGLAS</a></button>
    

</div>
{:else}

<div class="flex flex-col p-10">
    <div class="mt-4 p-4 bg-gray-100 rounded-lg">   <p class="text-gray-800">Las reglas están ocultas.</p></div>
    <button class="mt-2 cursor-pointer rounded-lg p-3 bg-[#00ACC9] hover:scale-105 hover:bg-gray-800 transition-all duration-600 duratio-600 text-white" onclick={toggleSection}>Mostrar Reglas</button>
</div>

{/if}