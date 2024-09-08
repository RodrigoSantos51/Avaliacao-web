// ação submenu


document.addEventListener('DOMContentLoaded', function() {
    var empresaLink = document.getElementById('empresa-link');
    var submenu = document.getElementById('submenu-empresa');

    empresaLink.addEventListener('mouseover', function() {
        submenu.classList.add('show');
    });

    empresaLink.addEventListener('mouseout', function() {
        submenu.classList.remove('show');
    });
    
    // Para garantir que o submenu não feche ao passar o mouse sobre ele
    submenu.addEventListener('mouseover', function() {
        submenu.classList.add('show');
    });

    submenu.addEventListener('mouseout', function() {
        submenu.classList.remove('show');
    });
});


