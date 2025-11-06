<script lang="ts">

    type Props = {
        type?: string;
        value?: string;
        placeholder?: string;
        class?: string;
    };
    
    let { type="text", value=$bindable(""), placeholder="", class: addClass="" }: Props = $props();

</script>


<input type={type} value={value} placeholder={placeholder} class="text-xl p-3 text-white bg-gray-800 caret-white outline-none {addClass}" />