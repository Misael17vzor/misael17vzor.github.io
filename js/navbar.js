// Scroll suave para los enlaces del menú que son anclas en la misma página
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href'); // Obtiene el href del enlace

        // Solo aplica el scroll suave si el enlace es un ancla en la misma página
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Evita el comportamiento predeterminado solo para anclas
            const targetSection = document.querySelector(targetId); // Encuentra la sección
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Scroll suave
                    block: 'start' // Alinea la sección en la parte superior
                });
            }
        }
        // Si el enlace lleva a otra página, el comportamiento predeterminado se mantiene
    });
});

// Script para el menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav ul li a');

// Abrir/cerrar el menú al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Animación del ícono
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active'); // Cierra el menú
        menuToggle.classList.remove('active'); // Restaura el ícono
    });
});