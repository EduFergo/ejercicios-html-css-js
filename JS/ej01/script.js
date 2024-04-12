let button = document.querySelector("button");

function hola_mundo(){
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "Hola Mundo!";
}

button.addEventListener("click", hola_mundo);
