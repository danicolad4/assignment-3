/* const cart = 
const sizeSelector = document.getElementById('selectSize');
const selectedSize = showAlert.value;

function selectSize(showAlert) {
    var select = document.getElementById('selectSize');

    if (showAlert.value == '')
        alert('You need to select a size before adding to cart');
        return;
}

function addToCart(productName, productPrice)
*/

function getSize() {
    let select = document.getElementById('selectSize');

    if (select.value == 'select') {
        alert('Pick a size pls');
    }
    
    return select.value;
}

