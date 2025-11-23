<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { PUBLIC_GOOGLE_ANALYTICS_ID } from '$env/static/public';

    let consent = $state(false);

    function initGA() {
        if (!browser || !consent || !PUBLIC_GOOGLE_ANALYTICS_ID) return;

        // Script de Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_ID}`;
        document.head.appendChild(script1);

        // Configuración de gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: any[]) {
            window.dataLayer.push(args);
        };
        window.gtag('js', new Date());
        window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
            page_path: $page.url.pathname
        });
    }

    export function acceptAnalytics() {
        consent = true;
        if (browser) {
            localStorage.setItem('ga_consent', 'true');
            initGA();
        }
    }

    export function rejectAnalytics() {
        consent = false;
        if (browser) {
            localStorage.setItem('ga_consent', 'false');
        }
    }

    $effect(() => {
        if (browser) {
            const savedConsent = localStorage.getItem('ga_consent');
            if (savedConsent === 'true') {
                consent = true;
                initGA();
            }
        }
    });

    // Trackear cambios de página
    $effect(() => {
        if (consent && browser && window.gtag) {
            window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
                page_path: $page.url.pathname
            });
        }
    });
</script>