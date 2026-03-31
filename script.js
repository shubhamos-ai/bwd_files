// Simple JavaScript for Astrology Analyzer using only simple logic

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const form = document.getElementById('astroForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Display result if on result page
    displayZodiacResult();
});

// Function to handle clicking on a path card
function selectPath(type) {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const title = document.getElementById('chosenTitle');
    const hiddenType = document.getElementById('selectedType');
    
    if (step1) {
        step1.style.display = 'none';
    }
    
    if (step2) {
        step2.style.display = 'block';
    }
    
    if (title) {
        title.innerHTML = '✨ ' + type;
    }
    
    if (hiddenType) {
        hiddenType.value = type;
    }
}

// Function to go back to choices
function goBack() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    
    if (step1) {
        step1.style.display = 'block';
    }
    
    if (step2) {
        step2.style.display = 'none';
    }
}

// Handle form submission with simple alert/confirm
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const type = document.getElementById('selectedType').value;
    
    if (name == "") {
        alert("Please enter your name!");
    } else if (birthdate == "") {
        alert("Please enter your birth date!");
    } else {
        // Simple confirmation
        const userSure = confirm("Are you sure you wish to continue?");
        
        if (userSure == true) {
            // Save data
            localStorage.setItem('userName', name);
            localStorage.setItem('chosenType', type);
            
            // Simple logic for calculation
            const zodiac = getZodiacSign(birthdate);
            localStorage.setItem('zodiacResult', zodiac);
            
            // Redirect
            window.location.href = 'result.html';
        } else {
            alert("Cancelled!");
        }
    }
}

// Display zodiac result on result page
function displayZodiacResult() {
    const resultValue = document.getElementById('resultValue');
    const userNameElement = document.getElementById('userName');
    
    if (resultValue) {
        const zodiacSign = localStorage.getItem('zodiacResult');
        const userName = localStorage.getItem('userName');
        const type = localStorage.getItem('chosenType');
        
        if (userName) {
            userNameElement.innerHTML = userName;
        }
        
        if (zodiacSign) {
            if (type == "Death Calculator") {
                resultValue.innerHTML = "You will live for 100+ years! ⏳";
            } else if (type == "Vedic Planets") {
                resultValue.innerHTML = "Jupiter is in your favor! 🪐";
            } else {
                resultValue.innerHTML = zodiacSign;
            }
        }
    }
}

// Simple Zodiac calculation
function getZodiacSign(birthdate) {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1; // 1-12
    
    let sign = "";
    
    if (month == 1) { sign = "Capricorn ♑"; }
    else if (month == 2) { sign = "Aquarius ♒"; }
    else if (month == 3) { sign = "Pisces ♓"; }
    else if (month == 4) { sign = "Aries ♈"; }
    else if (month == 5) { sign = "Taurus ♉"; }
    else if (month == 6) { sign = "Gemini ♊"; }
    else if (month == 7) { sign = "Cancer ♋"; }
    else if (month == 8) { sign = "Leo ♌"; }
    else if (month == 9) { sign = "Virgo ♍"; }
    else if (month == 10) { sign = "Libra ♎"; }
    else if (month == 11) { sign = "Scorpio ♏"; }
    else if (month == 12) { sign = "Sagittarius ♐"; }
    else { sign = "Stellar Soul ✨"; }
    
    return sign;
}