document.addEventListener("DOMContentLoaded", function () {
  // Tabs MVV (Misión, Visión, Valores)
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanes = document.querySelectorAll(".tab-pane");
    let currentTabIndex = 0;

    function showTab(index) {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("active"));

        tabButtons[index].classList.add("active");
        tabPanes[index].classList.add("active");

        // Reiniciar la animación de la barra de progreso
        const progressBar = tabButtons[index].querySelector(".progress-bar");
        progressBar.style.width = "0";
        setTimeout(() => {
        progressBar.style.width = "100%";
        }, 10);

        currentTabIndex = index;
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
        showTab(index);
        // Reiniciar el temporizador al hacer clic
        clearInterval(tabInterval);
        tabInterval = setInterval(rotateTabs,10000);
        });
    });

    function rotateTabs() {
        currentTabIndex = (currentTabIndex + 1) % tabButtons.length;
        showTab(currentTabIndex);
    }

    // Cambio automático de pestañas
    let tabInterval = setInterval(rotateTabs, 10000);
    });
