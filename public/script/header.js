document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de menú y los menús correspondientes
    const toggleMenus = document.querySelectorAll('.toggle-menu');
    const menus = document.querySelectorAll('.nav');

    toggleMenus.forEach((toggleMenu, index) => {
        toggleMenu.addEventListener('click', () => {
            // Alternar la clase 'active' en el menú correspondiente
            menus[index].classList.toggle('active');
        });
    });
});