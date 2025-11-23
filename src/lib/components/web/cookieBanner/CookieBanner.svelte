<script lang="ts">
    import { browser } from '$app/environment';

    let showBanner = $state(false);
    const CONSENT_DURATION_DAYS = 30; // 1 mes

    $effect(() => {
        if (browser) {
            const consentData = localStorage.getItem('ga_consent_data');
            
            if (!consentData) {
                showBanner = true;
                return;
            }

            try {
                const { consent, timestamp } = JSON.parse(consentData);
                const daysPassed = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
                
                if (daysPassed > CONSENT_DURATION_DAYS) {
                    // Consentimiento expirado
                    showBanner = true;
                    localStorage.removeItem('ga_consent_data');
                }
            } catch {
                showBanner = true;
            }
        }
    });

    function saveConsent(accepted: boolean) {
        if (browser) {
            const consentData = {
                consent: accepted ? 'true' : 'false',
                timestamp: Date.now()
            };
            localStorage.setItem('ga_consent_data', JSON.stringify(consentData));
            // Mantener compatibilidad con el código existente
            localStorage.setItem('ga_consent', accepted ? 'true' : 'false');
        }
    }

    function acceptCookies() {
        saveConsent(true);
        showBanner = false;
        if (browser) {
            window.location.reload();
        }
    }

    function rejectCookies() {
        saveConsent(false);
        showBanner = false;
    }

</script>

{#if showBanner}
    <div
        class="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 p-6 shadow-2xl border-t-4 border-[#00ACC9]"
    >
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex-1 text-white">
                <h3 class="text-xl font-bold mb-2">🍪 Usamos cookies</h3>
                <p class="text-sm text-gray-300">
                    Utilizamos Google Analytics para entender cómo se usa nuestro sitio web y mejorar tu
                    experiencia. Puedes aceptar o rechazar su uso. Para más información, consulta nuestra
                    <a href="/CookiePolicy" class="underline hover:text-[#00ACC9]">Política de Cookies</a>.
                </p>
            </div>
            <div class="flex gap-3 flex-shrink-0">
                <button
                    onclick={rejectCookies}
                    class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                    Rechazar
                </button>
                <button
                    onclick={acceptCookies}
                    class="px-6 py-2 bg-[#00ACC9] text-white rounded-lg hover:bg-[#008FA8] transition-colors font-semibold text-sm"
                >
                    Aceptar todo
                </button>
            </div>
        </div>
    </div>
{/if}