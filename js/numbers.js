// Función para animar los números
function animateNumbers() {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Velocidad de la animación (en milisegundos)

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Obtiene el valor final
        const increment = target / speed; // Calcula el incremento por paso

        const updateCount = () => {
            const current = +counter.innerText; // Obtiene el valor actual
            if (current < target) {
                counter.innerText = Math.ceil(current + increment); // Incrementa el valor
                setTimeout(updateCount, 1); // Llama a la función de nuevo
            } else {
                counter.innerText = target; // Asegura que el valor final sea exacto
            }
        };

        updateCount(); // Inicia la animación
    });
}

// Ejecuta la animación cuando la sección esté visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect(); // Detiene la observación después de ejecutar la animación
        }
    });
});

observer.observe(document.querySelector('.numbers-section'));

// Add this to your existing numbers.js file or create a new one
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate counters
    function animateStatsCounters() {
        const counters = document.querySelectorAll('.stats-number .count');
        const speed = 200; // Animation speed
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;
            let currentCount = 0;
            
            const updateCount = () => {
                if (currentCount < target) {
                    currentCount += increment;
                    counter.textContent = Math.floor(currentCount);
                    setTimeout(updateCount, 1);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCount();
        });
    }
    
    // Trigger animation when scrolled into view
    const whyChooseUsSection = document.querySelector('.why-choose-us-section');
    
    function checkScroll() {
        if (whyChooseUsSection && isInViewport(whyChooseUsSection)) {
            animateStatsCounters();
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initially in case section is already in view
});