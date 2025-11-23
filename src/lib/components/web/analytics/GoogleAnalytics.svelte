<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';

    const GA_ID = 'G-35M6T11BZC'; // Tu ID real

    if (browser) {
        const consent = localStorage.getItem('ga_consent');
        
        if (consent === 'true') {
            // Cargar script
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            script.async = true;
            document.head.appendChild(script);

            // Inicializar
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', GA_ID);
        }
    }

    // Trackear cambios de página
    $effect(() => {
        if (browser && window.gtag) {
            window.gtag('config', GA_ID, {
                page_path: $page.url.pathname
            });
        }
    });
</script>