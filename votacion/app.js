const nameUser=document.getElementById ("name");
const ageUser=document.getElementById("age");

const enviar=document.querySelector('#btn');
enviar.addEventListener("click", calcular);
const result=document.getElementById("result");

function calcular(){
    let name1 = nameUser.value;
    let age1=parseInt(ageUser.value);
    if (age1>=18) {
        result.textContent=`${name1} puede votar`;
    }
    else{
        result.textContent=`${name1} no pude votar`;
    }
}