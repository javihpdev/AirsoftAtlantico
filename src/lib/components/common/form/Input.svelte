<script lang="ts">

    type Props = {
        type?: string;
        value?: string;
        placeholder?: string;
        class?: string;
    };
    
    let { type="text", value=$bindable(), placeholder="", class: addClass="" }: Props = $props();

</script>


<input type={type} value={value} placeholder={placeholder} class=" border-2 text-xl p-2 text-white bg-gray-800 caret-blue-500 outline-none {addClass}" />