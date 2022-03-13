//Set focus to first text field when page loads
document.getElementById('name').focus();

//Set "other job role" text field to only appear when selected
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
document.getElementById('title').addEventListener('change', (e) => {
    if (e.target.value === 'other') {
      otherJobRole.style.display = 'block';
    } else {
      otherJobRole.style.display = 'none';
    }
});

// Tshirt info section
const designColorMenu = document.getElementById('color');
const designThemeMenu= document.getElementById('design');
const jsPunsDesignColors = document.querySelectorAll('option[data-theme="js puns"]')
const heartJsDesignColors = document.querySelectorAll('option[data-theme="heart js"]')
designColorMenu.disabled = true;

//Update tshirt color options according to users selected tshirt design option
designThemeMenu.addEventListener('change', (e) => {
    designColorMenu.disabled = false;
    if (e.target.value === 'js puns') {
        for (let i = 0; i < jsPunsDesignColors.length; i++) {
            jsPunsDesignColors[i].selected = true;
            jsPunsDesignColors[i].hidden = false;
            heartJsDesignColors[i].hidden = true;
        }
    }else if (e.target.value === 'heart js') {
        for (let i = 0; i < heartJsDesignColors.length; i++) {
            heartJsDesignColors[i].selected = true;
            heartJsDesignColors[i].hidden = false;
            jsPunsDesignColors[i].hidden = true;
        }
    }
});

//Register for activities section
const events = document.getElementById('activities');
const totalCost = document.getElementById('activities-cost');
let subTotal = 0;

events.addEventListener('change', (e) => {
    if (e.target.checked === true) {
        let eventPrice = parseInt(e.target.getAttribute('data-cost'));
        subTotal = subTotal + eventPrice;
        totalCost.textContent = `Total: $${subTotal}`;
    }else if (e.target.checked === false) {
        let eventPrice = parseInt(e.target.getAttribute('data-cost'));
        subTotal = subTotal - eventPrice;
        totalCost.textContent = `Total: $${subTotal}`;
    }
})

//Payment info section
const paymentOptions = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const paypal = document.getElementById('paypal');
//select credit card option by default
paymentOptions[1].selected = true;
bitcoin.style.display = 'none';
paypal.style.display = 'none';

paymentOptions.addEventListener('change', (e) => {
    if (e.target.value === 'credit-card') {
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';
    } else if (e.target.value === 'paypal') {
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (e.target.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
    }
})







