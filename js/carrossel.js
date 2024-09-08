
  
    document.addEventListener("DOMContentLoaded", function() {
        // Inicializar o Splide.js
        new Splide('#splide-carousel', {
            type    : 'loop',  // Loop infinito
            autoplay: true,    // Ativar autoplay
            interval: 5000,    // Intervalo de 3 segundos
            perPage : 1,       // Mostrar 1 slide por vez
            arrows  : true,    // Mostrar setas de navegação
            pagination: true,  // Mostrar indicadores (bolinhas)
        }).mount();
    }); 
