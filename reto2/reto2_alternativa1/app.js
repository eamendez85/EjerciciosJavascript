let input=document.getElementById("input");
let btn=document.getElementById("btn");
let alert=document.getElementById("alert");
let card=document.getElementById("card_container");
let userName=document.getElementById("name");
let validated=false;

let allowed=/^[a-zA-Z0-9\.\ ]{1,30}$/;

input.addEventListener("keyup", validate);
btn.addEventListener("click", generateCard);


function validate(){
    if (allowed.test(input.value)) {
        alert.textContent="Valid user";
        alert.style.color="#1da330";
        validated=true;
    }
    else{
        alert.style.color="#c31002";
        alert.textContent="Sorry, only letters (a-z), numbers (0-9) and periods (.) are allowed.";
        validated=false;
    }
}

function generateCard(e){
    if (validated) {
        card.style.visibility="visible";
        userName.textContent=input.value;
    }
    else{
        e.preventDefault();
    }
}