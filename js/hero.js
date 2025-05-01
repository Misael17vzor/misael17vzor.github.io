// Scroll suave para los enlaces del menú
document.querySelectorAll('.hero a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = this.getAttribute('href'); // Obtiene el ID de la sección
        const targetSection = document.querySelector(targetId); // Encuentra la sección
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Scroll suave
                block: 'start' // Alinea la sección en la parte superior
            });
        }
    });
});

// Script para activar la animación cuando la sección Hero es visible
const heroSection = document.querySelector('.hero');
const textParts = document.querySelectorAll('.text-part');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            textParts.forEach(part => {
                part.style.opacity = 1; // Hace visible cada parte del texto
            });
        }
    });
}, { threshold: 0.5 }); // Activa la animación cuando el 50% de la sección es visible

observer.observe(heroSection);