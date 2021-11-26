const main=document.querySelector("#main");
const btn_cart=document.getElementById('btn-cart');
const template_cart = document.getElementById('template-cart').content;
const tfoot = document.getElementById('tfoot');
const fragment = document.createDocumentFragment()
const items = document.getElementById('items');
let cart={};


//Evento cargar el local storage
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        renderItem();
    }
})

//Evento click en eliminar
items.addEventListener('click', deleteItem);


//Evento change en cantidad
items.addEventListener('change', changeQuantity);


//Evento comprar
tfoot.addEventListener('click', checkout);


//Crear cartas de los productos
const createCard = (id, title, price_product, img_product) => {

    const card = document.createElement("div");
    card.setAttribute("id", "card");
    card.addEventListener('click', addCart);
    const img=document.createElement("img");
    img.setAttribute("id", "product_img");
    img.setAttribute("src", img_product);
    img.setAttribute("alt", "Product");
    const product_title = document.createElement("h2");
    product_title.setAttribute("id", "product_title");
    product_title.textContent=title;
    const price=document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent=price_product;

    const button=document.createElement("button");
    button.setAttribute("id", id);
    button.classList.add('btn_add');
    button.textContent="Add to cart";

    card.appendChild(img);
    card.appendChild(product_title);
    card.appendChild(price);
    card.appendChild(button);

    main.appendChild(card);
}

//Renderizar las cartas de los productos
function renderCards(){
    products.forEach(product => {
        createCard(product.id, product.title, product.price, product.img);
    })
}
renderCards();


//SHOPPING CART

//Enviar item al carrito
function addCart(event){
    if(event.target.classList.contains('btn_add')){
        setCart(event.target.parentElement);
        document.getElementById('result').textContent = "";
    }
    event.stopPropagation();
}

//Agregar al carrito
function setCart(object){
    let product = {
        id : object.querySelector('.btn_add').id,
        title : object.querySelector('#product_title').textContent,
        price : object.querySelector('#price').textContent,
        img : object.querySelector('#product_img').src,
        quantity : 1
    }
    if (cart.hasOwnProperty(product.id)) {
        product.quantity=cart[product.id].quantity + 1;
    }
    cart[product.id]={...product};
    renderItem();
}

//Renderizar producto en el carrito
function renderItem(){

    items.innerHTML='';
    Object.values(cart).forEach( item => {
        template_cart.querySelector('#id-cart').textContent = item.id;
        template_cart.querySelector('img').src = item.img;
        template_cart.querySelector('#name-cart').textContent = item.title;
        template_cart.querySelector('#price-cart').textContent = item.price;
        template_cart.querySelector('input').value = item.quantity;
        template_cart.querySelector('input').setAttribute('id', item.id)
        template_cart.querySelector('.delete').setAttribute('id', item.id);
        template_cart.querySelector('#total-cart').textContent = item.price * item.quantity;

        const clone = template_cart.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    localStorage.setItem('cart', JSON.stringify(cart));
    totalPrice();
}

//Eliminar producto
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        delete cart[e.target.id];
        renderItem();
    }
    e.stopPropagation();
}

//Cambiar cantidad de producto en carrito
function changeQuantity(e){
    if(e.target.classList.contains('quantity-cart')){
        cart[e.target.id].quantity = e.target.value;
    }
    if(e.target.value<=0){
        delete cart[e.target.id];
    }
    renderItem();
}

//Total price
function totalPrice(){
    let count=0;
    let quantities = items.querySelectorAll('#total-cart');
    quantities.forEach( price => {
        count += parseFloat(price.textContent);
    })
    tfoot.querySelector('#total-price').textContent = count;
}

//REalizar compra
function checkout(e){
    if(e.target.classList.contains('checkout')){
        cart={};
        renderItem();
        document.getElementById('result').textContent = "Purchase successful!";
    }
}