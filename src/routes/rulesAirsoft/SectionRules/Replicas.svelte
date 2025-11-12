<script lang="ts">

    type Props = {
        class?: string;
        text?: string;
    };

    let { class: addClass = '', text }: Props = $props();
    
</script>


<div
	class="flex items-start rounded-md rounded-r-lg border-l-4 border-blue-400 bg-blue-50 p-4 transition-colors duration-200 hover:bg-blue-100"
>
	<span class="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></span>
	<span class="text-gray-800">{text}</span>
</div>