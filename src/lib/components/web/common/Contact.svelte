<script>
	import Input from "$lib/components/common/form/Input.svelte";

    let name=$state('');
    let email=$state('');
    let asunto=$state('');
    let message=$state('');

    let isLoading=$state(false);

    async function sendMessage() {

        try{
            isLoading = true
            const response = await fetch('/server/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    asunto,
                    message
                         })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            alert("Mensaje enviado!");
            console.log('Respuesta del servidor:', data);

        }catch(error){
            console.error("Error al enviar mensaje:", error);
        } finally{
            isLoading = false;
        }

    }

</script>


<div class="relative flex flex-col md:flex-row p-10 justify-center gap-5 w-full max-w-full bg-cover bg-center md:bg-[center_bottom_0px]" style="background-image: url('/images/galleryImages/_14A1029.avif');">
    <!-- div de fondo oscuro para oscurecer la imagen, si lo hago con opacidad se queda TODO opaco -->
    <div class="absolute inset-0 bg-black/20"></div>
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
        <Input bind:value={name} type="text" placeholder="Nombre" class="rounded-t-lg" />
        <Input bind:value={email} type="email" placeholder="Correo electrónico" />
        <Input bind:value={asunto} type="text" placeholder="Asunto" />
        <textarea bind:value={message} placeholder="Tu mensaje" rows="7" cols="50" class="outline-none text-xl p-2 text-white bg-gray-800 caret-white rounded-b-lg"></textarea>
        <button onclick={sendMessage} type="submit" class="p-3 bg-[#00ACC9] w-20 rounded-xl cursor-pointer font-arial text-center">{isLoading ? "Enviando Mensaje..." : "Enviar"}</button>
	</div>
</div>
