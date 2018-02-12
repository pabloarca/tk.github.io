'use strict';

let cart = [];

let Item = function (name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
};

function addItemToCart(name, price, count) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            saveCart();
            return;
        }
    };
    let item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

function removeItemFromCart(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}

function removeItemFromCartAll(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
        }
        break;
    }
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function countCart() {
    let totalCount = 0;
    for (let i in cart) {
        totalCount += cart[i].count;
        return totalCount;
    }
}

function listCart() {
    let copyCart = [];
    for (let i in cart) {
        var newItem = new Item(cart[i].name, cart[i].price, cart[i].count);
        copyCart.total = (newItem.price * newItem.count).toFixed(2);
        copyCart.push(newItem);
    }
    return copyCart;
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
}

let item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
    item[i].querySelector('.add').addEventListener("click", function e() {
        let name = item[i].querySelector('.item_name').innerHTML;
        let price = item[i].querySelector('.price').innerHTML;
        addItemToCart(name, price, 1);
        displayCart();
    });
}

function displayCart() {
    let output = '';
    for (let i in cart) {
        output += '<div class="card card-body cartc">' + '<p>' +
            '<span id="' + cart[i].name + '">' + cart[i].name + '</span>' +
            '<button id="minus">-</button>' +
            ' ' + cart[i].count + ' шт.' +
            '<button id="plus">+</button>' +
            '<button id="delete">x</button>' +
            '</p>' + '</div>';
    };
    document.querySelector('.cart').innerHTML = output;
    document.querySelector('.total').innerHTML = totalCost();
}

function totalCost() {
    let totalCost = 0;
    for (let i in cart) {
        totalCost += cart[i].price * cart[i].count;
    }
    return totalCost.toFixed(2);
}

document.querySelector('.clear').addEventListener("click", function (event) {
    clearCart();
    displayCart();
});

document.addEventListener("click", function (event) {
    let cartc = document.querySelectorAll(".cartc");
    for (let i = 0; i < cartc.length; i++) {
        if (event.target.id === 'minus') {
            cartc[i].onclick = function () {
                let name = this.querySelector('span').innerHTML;
                removeItemFromCart(name);
                displayCart();
            }
        } else if (event.target.id === 'plus') {
            cartc[i].onclick = function () {
                let name = this.querySelector('span').innerHTML;
                addItemToCart(name, 0, 1);
                displayCart();
            }
        } else if (event.target.id === 'delete') {
            cartc[i].onclick = function () {
                let name = this.querySelector('span').innerHTML;
                removeItemFromCartAll(name);
                displayCart();
            }
        }
    }
});

// document.querySelector('.pay').addEventListener("click", function(event) {console.log('asdasdas');})

loadCart();
displayCart();




