const nota1=document.getElementById("n1");
const nota2=document.getElementById("n2");
const resultado=document.getElementById("resultado");

const calculo=document.querySelector('#calcular');

calculo.addEventListener("click", calcular);

function calcular(){
    let n1=parseFloat(nota1.value) * 0.25;
    let n2=parseFloat(nota2.value)* 0.35;

    let suma= n1 + n2;
    let resta=3.5-suma;
    let op=resta/0.4;

    if (op>5) {
        resultado.textContent=`Su promedio es ${suma.toFixed(2)}. No alcanza a pasar`;
    }
    else{
        resultado.textContent=`Su promedio es ${suma.toFixed(2) }. La nota minima que necesita es: ${op.toFixed(2)}`;
    }
}