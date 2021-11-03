const main=document.querySelector("main");
let limit=15;

const createCard = () => {

    const card = document.createElement("div");
    card.setAttribute("id", "card");
    const img=document.createElement("img");
    img.setAttribute("id", "product_img");
    img.setAttribute("src", "img/product.png");
    img.setAttribute("alt", "Product");
    const product_title = document.createElement("h2");
    product_title.setAttribute("id", "product_title");
    product_title.textContent="Producto 1";
    const price=document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent="$100";
    const button=document.createElement("button");
    button.setAttribute("id", "btn_add");
    button.textContent="Add to cart";

    card.appendChild(img);
    card.appendChild(product_title);
    card.appendChild(price);
    card.appendChild(button);

    main.appendChild(card);
}

function renderCards(){
    for (let index = 0; index < limit; index++) {
        createCard();
    }
}

renderCards();