<script lang="ts">
	import Input from "$lib/components/common/form/Input.svelte";
	import MessageOk from "./MessageForm/MessageOk.svelte";
	import MessageError from "./MessageForm/MessageError.svelte";

    let nombre=$state('');
    let telefono=$state('');
    let email=$state('');
    let asunto=$state('');
    let mensaje=$state('');
    let mensajeExito=$state(false);
    let mensajeError=$state(false);

    let isLoading=$state(false);

    function validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
	
    // Function to handle form 
	async function sendMessage(e: Event) {
		// Este event evita que se recargue la pagina al enviar el formulario y que salga la URL con los parametros en la barra de direcciones del navegador
		e.preventDefault();
		
		// Validar campos requeridos
		if (!nombre || !email || !mensaje || !asunto) {
			alert('Por favor completa todos los campos obligatorios');
			return;
		}

		if (!validarEmail(email)) {
			alert('Por favor ingresa un correo electrónico válido');
			return;
		}

		isLoading = true;

		try {
			const response = await fetch('/server/send-message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					nombre,
					telefono,
					email,
					asunto,
					mensaje
				})
			});

			const result = await response.json();

			if (response.ok && result.success) {
				mensajeExito = true;
				// Clear form fields
				nombre = '';
				telefono = '';
				email = '';
				asunto = '';
				mensaje = '';
			} else {
				mensajeError = true;
				console.error('Error al enviar el mensaje:', result.error);
			}
			
		} catch (error) {
			console.error('Error:', error);
			mensajeError = true;
		} finally {
			isLoading = false;
		}
	}

</script>

<div class="relative flex flex-col md:flex-row p-10 justify-center gap-5 w-full max-w-full overflow-hidden">
    <img src="images/galleryImages/_14A1029.avif" alt="foto Contacto" class="absolute w-full min-w-full min-h-full object-cover bottom-0 left-0"/>
    <!-- div de fondo oscuro para oscurecer la imagen, si lo hago con opacidad se queda TODO opaco -->
    <div class="absolute w-full inset-0 bg-black/20"></div>
    <div class="flex flex-col relative text-white gap-5 md:gap-10 w-200 max-w-full">
        <h2 class="text-2xl">CONTÁCTANOS</h2>
        <p class="text-2xl">Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
        <a href="https://www.google.com/maps/search/?api=1&query=28.389735584930182,-16.629758936999046" target="_blank" rel="noopener noreferrer">
                    <p class="mb-4 text-2xl hover:scale-105 transition-all duration-700">
                        <strong>LOCALIZACIÓN:</strong> Mirador El Mazape, San Juan de la Rambla.
                    </p>
                </a>
    </div>
	<div class="flex flex-col relative gap-2 w-full md:w-150 ">
        <Input bind:value={nombre} type="text" placeholder="Nombre" class="rounded-t-lg" />
        <Input bind:value={email} type="email" placeholder="Correo electrónico" />
        <Input bind:value={asunto} type="text" placeholder="Asunto" />
        <textarea bind:value={mensaje} placeholder="Tu mensaje" rows="7" cols="50" class="outline-none text-xl p-2 text-white bg-gray-800 caret-white rounded-b-lg"></textarea>
        <button onclick={sendMessage} type="submit" class="p-3 bg-[#00ACC9] w-20 rounded-xl cursor-pointer font-arial text-center">{isLoading ? "Enviando Mensaje..." : "Enviar"}</button>
	</div>
</div>

{#if mensajeExito}
    <MessageOk bind:mensajeExito={mensajeExito} />
{/if}

{#if mensajeError}
    <MessageError bind:mensajeError={mensajeError} />
{/if}