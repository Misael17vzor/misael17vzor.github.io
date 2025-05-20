document.addEventListener('DOMContentLoaded', function() {
    // Función para inicializar animaciones en un elemento
    function setupRevealAnimation(element) {
        if (!element.classList.contains('reveal-element')) {
            element.classList.add('reveal-element');
        }
        observer.observe(element);
    }

    // Observer más sensible para detectar elementos en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Anima el elemento principal
                entry.target.classList.add('revealed');
                
                // Anima los elementos hijos con efecto escalonado
                const children = entry.target.querySelectorAll('h1, h2, h3, p, .card, .product-card, .service-card, .feature-item, .testimonial-card, .about-image, .certification-item, img, .btn, .cta-button, ul, li, .tab-pane, .tab-button');
                
                children.forEach((child, index) => {
                    // Añade clase base si no la tiene
                    if (!child.classList.contains('reveal-element')) {
                        child.classList.add('reveal-element');
                    }
                    
                    // Calcula retraso (máximo 4 grupos)
                    const delayIndex = (index % 4) + 1;
                    const delayClass = `reveal-delay-${delayIndex}`;
                    
                    // Aplica la animación con ligero retraso inicial
                    setTimeout(() => {
                        child.classList.add('revealed', delayClass);
                    }, 50);
                });
                
                // Ya no necesitamos observar este elemento
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Elemento visible al 10%
        rootMargin: '0px 0px -50px 0px' // Dispara un poco antes de llegar al viewport completo
    });

    // Selecciona TODAS las secciones del sitio
    const allSections = document.querySelectorAll('section');
    
    // Inicializa animaciones para cada sección
    allSections.forEach(section => {
        setupRevealAnimation(section);
    });
    
    // Manejo adicional para elementos específicos que queremos animar
    const specificElements = document.querySelectorAll('.about-content, .certifications-section, .about-section, .mission-vision-values, .services-redesign, .why-choose-us-redesign, .testimonials-section, .video-section, .cta-banner, .contact-section, .products-intro, .products-grid, .clients-testimonials, .contact-cta');
    
    specificElements.forEach(element => {
        setupRevealAnimation(element);
    });
    
    // Manejo especial para cambio de pestañas
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            // Encuentra el contenido de la pestaña
            const tabId = this.getAttribute('data-tab');
            const tabPane = document.getElementById(tabId);
            
            if (tabPane) {
                // Reinicia las animaciones para los elementos de la pestaña
                const elements = tabPane.querySelectorAll('h2, p, img');
                elements.forEach((element, index) => {
                    // Resetea para nueva animación
                    element.classList.remove('revealed');
                    
                    // Aplica nueva animación
                    setTimeout(() => {
                        element.classList.add('revealed', `reveal-delay-${index + 1}`);
                    }, 50);
                });
            }
        });
    });
});