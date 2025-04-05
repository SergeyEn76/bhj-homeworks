let cart = document.querySelector('.cart__products');
let cartProducts = Array.from(document.querySelectorAll('.cart__product'));
let productsIDarray = Array.from(document.querySelectorAll('[data-id]'));

for (let i = 0; i < productsIDarray.length; i++) {
    let iD = productsIDarray[i].getAttribute('data-id');
    let prodDec = productsIDarray[i].querySelector('.product__quantity-control_dec');
    let prodInc = productsIDarray[i].querySelector('.product__quantity-control_inc');
    let prodValue = productsIDarray[i].querySelector('.product__quantity-value');
    let cartAdd = productsIDarray[i].querySelector('.product__add');
    
    //увеличения количества товара
    prodInc.addEventListener('click', () => {
        let inc = parseInt(prodValue.textContent);
        inc++;
        prodValue.textContent = inc;
    });

    //уменьшения количества товара
    prodDec.addEventListener('click', () => {
        let dec = parseInt(prodValue.textContent);
        dec--;
        if (dec < 1) {
            dec = 1;
        }
        prodValue.textContent = dec;
    });

    //добавление товара в корзину
    cartAdd.addEventListener('click', () => {
        const productInCart = cartProducts.find((element) =>
            element.getAttribute('data-id') === iD
        );

        let prodID = parseInt(iD);
        let prodIMG = productsIDarray[i].querySelector('.product__image').src;
        let proddValue = parseInt(prodValue.textContent); 

        if (productInCart) {
            let currentValue = productInCart.querySelector('.cart__product-count').textContent;
            productInCart.querySelector('.cart__product-count').textContent = parseInt(currentValue) + proddValue;
            cartProducts = Array.from(document.querySelectorAll('.cart__product'));

        } else {
            cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${prodID}"><img class="cart__product-image" src="${prodIMG}"><div class="cart__product-count">${proddValue}</div></div>`);
            cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        }
   })
}