document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Obtener los elementos del formulario
    const campos = [
        {id: 'nombre', mensaje: 'Por favor, ingrese su nombre.'},
        {id: 'apellido', mensaje: 'Por favor, ingrese su apellido.'},
        {id: 'correo', mensaje: 'Por favor, ingrese su correo electrónico.'},
        {id: 'telefono', mensaje: 'Por favor, ingrese su teléfono.'},
        {id: 'sucursal', mensaje: 'Por favor, seleccione una sucursal.'},
        {id: 'servicio', mensaje: 'Por favor, seleccione un servicio.'},
        {id: 'consulta', mensaje: 'Por favor, ingrese su consulta.'}
    ];

    let formIsValid = true;

    // Limpiar mensajes de error previos
    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        input.classList.remove('error');
        document.getElementById(`error-${campo.id}`).textContent = '';
    });

    // Verificar cada campo
    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        if (input.value.trim() === '') {
            formIsValid = false;
            input.classList.add('error');
            document.getElementById(`error-${campo.id}`).textContent = campo.mensaje;
        }
    });

    if (!formIsValid) {
        event.preventDefault(); // Prevenir el envío del formulario
    }
});

const botonesSucursales = document.querySelectorAll("#botones-sucursales button");

botonesSucursales.forEach((element) => {
    element.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "Buenos Aires":
                document.querySelector("#bsas-map").style.display = "block";    
                document.querySelector("#corriente-map").style.display = "none";    
                document.querySelector("#santiago-map").style.display = "none";             
                break;
            case "Corrientes":
                document.querySelector("#corriente-map").style.display = "block";      
                document.querySelector("#santiago-map").style.display = "none"; 
                document.querySelector("#bsas-map").style.display = "none";  
                break;
            case "Santiago del Estero":
                document.querySelector("#santiago-map").style.display = "block";      
                document.querySelector("#bsas-map").style.display = "none";  
                document.querySelector("#corriente-map").style.display = "none"; 
                break;
            default:
                break;
        }
    });
});

console.log("Archivo cargado correctamente");
