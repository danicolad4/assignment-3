// cart interactivity

const products = [
     {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95, img: "assets/main_tennis_product.jpg"}, 
     {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95, img: "assets/main_bags_product.jpg"}
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
        cart.push(product);
    }
    updateCart();
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

// products shown in cart

function displayCart() {
    const displayedProductsEl = document.querySelector(".product-count");
    cart.forEach((product) => {
        let extraInfo = products.find(({id}) => id == product.id);
        displayedProductsEl.insertAdjacentHTML("beforeend", `<div class="added-product">
                    <img src="${extraInfo.img}" alt="${extraInfo.name}">
                    <div class="product-info">
                        <span><h2>${extraInfo.name}</h2></span>
                        <h2>$${extraInfo.price}</h2>
                        <span><h2>Size: ${product.size}</h2></span>
                        <div class="quantity-cue">
                            <button id="decrease">-</button>
                            <h3 class="quantity">${product.quantity}</h3>
                            <button id="increase">+</button>
                        </div>
                    </div>
                    <div class="delete-product">
                        <img src="assets/trash-solid-full.svg" alt="Delete Product">
                    </div>
                </div>
            <hr>
        `)  
    });
}

document.addEventListener("DOMContentLoaded", loadCart());


// form validation

function getValidation() {
    let firstName = document.forms["checkout-form"]["fname"].value;
    if (firstName == "") {
        alert("Please fill in your 'First Name'");
        return false;
    }

    let lastName = document.forms["checkout-form"]["lname"].value;
    if (lastName == "") {
        alert("Please fill in your 'Last Name'");
        return false;
    } 

    let phoneNum = document.forms["checkout-form"]["pnumber"].value;
    if (phoneNum.length != 10) {
        alert("Please enter a valid 'Phone Number'");
        return false;
    }

    let getEmail = document.forms["checkout-form"]["email"].value;
    if (!getEmail.includes("@") || !getEmail.includes(".")) {
        alert("Please enter a valid 'Email'");
        return false;
    } 

    let getAddress = document.forms["checkout-form"]["address"].value;
    if (getAddress == "") {
        alert("Please fill in your 'Address'");
        return false;
    } 

    let getState = document.getElementById("state");
    if (getState.value == "select") {
        alert("Please select a 'State'");
        return false;
    }

    let postalCode = document.forms["checkout-form"]["pcode"].value;
    if (postalCode.length != 4) {
        alert("Please enter a valid 'Postal Code'");
        return false;
    }

    let cardNum = document.forms["checkout-form"]["cnumber"].value;
    if (cardNum.length != 16) {
        alert("Please enter a valid 'Card Number'");
        return false;
    }

    let getMonth = document.forms["checkout-form"]["month"].value;
    if (getMonth == "" || getMonth > 12 || getMonth == 0) {
        alert("Please enter a valid 'Month'")
        return false;
    }

    let getYear = document.forms["checkout-form"]["year"].value;
    if (getYear == "" || getYear < 2026) {
        alert("Please enter a valid 'Year'")
        return false;
    }

    let getCvc = document.forms["checkout-form"]["cvc"].value;
    if (getCvc.length != 3) {
        alert("Please enter a valid 'CVC'");
        return false;
    }
}