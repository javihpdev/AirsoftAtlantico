<script lang="ts">
    type Props = {
        class?: string;
        text?: string;
    };

    let { class: addClass = '', text }: Props = $props();   
</script>



<div class="flex items-start p-4 rounded-md bg-purple-50 border-l-4 border-purple-400 rounded-r-lg hover:bg-purple-100 transition-colors duration-200">
                <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-gray-800">{text}</span>
            </div>