document.addEventListener('DOMContentLoaded', function () {
            // Contadores para estadísticas
            const counters = document.querySelectorAll('.counter');

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // Duración de la animación en ms
                const frameRate = 60; // Velocidad de actualización
                const increment = target / (duration / 1000 * frameRate);

                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.min(Math.round(current), target);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                // Iniciar el contador cuando el elemento sea visible
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });

                observer.observe(counter);
            });
        });