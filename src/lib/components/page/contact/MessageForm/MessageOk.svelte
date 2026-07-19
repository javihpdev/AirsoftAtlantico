<script lang="ts">
	import CheckGreen from "$lib/components/icons/CheckGreen.svelte";
	import WarningYellow from "$lib/components/icons/WarningYellow.svelte";



	type Props = {
		mensajeExito: boolean;
	};
	let { mensajeExito = $bindable(false) }: Props = $props();

    $effect(() => {
		if (mensajeExito) {
			setTimeout(() => {
				const el =
					document.getElementById('messageExitoso');
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}, 100);
		}
	});

</script>
<div
				id="messageExitoso"
				class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
			>
				<div
					class="flex flex-col items-center justify-center gap-5 rounded-3xl border border-slate-700 bg-gray-900 p-8 md:p-12"
				>
					<CheckGreen />
					<p class="text-3xl tracking-wide text-white md:text-4xl">¡Mensaje Enviado!</p>
					<p class="text-center text-slate-400">Gracias por ponerte en contacto conmigo.</p>
					<p class="text-center text-slate-400">
						Te llegará un correo electrónico de confirmación.
					</p>
					<div class="mt-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-4 w-full">
            <div class="flex items-start gap-3">
				<!-- Imagen de advertencia -->
               <WarningYellow />
				<!-- Cuadro de advertencia -->
                <div class="text-sm text-yellow-200/90">
                    <p class="font-semibold mb-1">Si no recibes el correo:</p>
                    <ul class="space-y-1 text-yellow-200/70">
                        <li>• Revisa la carpeta de <span class="font-semibold text-yellow-200">spam</span></li>
                        <li>• Comprueba que el <span class="font-semibold text-yellow-200">email</span> escrito sea el correcto</li>
                    </ul>
                </div>
            </div>
        </div>
					<button
            type="button"
            aria-label="Boton cerrar pop-up de error"
            onclick={() => (mensajeExito = false)}
            class="mt-4 w-full transform rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-green-600 hover:to-green-700 hover:shadow-xl"
        >Cerrar</button>
				</div>
			</div>