// Script para la rotación automática de pestañas
const tabs = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
let currentTab = 0;
let interval;

function showTab(index) {
    // Oculta todas las pestañas
    tabPanes.forEach(pane => pane.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Muestra la pestaña seleccionada
    tabPanes[index].classList.add('active');
    tabs[index].classList.add('active');

    // Reinicia la animación de la barra de progreso
    const progressBar = tabs[index].querySelector('.progress-bar');
    progressBar.style.width = '0';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 10);
}

function nextTab() {
    currentTab = (currentTab + 1) % tabs.length;
    showTab(currentTab);
}

// Inicia la rotación automática
function startRotation() {
    interval = setInterval(nextTab, 5000); // Cambia cada 5 segundos
}

// Detiene la rotación automática
function stopRotation() {
    clearInterval(interval);
}

// Eventos para los botones de pestaña
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        stopRotation();
        showTab(index);
        startRotation();
    });
});

// Inicia la rotación automática al cargar la página
startRotation();

