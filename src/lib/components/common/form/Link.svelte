
<script lang="ts">

    type Props = {
        class?: string;
        href: string;
        ariaLabel?: string;
        children?: any;
    };

    let { href='', ariaLabel, children, class: addClass="" }: Props = $props();
    let styleLink = "hover:scale-105 text-center text-white hover:text-gray-400 transition-colors duration-700";
</script>

<a href={href} aria-label={ariaLabel} class={`${styleLink} ${addClass}`}> {@render children?.()}</a>



