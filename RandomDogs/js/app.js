const URL = "https://dog.ceo/api/breeds/image/random";
const main_cards = document.querySelector('#main-cards');
const card_template = document.querySelector('#card-template').content;
let fragment = document.createDocumentFragment();
let accountant = 0;

const button1 = document.getElementById('1');
const button3 = document.getElementById('3');
const button9 = document.getElementById('9');
const button12 = document.getElementById('12');
const input = document.getElementById('input');

button1.addEventListener('click', () => {
    accountant=1;
    generateCard();
})
button3.addEventListener('click', () => {
    accountant=3;
    generateCard();
})
button9.addEventListener('click', () => {
    accountant=9;
    generateCard();
})
button12.addEventListener('click', () => {
    accountant=12;
    generateCard();
})
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        accountant=input.value;
        generateCard();
    }
})

function generateCard(){
    main_cards.innerHTML="";
    for (let index = 0; index < accountant; index++) {
        fetchApi()
    }
}
function fetchApi(){
    fetch(URL)
    .then(response => response.json())
    .then(object => {
        renderCard(object.message);
    })
}

function renderCard(img){
    let clone_template = document.importNode(card_template, true);
    clone_template.querySelector('img').src = img;

    fragment.appendChild(clone_template);
    main_cards.appendChild(fragment);
}