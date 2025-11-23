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

            // Configuración inicial
            window.gtag('js', new Date());
            
            // Configuración con opciones de cookies explícitas
            window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
                page_path: window.location.pathname,
                cookie_domain: 'auto',  // ← Importante
                cookie_flags: 'SameSite=None;Secure',  // ← Para HTTPS
                cookie_expires: 63072000  // 2 años en segundos
            });

            console.log('✅ GA configurado');

            // Verificar cookies después de 3 segundos
            setTimeout(() => {
                const cookies = document.cookie;
                console.log('🍪 Cookies después de 3s:', cookies);
                
                if (!cookies || cookies.length === 0) {
                    console.error('❌ Las cookies NO se crearon');
                    console.log('Hostname:', window.location.hostname);
                    console.log('Protocol:', window.location.protocol);
                } else {
                    console.log('✅ Cookies creadas correctamente');
                }
            }, 3000);
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
            window.gtag('config', PUBLIC_GOOGLE_ANALYTICS_ID, {
                page_path: $page.url.pathname
            });
        }
    });
</script>