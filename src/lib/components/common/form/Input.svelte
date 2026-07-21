<script lang="ts">

    type Props = {
        type?: string;
        value?: string;
        placeholder?: string;
        class?: string;
        error?: boolean;
    };

    let { type="text", value=$bindable(""), placeholder="", class: addClass="", error=false }: Props = $props();

</script>


<input
    type={type}
    bind:value={value}
    placeholder={placeholder}
    aria-invalid={error}
    class="text-xl p-3 text-white bg-gray-800 caret-white outline-none border {error ? 'border-red-500' : 'border-transparent'} {addClass}"
/>