const main=document.querySelector("main");

const createCard = (id, title, price_product, img_product) => {

    const card = document.createElement("div");
    card.setAttribute("id", "card");
    const img=document.createElement("img");
    img.setAttribute("id", "product_img");
    img.setAttribute("src", img_product);
    img.setAttribute("alt", "Product");
    const product_title = document.createElement("h2");
    product_title.setAttribute("id", "product_title");
    product_title.textContent=title;
    const price=document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent="$"+price_product;
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
    products.forEach(product => {
        createCard(product.id, product.title, product.price, product.img);
    })
}

renderCards();