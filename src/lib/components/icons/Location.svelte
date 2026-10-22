<script lang="ts">
	type Props = {
		class?: string;
		width?: number;
		height?: number;
	};

	let { class: addClass = '', width, height }: Props = $props();
</script>

<svg
	class="{addClass}"
	fill="currentColor"
	viewBox="0 0 24 24"
	width={width || 24}
	height={height || 24}
>
	<path
		d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
	/>
</svg>
