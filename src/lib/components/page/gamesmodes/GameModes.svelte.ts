// Datos de los modos disponibles
	export const modes = [
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
			id: 'duelo-por-equipos',
			title: 'Duelo por Equipos',
			short: 'Dos equipos se enfrentan por eliminaciones y control del mapa. Gana el equipo con más bajas.',
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
			id: 'baja-confirmada',
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
