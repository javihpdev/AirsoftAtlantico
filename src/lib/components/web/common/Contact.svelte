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


<div class="relative flex p-10" style="background-image: url('/images/galleryImages/_14A1029.jpg'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
    <div class="flex flex-col relative text-white gap-10 w-full">
        <h2 class="text-2xl">CONTÁCTANOS</h2>
        <p class="text-2xl">Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
        <p class="text-2xl">LOCALIZACIÓN: Mirador El Mazape, San Juan de la Rambla.</p>
    </div>
	<div class="flex flex-col relative gap-2 md:w-150 w-100  max-w-full">
        <Input bind:value={name} type="text" placeholder="Nombre" class="rounded-t-lg" />
        <Input bind:value={email} type="email" placeholder="Correo electrónico" />
        <Input bind:value={asunto} type="text" placeholder="Asunto" />
        <textarea bind:value={message} placeholder="Tu mensaje" rows="7" cols="50" class="outline-none text-xl p-2 text-white bg-gray-800 caret-white rounded-b-lg"></textarea>
        <button onclick={sendMessage} type="submit" class="p-3 bg-[#00ACC9] w-20 rounded-xl cursor-pointer font-arial text-center">{isLoading ? "Enviando Mensaje..." : "Enviar"}</button>
	</div>
</div>
