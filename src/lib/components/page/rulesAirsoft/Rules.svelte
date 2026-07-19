<script lang="ts">
    import SecurityRules from "./SecurityRules/SecurityRules.svelte";
    import ReplicasRules from "./ReplicasRules/ReplicasRules.svelte";
	import DistancesRules from "./DistancesRules/DistancesRules.svelte";
	import NotesInterestRules from "./NotesInterest/NotesInterestRules.svelte";    
	import FpsJulios from "./FpsJulios.svelte";
	import Flag from "$lib/components/icons/Flag.svelte";
	import Location from "$lib/components/icons/Location.svelte";
	import InterestIcon from "$lib/components/icons/InterestIcon.svelte";
	import Replicas from "./SectionRules/Replicas.svelte";


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

<!-- Tabla de equivalencias fps -->
 
<FpsJulios />

{#if isOpen}
<div  class="flex flex-col w-full lg:max-w-5xl p-8 rounded-xl shadow-lg shadow-blue-800 gap-8 bg-gradient-to-br from-gray-50 to-white {isOpen ? ' block' : ' hidden'}">
    <img src="images/logo.png" alt="logo" class="w-32 h-32 mx-auto mb-4"/>
    <button class="mt-2 cursor-pointer rounded-lg p-3 bg-red-500 hover:scale-105 hover:bg-gray-800 transition-all duration-600 duratio-600 text-white" onclick={toggleSection}>OCULTAR REGLAS</button>

    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">REGLAS DE LA ASOCIACIÓN DE AIRSOFT DEL ATLÁNTICO</h1>
    
    <!-- Sección Seguridad -->
    <section>
        <h2 class="text-xl font-bold gap-2 text-red-600 mb-4 flex items-center">
            <Flag class='text-red-500'/>
            SEGURIDAD
        </h2>
        <div class="space-y-3">
            <SecurityRules />
        </div>
    </section>

    <!-- Sección Réplicas -->
    <section>
        <h2 class="text-xl font-bold gap-2 text-blue-600 mb-4 flex items-center">
            <Replicas />
            RÉPLICAS
        </h2>
        <div class="space-y-3">
            <ReplicasRules />
        </div>
    </section>

    <!-- Sección Distancias -->
    <section>
        <h2 class="text-xl font-bold gap-2 text-green-600 mb-4 flex items-center">
            <Location class="text-green-600" />
            DISTANCIAS
        </h2>
        <div class="space-y-3">
          <DistancesRules />
        </div>
    </section>

    <!-- Sección Notas de Interés -->
    <section>
        <h2 class="text-xl font-bold gap-2 text-purple-600 mb-4 flex items-center">
            <InterestIcon />
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
    <button onclick={toggleSection} class="bg-red-500 text-white rounded-lg p-2 hover:scale-105 hover:bg-red-700 cursor-pointer transition-all duration-600"><a href="#rules" class="flex w-full justify-center" aria-label="ocultar reglas">OCULTAR REGLAS</a></button>
    <button onclick={downloadFile} class="bg-green-500 text-white rounded-lg p-2 hover:scale-105 hover:bg-green-700 cursor-pointer transition-all duration-600">DESCARGAR REGLAS</button>
    

</div>
{:else} 

<div class="flex flex-col p-10">
    <div class="mt-4 p-4 bg-gray-100 rounded-lg">   <p class="text-gray-800">Las reglas están ocultas.</p></div>
    <button class="mt-2 cursor-pointer rounded-lg p-3 bg-[#00ACC9] hover:scale-105 hover:bg-gray-800 transition-all duration-600 duratio-600 text-white" onclick={toggleSection}>Mostrar Reglas</button>
</div>

{/if}