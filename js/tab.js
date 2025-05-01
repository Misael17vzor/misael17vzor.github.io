// Script para cambiar las pestañas
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover la clase "active" de todos los botones y paneles
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Agregar la clase "active" al botón y panel seleccionado
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        // Resetear el ancho de todas las progress-bars
        tabButtons.forEach(btn => {
            btn.querySelector('.progress-bar').style.width = '0';
        });

        // Cambiar el ancho de la progress-bar activa
        button.querySelector('.progress-bar').style.width = '100%';
    });
});
