const nombre=document.getElementById("nombre");
const fec_naciemiento=document.getElementById("fec_nacimiento");
const resultado=document.getElementById("resultado");

const calcular=document.querySelector("#btn-calcular");
calcular.addEventListener("click", calcular_funcion);


function calcular_funcion(){
    let nom=nombre.value;
    let fec=fec_naciemiento.value;

    let fecha=fec.split("-");

    let fecha_actual= new Date();
    let año_actual=fecha_actual.getFullYear();
    let mes_actual=fecha_actual.getMonth()+1;
    let dia_actual=fecha_actual.getDate();

    let años=año_actual-fecha[0];
    let meses=mes_actual-fecha[1];
    let dias=dia_actual-fecha[2];

    if ((años > 18) || (años===18 && meses>0) || (años===18 && meses===0 && dias>=0)) {
        
        resultado.textContent=`${nom} es mayor de edad`;
    }
    else{
        resultado.textContent=`${nom} es menor de edad`;
    }


    /*(años > 18) || (años===18 && meses>0) || (años===18 && meses===0 && dias>=0) */ 
}
