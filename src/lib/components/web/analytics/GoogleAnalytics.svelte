<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';

    const GA_ID = 'G-35M6T11BZC';

    if (browser) {
        const consent = localStorage.getItem('ga_consent');
        
        if (consent === 'true') {
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', GA_ID, {
                debug_mode: true  // ← AÑADE ESTO
            });
            
            // Evento de prueba
            gtag('event', 'test_event', {
                event_category: 'test',
                event_label: 'cookie_accepted'
            });
        }
    }

    $effect(() => {
        if (browser && window.gtag) {
            window.gtag('config', GA_ID, {
                page_path: $page.url.pathname,
                debug_mode: true  // ← Y ESTO
            });
        }
    });
</script>