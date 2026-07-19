<script lang="ts">
	import Input from '$lib/components/common/form/Input.svelte';
	import MessageOk from './MessageForm/MessageOk.svelte';
	import MessageError from './MessageForm/MessageError.svelte';
	import SpinCircle from '$lib/components/icons/SpinCircle.svelte';

	let nombre = $state('');
	let telefono = $state('');
	let email = $state('');
	let asunto = $state('');
	let mensaje = $state('');
	let mensajeExito = $state(false);
	let mensajeError = $state(false);
	let acceptPrivacy = $state(false);
	let showPrivacyError = $state(false);
	let emailInvalid = $state(false);
	let isLoading = $state(false);
	let fieldNotCompleted = $state(false);

	function validarEmail(email: string): boolean {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

	// Function to handle form
	async function sendMessage(e: Event) {
		// Este event evita que se recargue la pagina al enviar el formulario y que salga la URL con los parametros en la barra de direcciones del navegador
		e.preventDefault();

		 if (!acceptPrivacy) {
           showPrivacyError = true;
            return;
        }
        showPrivacyError = false;

		// Validar campos requeridos
		if (!nombre || !email || !mensaje || !asunto) {
			fieldNotCompleted = true;
			return;
		}
		fieldNotCompleted = false;

		if (!validarEmail(email)) {
			emailInvalid = true
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
				acceptPrivacy = false;
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

<div
	class="relative flex w-full max-w-full flex-col justify-center gap-5 overflow-hidden p-10 md:flex-row"
>
	<img
		src="images/galleryImages/_14A1029.avif"
		alt="foto Contacto"
		class="absolute bottom-0 left-0 min-h-full w-full min-w-full object-cover"
	/>
	<!-- div de fondo oscuro para oscurecer la imagen, si lo hago con opacidad se queda TODO opaco -->
	<div class="absolute inset-0 w-full bg-black/20"></div>
	<div class="relative flex w-200 max-w-full flex-col gap-5 text-white md:gap-10">
		<h2 class="text-2xl">CONTÁCTANOS</h2>
		<div class="flex flex-col gap-5">
			<p class="text-2xl">Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
			<p>Si lo prefieres puedes contactarnos también por redes sociales.</p>
			<div class="flex gap-6 ">
				<a href="https://www.instagram.com/asoairatlan/" target="_blank" rel="noopener noreferrer">
					   <img
						   src="/images/logoInstragram.png"
						   class="w-10 object-contain transition-all duration-700 hover:scale-110"
						   alt="logo instagram"
					   />
				   </a>
				   <a href="https://wa.me/34674957386" target="_blank" rel="noopener noreferrer">
					   <img
						   src="/images/logoWhatsapp.png"
						   class="w-10 object-contain transition-all duration-700 hover:scale-110"
						   alt="logo whatsapp"
					   />
				   </a>
			</div>
		</div>
	</div>
	<div class="relative flex w-full flex-col gap-2 md:w-150">
		<Input bind:value={nombre} type="text" placeholder="Nombre" class="rounded-t-lg" />
		<Input bind:value={email} type="email" placeholder="Correo electrónico" />
		<Input bind:value={asunto} type="text" placeholder="Asunto" />
		<textarea
			bind:value={mensaje}
			placeholder="Tu mensaje"
			rows="7"
			cols="50"
			class="rounded-b-lg bg-gray-800 p-2 text-xl text-white caret-white outline-none"
		></textarea>
		<label class="flex items-center gap-3 text-white text-lg">
        <input type="checkbox" bind:checked={acceptPrivacy} class="mt-1" />
        <span>
            He leído y acepto la <a href="PrivacyPolicy" target="_blank" class="underline hover:text-gray-200">Política de Privacidad</a>
        </span>
    </label>
	<div class="flex justify-center items-center">
		{#if fieldNotCompleted}
			<p class="bg-gray-900 p-5 text-red-500 text-sm rounded-2xl">Por favor, completa todos los campos obligatorios.</p>
		{/if}
	
		{#if showPrivacyError}
			<p class="bg-gray-900 p-5 text-red-500 text-sm rounded-2xl">Debes aceptar la Política de Privacidad para continuar.</p>
		{/if}
	
		{#if emailInvalid}
			<p class="bg-gray-900 p-5 text-red-500 text-sm rounded-2xl">Debes introducir un email válido</p>
		{/if}
	</div>

	<button onclick={sendMessage} type="submit" class="flex items-center justify-center gap-2 p-3 bg-[#00ACC9] transition-all duration-600 w-50 text-lg hover:scale-105 hover:bg-gray-800 text-white rounded-xl cursor-pointer text-center">
    {isLoading ? "Enviando Mensaje..." : "Enviar"}
   <SpinCircle />
</button>
	</div>
</div>

{#if mensajeExito}
	<MessageOk bind:mensajeExito />
{/if}

{#if mensajeError}
	<MessageError bind:mensajeError />
{/if}
