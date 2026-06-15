// required products

const products = [
     {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95, img: "assets/pink_and_white_shoe.jpg"}, 
     {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95, img: "assets/blue_backpack.jpg"}
 ];

// add to cart

let cart = [];

function getSize() {
    let select = document.getElementById('selectSize');
    if (select.value == 'select') {
        alert('Please select a size');
    }
    return select.value;
}

function addToCart(productId) {
    let product = {id: productId, size: getSize(), quantity: 1};
    if (product.size != 'select') {
        let existing = cart.find(({id, size}) => (id == product.id && size == product.size));
        if (existing) {
            existing.quantity++;
        } else {
            alert("Your product has been added!")
            cart.push(product);
        }
    }
    updateCart();
}

// product quantity cues

function minusQuantity(id, size) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id && cart[i].size == size) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
                break;
            } else if (cart[i].quantity == 1) {
                cart.splice(i, 1);
                break;
            }
        }
    }
    updateCart();
    displayCart();
}

function plusQuantity(id, size) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id && cart[i].size == size) {
            cart[i].quantity++;
            break;
        }
    }
    updateCart();
    displayCart();
}

function removeProduct(productId, size) {
    cart = cart.filter((product) => (product.id != productId || product.size != size));
    updateCart();
    displayCart();
}

// total price added up

function cartTotal() {
    let cartTotal = 0.0;
    cart.forEach((product) => {
        let extraInfo = products.find(({id}) => id == product.id);
        cartTotal += product.quantity * extraInfo.price;
    });
    return cartTotal;
}

// saving to local storage

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let currentCart = localStorage.getItem("cart");
    if (currentCart) {
        cart = JSON.parse(currentCart);
    }

    displayCart();
}

// after filling in payment details

function clearCart() {
    cart = [];
    updateCart();
}

// products shown in cart

function displayCart() {
    const displayedProductsEl = document.querySelector(".product-count");
    if (displayedProductsEl != null) {
        displayedProductsEl.innerHTML = '';
        cart.forEach((product) => {
            let extraInfo = products.find(({id}) => id == product.id);
            displayedProductsEl.insertAdjacentHTML("beforeend", `<div class="added-product">
                        <img src="${extraInfo.img}" alt="${extraInfo.name}">
                        <div class="product-info">
                            <span><h2>${extraInfo.name}</h2></span>
                            <h2>$${extraInfo.price}</h2>
                            <span><h2>Size: ${product.size}</h2></span>
                            <div class="quantity-cue">
                                <button id="decrease" onclick="minusQuantity(${product.id}, ${product.size})">-</button>
                                <h3 class="quantity">${product.quantity}</h3>
                                <button id="increase" onclick="plusQuantity(${product.id}, ${product.size})">+</button>
                            </div>
                        </div>
                        <div class="delete-product">
                            <img src="assets/trash-solid-full.svg" alt="Delete Product" onclick="removeProduct(${product.id}, '${product.size}')">
                        </div>
                    </div>
                <hr>
            `)  
        });
    }
    const totalPrice = document.querySelector(".total-price");
    if (totalPrice != null) {
        totalPrice.textContent = `$${cartTotal().toFixed(2)}`;
    }
}

    document.addEventListener("DOMContentLoaded", loadCart());