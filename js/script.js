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
const designColor = document.getElementById('color');
const designTheme= document.getElementById('design');
designColor.disabled = true;
const jsPunsDesignTheme = [
    designColor[1],
    designColor[2],
    designColor[3]
];
const heartJsDesignTheme = [
    designColor[4],
    designColor[5],
    designColor[6]
];

designTheme.addEventListener('change', (e) => {
    designColor.disabled = false;
    if (e.target.value === 'js puns') {
        for (let i = 0; i < jsPunsDesignTheme.length; i++) {
            jsPunsDesignTheme[i].hidden = false;
        }
        for (let i = 0; i < heartJsDesignTheme.length; i++) {
            heartJsDesignTheme[i].hidden = true;
        }
    }else if (e.target.value === 'heart js') {
        for (let i = 0; i < jsPunsDesignTheme.length; i++) {
            jsPunsDesignTheme[i].hidden = true;
        }
        for (let i = 0; i < heartJsDesignTheme.length; i++) {
            heartJsDesignTheme[i].hidden = false;
        }
    }
});




