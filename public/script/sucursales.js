const botonesSucursales = document.querySelectorAll("#botones-sucursales button")

botonesSucursales.forEach((element)=>{


    element.addEventListener("click", (e)=>{


    switch(e.target.textContent){

        case "Buenos Aires":
            document.querySelector("#bsas-map").style.display = "block"    
            document.querySelector("#corriente-map").style.display = "none"    
            document.querySelector("#santiago-map").style.display = "none"             
        

            break;
        case "Corrientes":
            document.querySelector("#corriente-map").style.display = "block"      
            document.querySelector("#santiago-map").style.display = "none" 
            document.querySelector("#bsas-map").style.display = "none"  
            break
        case "Santiago del Estero":
            document.querySelector("#santiago-map").style.display = "block"      
            document.querySelector("#bsas-map").style.display = "none"  
            document.querySelector("#corriente-map").style.display = "none" 
            break
        default:
            break

    }

})


})