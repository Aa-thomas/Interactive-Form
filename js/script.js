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
const jsFrameWorkshop = document.querySelector('[name="js-frameworks"]');
const jsLibsWorkshop = document.querySelector('[name="js-libs"]');
const buildToolsWorkshop = document.querySelector('[name="build-tools"]');
const nodeWorkshop = document.querySelector('[name="node"]');
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
        activityValidator();
    })

    //Conflicting times section
    activities.addEventListener('click', (e) => {
        if (e.target.name === 'js-libs') {
            jsFrameWorkshop.disabled = !jsFrameWorkshop.disabled;
        } 
        if (e.target.name === 'js-frameworks') {
            jsLibsWorkshop.disabled = !jsLibsWorkshop.disabled;
        }
        if (e.target.name === 'node') {
            buildToolsWorkshop.disabled = !buildToolsWorkshop.disabled;
        }
        if (e.target.name === 'build-tools') {
            nodeWorkshop.disabled = !nodeWorkshop.disabled;
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
        const nameHint = document.querySelector('#name-hint');
        if (nameIsValid) {
            nameElement.parentElement.classList.add('valid');
            nameElement.parentElement.classList.remove('not-valid');
            nameHint.style.display = 'none';
        } else {
            nameElement.parentElement.classList.add('not-valid');
            nameElement.parentElement.classList.remove('valid');
            nameHint.textContent = 'Name can only contain letters';
            console.log('nameValidator failed');
            if (nameValue === '') {
                nameHint.textContent = 'Name field cannot be blank'; 
            }
            nameHint.style.display = 'block';
        }
        return nameIsValid;
    }

    function emailValidator() {
        const emailValue = emailElement.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
        const emailHint = document.querySelector('#email-hint');
        
        if (emailIsValid) {
            emailElement.parentElement.classList.add('valid');
            emailElement.parentElement.classList.remove('not-valid');
            emailHint.style.display = 'none';  
        } else { 
            emailElement.parentElement.classList.add('not-valid');
            emailElement.parentElement.classList.remove('valid');
            emailHint.textContent = 'Email address must be formatted correctly';
            emailHint.style.display = 'block';
            console.log('emailValidator failed');
            if (emailValue === '') {
                emailHint.textContent = 'Email cannot be blank.';
            }
        }
        return emailIsValid
    }

    function activityValidator() {
        const activitySectionIsValid = subTotal > 0;
        const activitiesHint = document.querySelector('#activities-hint');

        
        if (activitySectionIsValid) {
            activitiesElement.classList.add('valid');
            activitiesElement.classList.remove('not-valid');
            activitiesHint.style.display = 'none';
        } else {
            activitiesElement.classList.add('not-valid');
            activitiesElement.classList.remove('valid');
            activitiesHint.style.display = 'block';
        }
        return activitySectionIsValid;
    }

    
    
    function creditCardValidator() {
        const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberElement.value);
        const cardNumberHint = document.querySelector('#cc-hint');
        const zipCodeIsValid = /^\d{5}$/.test(zipCodeElement.value);
        const zipHint = document.querySelector('#zip-hint');
        const cvvIsValid = /^\d{3}$/.test(cvvCodeElement.value);
        const cvvHint = document.querySelector('#cvv-hint'); 

        if (cardNumberIsValid) {
            cardNumberElement.parentElement.classList.add('valid');
            cardNumberElement.parentElement.classList.remove('not-valid');
            cardNumberHint.style.display = 'none';
        } else {
            cardNumberElement.parentElement.classList.add('not-valid');
            cardNumberElement.parentElement.classList.remove('valid');
            cardNumberHint.style.display = 'block';
        }
        if (zipCodeIsValid) {
            zipCodeElement.parentElement.classList.add('valid');
            zipCodeElement.parentElement.classList.remove('not-valid');
            zipHint.style.display = 'none';
        } else {
            zipCodeElement.parentElement.classList.add('not-valid');
            zipCodeElement.parentElement.classList.remove('valid');
            zipHint.style.display = 'block';
        }   
        if (cvvIsValid) {
            cvvCodeElement.parentElement.classList.add('valid');
            cvvCodeElement.parentElement.classList.remove('not-valid');
            cvvHint.style.display = 'none';
        } else {
            cvvCodeElement.parentElement.classList.add('not-valid');
            cvvCodeElement.parentElement.classList.remove('valid');
            cvvHint.style.display = 'block';
        }     
        
        if (cardNumberIsValid && zipCodeIsValid && cvvIsValid === true) {
            return true;
        } else {
            console.log('cc failure');
            return false;
        }            
    } 
    //Validate credit card on keyup
    creditCard.addEventListener('keyup',() => creditCardValidator() )

    //validate email on keyup
    emailElement.addEventListener('keyup', () => emailValidator() )

    //Validate name on keyup
    nameElement.addEventListener('keyup', () => nameValidator() )

    //Validate All fields at once
    function validateAll() {
        nameValidator();
        emailValidator();
        activityValidator();
        if (paymentOptions[1].selected === true) {
            creditCardValidator()
        }
    }

    //Submit functionality
    document.querySelector('form').addEventListener('submit', (e) => {
        if (!nameValidator() || !emailValidator() || activityValidator() === false) {
            e.preventDefault();
            validateAll();
        }  
    })

