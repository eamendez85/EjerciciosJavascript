let input=document.getElementById("input");
let btn=document.getElementById("btn");
let alert=document.getElementById("alert");
let card=document.getElementById("card_container");
let nameContainer=document.getElementById("name_container");
let welcome=document.getElementById("welcome");
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

        card.style.cssText = "display: flex;align-items: center;justify-content: center;flex-direction: column;width: 80%;height: 80%;box-shadow: 0px 0px 5px 1px black;margin: auto";
        nameContainer.style.cssText = "width: 230px;height: 230px;border-radius: 50%;box-shadow: 0px 2px 3px 1px black;display: flex;align-items: center;justify-content: center";
        userName.style.cssText = "font-size: 20px";
        welcome.textContent = "Welcome to the system";
        welcome.style.cssText = "margin-top: 15px;font-size: x-large;font-weight: bold";
        userName.textContent=input.value;
    }
    else{
        e.preventDefault();
    }
}