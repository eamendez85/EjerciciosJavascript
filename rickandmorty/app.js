const URL = "https://rickandmortyapi.com/api/character";
const main = document.querySelector('main');
const card_template = document.querySelector('#card-template').content;
let fragment = document.createDocumentFragment();
const main_card = document.querySelector('.main-card');
const text_container = document.querySelector('.text-container');
const img_container = document.querySelector('.img-container');

fetchApi();

function createCard(character){
    let clone_template = document.importNode(card_template, true);
    clone_template.querySelector('.name').textContent = character.name;
    clone_template.querySelector('.specie').textContent = character.species;
    clone_template.querySelector('.gender').textContent = character.gender;
    clone_template.querySelector('.img').src = character.image;

    fragment.appendChild(clone_template);
    main_card.appendChild(fragment);
}


function fetchApi(){
    fetch(URL)
    .then(response => response.json())
    .then(json => {
        generateCharacter(json.results);
        console.log(json)
    })
}

function generateCharacter(results){
    results.forEach(character => {
        createCard(character);
    })
}