let boton=document.getElementById("boton");
let contenedor=document.getElementById("contenedor_color");
boton.addEventListener("click", cambiarColor);



function generarValor(){
    let valores = ["a", "b", "c", "d", "e", "f", "0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
    let numero = ((Math.random()*(15 - 0))+0).toFixed(0);
    return valores[numero];
}

function generarColor(){
    let color="";
    for (let i=0; i < 6; i++) {
        color = color + generarValor();
    }
    return "#" + color
}

function cambiarColor(){
    contenedor.style.background = generarColor();
}