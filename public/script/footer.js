// Mostrar el botón de "Volver arriba" cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll suave hacia arriba
document.getElementById('backToTopBtn').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Modal de suscripción
var modal = document.getElementById('subscribeModal');
var btn = document.getElementById('subscribeBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
