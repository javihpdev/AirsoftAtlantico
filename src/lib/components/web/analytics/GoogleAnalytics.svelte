<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { PUBLIC_GOOGLE_ANALYTICS_ID } from '$env/static/public';

    let initialized = false;

    function initGA() {
        if (!browser || initialized || !PUBLIC_GOOGLE_ANALYTICS_ID) return;

        const consent = localStorage.getItem('ga_consent');
        if (consent !== 'true') return;

        console.log('🚀 Inicializando Google Analytics...');

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_ID}`;
        
        script.onload = () => {
            console.log('✅ Script de GA cargado');

            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(...args) {
                window.dataLayer.push(args);
            };

            window.gtag('js', new Date());
            
            // Configuración SIN cookie_flags (dejar que GA lo maneje automáticamente)
            window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
                page_path: window.location.pathname,
                send_page_view: true
            });

            console.log('✅ GA configurado');

            // Enviar evento de prueba
            window.gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: window.location.pathname
            });

            console.log('📊 Evento page_view enviado');

            // Verificar cookies después de 5 segundos (GA4 puede tardar más)
            setTimeout(() => {
                const cookies = document.cookie;
                console.log('🍪 Cookies después de 5s:', cookies);
                
                if (!cookies || cookies.length === 0) {
                    console.warn('⚠️ Las cookies NO se crearon en el navegador');
                    console.log('Pero GA4 puede estar funcionando igual (usa almacenamiento alternativo)');
                } else {
                    console.log('✅ Cookies creadas:', cookies.split(';').length);
                }
            }, 5000);
        };

        script.onerror = () => {
            console.error('❌ Error al cargar el script de GA');
        };

        document.head.appendChild(script);
        initialized = true;
    }

    onMount(() => {
        console.log('🔄 Component mounted');
        console.log('Hostname:', window.location.hostname);
        console.log('Protocol:', window.location.protocol);
        initGA();
    });

    // Trackear cambios de página
    $effect(() => {
        if (initialized && browser && window.gtag) {
            console.log('📄 Page changed:', $page.url.pathname);
            window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
                page_path: $page.url.pathname
            });
        }
    });
</script>