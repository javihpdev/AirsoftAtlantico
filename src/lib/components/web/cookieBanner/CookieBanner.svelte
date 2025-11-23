<script lang="ts">
    import { browser } from '$app/environment';

    let showBanner = $state(false);

    $effect(() => {
        if (browser) {
            const saved = localStorage.getItem('ga_consent');
            if (!saved) {
                showBanner = true;
            }
        }
    });

    function acceptCookies() {
        if (browser) {
            localStorage.setItem('ga_consent', 'true');
            window.location.reload();
        }
    }

    function rejectCookies() {
        if (browser) {
            localStorage.setItem('ga_consent', 'false');
            showBanner = false;
        }
    }
</script>

{#if showBanner}
    <div class="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 p-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div class="flex-1 text-white">
                <h3 class="text-xl font-bold mb-2">🍪 Usamos cookies</h3>
                <p class="text-sm">
                    Utilizamos Google Analytics para mejorar tu experiencia.
                    <a href="/CookiePolicy" class="underline">Más información</a>
                </p>
            </div>
            <div class="flex gap-3">
                <button
                    onclick={rejectCookies}
                    class="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                    Rechazar
                </button>
                <button
                    onclick={acceptCookies}
                    class="px-6 py-2 bg-[#00ACC9] text-white rounded hover:bg-[#008FA8] font-semibold"
                >
                    Aceptar
                </button>
            </div>
        </div>
    </div>
{/if}