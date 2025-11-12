<script lang="ts">
    type Props = {
        class?: string;
        text?: string;
        distance?: string;
    };

    let { class: addClass = '', text, distance }: Props = $props();
</script>


<div class="flex items-center rounded-md justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                <span class="text-gray-800 font-medium">{text}</span>
                <span class="px-3 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full">{distance}</span>
            </div>