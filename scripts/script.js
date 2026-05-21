const products = [{id: 1, name: "Asics Gel Dedicate 8 Rose Tennis Shoe", price: 139.95}, {id: 2, name: "Babolat Pure Drive 6 Pack 2025", price: 229.95}];

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
