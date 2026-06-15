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
    if (getYear == "" || getYear < 26) {
        alert("Please enter a valid 'Year'")
        return false;
    }

    let getCvc = document.forms["checkout-form"]["cvc"].value;
    if (getCvc.length != 3) {
        alert("Please enter a valid 'CVC'");
        return false;
    }

    clearCart();
    return true;
}