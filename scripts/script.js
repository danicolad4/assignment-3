// cart interactivity

const products = [
     {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95}, 
     {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95}
 ];
 localStorage.setItem("Product", JSON.stringify(products));

//const products = {
//    "rose-shoe": {id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95}, 
//    "pure-drive": {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95}
//};

// selecting elements
const getElement = document.querySelector("tbody tr")

function renderProducts() {
    products.forEach((product) => {
        getElement.innerHTML += `
        
        `
        // add the html of the product detail?
    })
}

let cart = [];

function getSize() {
    let select = document.getElementById('selectSize');
    if (select.value == 'select') {
        alert('Please select a size');
    }
    return select.value;
}

function getQuan() {
    let quantity = document.getElementById('chooseQuantity');
    if (quantity.value == '') {
        alert('Please select a quantity');
    }
}

function addToCart(productId) {
    let product = {id: productId, size: getSize(), quantity: 1};
    if (product.size != 'select') {
        cart.push(product);
    }
}

//function saveToCart(key) {
//    let cartList = localStorage.getItem("cartList") | []
//    localStorage.setItem("cartList", cartList.push(products.get(key)))
//}

products.get("rose-shoe")
products.get("pure-drive")


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

    // need to add date validation

    let getCvc = document.forms["checkout-form"]["cvc"].value;
    if (getCvc.length != 3) {
        alert("Please enter a valid 'CVC'");
        return false;
    }
}