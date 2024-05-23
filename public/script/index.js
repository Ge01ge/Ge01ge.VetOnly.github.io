document.addEventListener("DOMContentLoaded", function() {

    const primeraCarga = sessionStorage.getItem("popup")
   
    if(primeraCarga != "true"){
        formularioDeInicio();
        sessionStorage.setItem("popup", true)
    }
});


function cerrarFormulario() {
    const form = document.querySelector(".formulario-registro")
    const overlay = document.querySelector(".overlay")
    const body = document.querySelector("body")
    body.removeChild(form)
    body.removeChild(overlay)
    body.style.overflow = "auto"
}


function formularioDeInicio(){
   
    const body = document.querySelector("body")
    const formulario = document.createElement("div")
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    formulario.classList.add("formulario-registro")

    formulario.innerHTML = `
    <div class="contenido-formulario" >
    <!-- Imagen de mascota a la izquierda -->
    <div class="imagen-mascota">
        <img src="./img/imagenes/imagenpopupregistro.webp" alt="Mascota" height="200" width="150">
    </div>
    <!-- Mensaje a la derecha -->
    <div class="mensaje">
        <h1 class="pacifico-regular animate__animated animate__jello">¡Subscribite a nuestro sitio!</h1>
        <h4 class="pacifico-regular">Para estar al dia con las novedades que tenemos para vos</h4>
    </div>
</div>
<form  >
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" required style="margin-left: 10px;">
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" required style="margin-left: 10px;">
    <div class="botones">
        <button type="submit">Registrarme</button>
        <button type="button" onclick="cerrarFormulario()">Cerrar</button>
    </div>
</form>
`


body.appendChild(formulario)
body.appendChild(overlay)
body.style.overflow = "hidden"

}