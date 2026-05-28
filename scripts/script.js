// cart interactivity

// const products = [
//     {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95}, 
//     {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95}
// ];
// localStorage.setItem("Product", JSON.stringify(products));

const products = {
    "asics": {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95}, 
    "babolat": {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95}
};

// changed from array to keys

function saveToCart(key) {
    const cartList = localStorage.getItem("cartList") | []
    localStorage.setItem("cartList", cartList.push(products.get(key)))

    getSize()
}

products.get("asics")

let cart = [];

function getSize() {
    let select = document.getElementById('selectSize');
    if (select.value == 'select') {
        alert('Please select a size');
    }
    return select.value;
}

function addToCart(productId) {
    let product = {id: productId, size: getSize(), quantity: 1 /* placeholder */};
    if (product.size != 'select') {
        cart.push(product);
    }
}

/* form validation */

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

    let email = document.forms["checkout-form"]["email"].value;
    if (email == "") {
        alert("Please enter a valid 'Email'");
        return false;
    }
    if (!email.contains("@") || !email.contains(".")) {
        alert("Please enter a valid 'Email'");
        return false;
    }

    let address = document.forms["checkout-form"]["address"].value;
    if (address == "") {
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

    /* need to add date validation */

    let getCvc = document.forms["checkout-form"]["cvc"].value;
    if (getCvc.length != 3) {
        alert("Please enter a valid 'CVC'");
        return false;
    }
}