<script lang="ts">
	import CarruselEvents from '../CarruselEvents/carruselEvent.svelte';
	import ReplicasIcon from '$lib/components/icons/ReplicasIcon.svelte';

	const events = [
		{
			title: 'Classic Airsoft',
			description:
				'Partida clásica de Airsoft en la que se enfrentan dos equipos para conseguir la victoria.',
			iconGameMode: ReplicasIcon,
			gameMode: 'Misiones Variadas',
			day: '24',
			month: 'OCT',
			year: '2027',
			location: 'Arico',
			img: 'images/galleryImages/_M1A3381.avif',
			typeEvent: 'Próximo Evento'
		}
		
	];
</script>

<CarruselEvents {events} />
