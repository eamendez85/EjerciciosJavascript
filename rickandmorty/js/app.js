const URL = "https://rickandmortyapi.com/api/character";
const main = document.querySelector('main');
const option_template = document.querySelector('#option-template').content;
const select = document.querySelector('#select');
const card_template = document.querySelector('#card-template').content;
let fragment = document.createDocumentFragment();
const main_card = document.querySelector('.main-card');
const text_container = document.querySelector('.text-container');
const img_container = document.querySelector('.img-container');

fetchApi();
function fetchApi(){
    fetch(URL)
    .then(response => response.json())
    .then(json => {
        generateCharacter(json.results);
    })
}

function generateCharacter(object){
    
    object.forEach(character =>{
        let clone_option_template = document.importNode(option_template, true);
        clone_option_template.querySelector('.option').textContent = character.name;
        clone_option_template.querySelector('.option').setAttribute('id', character.id);
        clone_option_template.querySelector('.option').setAttribute('value', character.id);
        fragment.appendChild(clone_option_template);
    })
    select.appendChild(fragment);
    createCard(object);
    select.addEventListener('change', function(){
        createCard(object);
    })
}

function createCard(object){
    if (select.value==="all") {
        main_card.innerHTML="";
        object.forEach(character => {
            let clone_template = document.importNode(card_template, true);
            clone_template.querySelector('.name').textContent = character.name;
            clone_template.querySelector('.specie').textContent = "Species: "+character.species;
            clone_template.querySelector('.gender').textContent = "Gender: "+character.gender;
            clone_template.querySelector('.img').src = character.image;

            fragment.appendChild(clone_template);
        })
        main_card.appendChild(fragment);
    }else {
        main_card.innerHTML="";
        const characterSelected = object.filter(character => ""+character.id === select.value)

        let clone_template = document.importNode(card_template, true);
        clone_template.querySelector('.name').textContent = characterSelected[0].name;
        clone_template.querySelector('.specie').textContent = "Species: "+characterSelected[0].species;
        clone_template.querySelector('.gender').textContent = "Gender: "+characterSelected[0].gender;
        clone_template.querySelector('.img').src = characterSelected[0].image;

        fragment.appendChild(clone_template);
        main_card.appendChild(fragment);
    }
/*
    }if(seleccionar.value != "todos"){
        main_card.innerHTML=""
        const unidad = element.filter(element => element.name  === seleccionar.value)
        console.log(element.name)
            template_card.querySelector('.nombre').textContent=unidad[0].name
            template_card.querySelector('.imagen').src=unidad[0].image
            template_card.querySelector('.genero').textContent=unidad[0].gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
    }
    */

}

/*
//cepeda
function generateCharacter (character){
    character.forEach(element => {
        const opcion = document.createElement('option');
        opcion.setAttribute('value', element.name)
        opcion.classList.add('opcion')
        opcion.textContent=element.name
        fragment.appendChild(opcion);
    })
    seleccionar.appendChild(fragment);
    crearCard(character)
    seleccionar.addEventListener('change', function(){
        crearCard(character)
    })
}

const crearCard=element=> {
    if(seleccionar.value =="todos"){
        main_card.innerHTML=""
        element.forEach(element => {
            template_card.querySelector('.nombre').textContent=element.name
            template_card.querySelector('.imagen').src=element.image
            template_card.querySelector('.genero').textContent=element.gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
        })

    }if(seleccionar.value != "todos"){
        main_card.innerHTML=""
        const unidad = element.filter(element => element.name  === seleccionar.value)
        console.log(element.name)
            template_card.querySelector('.nombre').textContent=unidad[0].name
            template_card.querySelector('.imagen').src=unidad[0].image
            template_card.querySelector('.genero').textContent=unidad[0].gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
    }

}
















function renderSelectedCard(character){
    let clone_template = document.importNode(card_template, true);
    clone_template.querySelector('.name').textContent = character.name;
    clone_template.querySelector('.specie').textContent = character.species;
    clone_template.querySelector('.gender').textContent = character.gender;
    clone_template.querySelector('.img').src = character.image;

    fragment.appendChild(clone_template);
    main_card.appendChild(fragment);
}

function renderAllCards(character){
    let clone_template = document.importNode(card_template, true);
    clone_template.querySelector('.name').textContent = character.name;
    clone_template.querySelector('.specie').textContent = character.species;
    clone_template.querySelector('.gender').textContent = character.gender;
    clone_template.querySelector('.img').src = character.image;

    fragment.appendChild(clone_template);
    main_card.appendChild(fragment);
}
*/