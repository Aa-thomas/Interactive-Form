//Set focus to first text field when page loads
document.querySelector('#name').focus();

//Set "other job role" text field to only appear when selected
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';
document.querySelector('#title').addEventListener('change', (e) => {
    if (e.target.value === 'other') {
      otherJobRole.style.display = 'block';
    } else {
      otherJobRole.style.display = 'none';
    }
})

// Tshirt info section
const designColorMenu = document.querySelector('#color');
const designThemeMenu= document.querySelector('#design');
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
const activities = document.querySelector('#activities');
const totalCost = document.querySelector('#activities-cost');
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
const paymentOptions = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const bitcoin = document.querySelector('#bitcoin');
const paypal = document.querySelector('#paypal');
    
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
const activitiesElement = document.querySelector('#activities')
const cardNumberElement = document.querySelector('#cc-num');
const zipCodeElement = document.querySelector('#zip');
const cvvCodeElement = document.querySelector('#cvv');

    
    function nameValidator() {
        const  nameValue = nameElement.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        if (nameIsValid === false) {
            nameElement.parentElement.classList.add('not-valid');
            nameElement.parentElement.classList.remove('valid');
            document.querySelector('#name-hint').display = 'block';
            console.log('nameValidator failed');
        } else {
            nameElement.parentElement.classList.add('valid');
            nameElement.parentElement.classList.remove('not-valid');
            document.querySelector('#name-hint').display = 'none';
        }
        return nameIsValid;
    }

    function emailValidator() {
        const emailValue = emailElement.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
        if (emailIsValid === false) {
            emailElement.parentElement.classList.add('not-valid');
            emailElement.parentElement.classList.remove('valid');
            document.querySelector('#email-hint').display = 'block';
            console.log('emailValidator failed');
        } else {
            emailElement.parentElement.classList.add('valid');
            emailElement.parentElement.classList.remove('not-valid');
            document.querySelector('#email-hint').display = 'none';
        }
        return emailIsValid
    }

    function activityValidator() {
        const activitySectionIsValid = subTotal > 0;
        if (activitySectionIsValid === false) {
            activitiesElement.classList.add('not-valid');
            activitiesElement.classList.remove('valid');
            document.querySelector('#activities-hint').display = 'block';
            console.log('activityValidator failed');
        } else {
            activitiesElement.classList.add('valid');
            activitiesElement.classList.remove('not-valid');
            document.querySelector('#activities-hint').display = 'none';
        }
        return activitySectionIsValid;
    }

    
    
    function creditCardValidator() {
        const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberElement.value);
        const zipCodeIsValid = /^\d{5}$/.test(zipCodeElement.value);
        const cvvIsValid = /^\d{3}$/.test(cvvCodeElement.value);
        
        if (cardNumberIsValid === true) {
            cardNumberElement.parentElement.classList.add('valid');
            cardNumberElement.parentElement.classList.remove('not-valid');
            document.querySelector('#cc-hint').display = 'none';
        } else {
            cardNumberElement.parentElement.classList.add('not-valid');
            cardNumberElement.parentElement.classList.remove('valid');
            document.querySelector('#cc-hint').display = 'block';
        }
        if (zipCodeIsValid === true) {
            zipCodeElement.parentElement.classList.add('valid');
            zipCodeElement.parentElement.classList.remove('not-valid');
            document.querySelector('#zip-hint').display = 'none';
        } else {
            zipCodeElement.parentElement.classList.add('not-valid');
            zipCodeElement.parentElement.classList.remove('valid');
            document.querySelector('#zip-hint').display = 'block';
        }   
        if (cvvIsValid === true) {
            cvvCodeElement.parentElement.classList.add('valid');
            cvvCodeElement.parentElement.classList.remove('not-valid');
            document.querySelector('#cvv-hint').display = 'none';
        } else {
            cvvCodeElement.parentElement.classList.add('not-valid');
            cvvCodeElement.parentElement.classList.remove('valid');
            document.querySelector('#cvv-hint').display = 'block';
        }     
        
        if (cardNumberIsValid && zipCodeIsValid && cvvIsValid === true) {
            return true;
        } else {
            console.log('cc failure');
            return false;
        }            
    } 
    document.querySelector('#credit-card').addEventListener('keyup',(e) => {
        creditCardValidator();
    })

    function validateAll() {
        nameValidator();
        emailValidator();
        activityValidator();
    }

    document.querySelector('form').addEventListener('submit', (e) => {
        if (!nameValidator() || !emailValidator() || activityValidator() === false) {
            e.preventDefault();
            validateAll();
        }  
        if (paymentOptions.querySelector('[value="credit-card"]').selected === true) {
            if (creditCardValidator() === false) {
                e.preventDefault();
                creditCardValidator()
            }
        }
    })

//Accessibility section
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focus');
    })
    checkboxes[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    })
}