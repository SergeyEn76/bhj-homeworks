let cart = document.querySelector('.cart__products');
let cartProducts = Array.from(document.querySelectorAll('.cart__product'));
let products = document.querySelector('.products');
let productsTypes = Array.from(document.querySelectorAll('.product')).length;
let t1 = Array.from(document.querySelectorAll('[data-id]'));


function addToCard(addID, prodIMG, prodValue) {
    let t3 = 0;
    for (let element of cartProducts) {
        let checkId = element.getAttribute('data-id');
        if (parseInt(checkId) === parseInt(addID)) {
            t3 = checkId;
        } else {
            
        }
    }
    if (t3 === 0) {
        cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${addID}"><img class="cart__product-image" src="${prodIMG}"><div class="cart__product-count">${prodValue}</div></div>`);
        cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        t3=0;
    } else if (t3 > 0) {
        let t2 = cartProducts[t3-1].querySelector('.cart__product-count').textContent;
        cartProducts[t3-1].querySelector('.cart__product-count').textContent = parseInt(t2) + parseInt(prodValue);
        cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        t3=0;
    }
}

for (let i = 0; i < t1.length; i++) {
    let iD = t1[i].getAttribute('data-id');
    let tDec = t1[i].querySelector('.product__quantity-control_dec');
    let tInc = t1[i].querySelector('.product__quantity-control_inc');
    let tvalue = t1[i].querySelector('.product__quantity-value');
    let cartAdd = t1[i].querySelector('.product__add');
    
    tInc.addEventListener('click', () => {
        let inc = parseInt(tvalue.textContent);
        inc++;
        tvalue.textContent = inc;
    });

    tDec.addEventListener('click', () => {
        let inc = parseInt(tvalue.textContent);
        inc--;
        if (inc < 1) {
            inc = 1;
        }
        tvalue.textContent = inc;
    });

    cartAdd.addEventListener('click', () => {
        let prodID = parseInt(iD);
        let prodIMG = t1[i].querySelector('.product__image').src;
        let prodValue = parseInt(tvalue.textContent);

        addToCard(prodID, prodIMG, prodValue);
    })
}