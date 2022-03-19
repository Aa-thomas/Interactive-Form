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
})

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
    })

//Register for activities section
const activities = document.getElementById('activities');
const totalCost = document.getElementById('activities-cost');
let subTotal = 0;

    activities.addEventListener('change', (e) => {
        if (e.target.checked === true) {
            let activityCost = parseInt(e.target.getAttribute('data-cost'));
            subTotal = subTotal + activityCost;
            totalCost.textContent = `Total: $${subTotal}`;
        }else if (e.target.checked === false) {
            let activityCost = parseInt(e.target.getAttribute('data-cost'));
            subTotal = subTotal - activityCost;
            totalCost.textContent = `Total: $${subTotal}`;
        }
    })

//Payment info section
const paymentOptions = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const paypal = document.getElementById('paypal');
    
    paymentOptions.querySelector('[value="credit-card"]').selected = true;
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

//Form Validation Section
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const cardNumberElement = document.querySelector('#cc-num');
const zipCodeElement = document.querySelector('#zip');
const cvvCodeElement = document.querySelector('#cvv');

    
    function nameValidator() {
        const  nameValue = nameElement.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        if (nameIsValid === false) {
            console.log('nameValidator failed');
        }
        return nameIsValid;
    }

    function emailValidator() {
        const emailValue = emailElement.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
        if (emailIsValid === false) {
            console.log('emailValidator failed');
        }
        return emailIsValid
    }

    function activityValidator() {
        const activitySectionIsValid = subTotal > 0;
        if (activitySectionIsValid === false) {
            console.log('activityValidator failed');
        }
        return activitySectionIsValid;
    }

    
    
        function creditCardValidator() {
            const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberElement.value);
            const zipCodeIsValid = /^\d{5}$/.test(zipCodeElement.value);
            const cvvIsValid = /^\d{3}$/.test(cvvCodeElement.value);
            if (cardNumberIsValid && zipCodeIsValid && cvvIsValid === true) {
                return true;
            } else {
                console.log('creditCardValidator failed')
                return false;
            }               
        } 

    document.querySelector('form').addEventListener('submit', (e) => {
        if (!nameValidator() || !emailValidator() || activityValidator() === false) {
            e.preventDefault();
            console.log('failure1')
        }  
        if (paymentOptions.querySelector('[value="credit-card"]').selected === true) {
            if (creditCardValidator() === false) {
                e.preventDefault();
                console.log('failure2')
            }
        }
    })
