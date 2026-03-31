// Simple JavaScript for Astrology Analyzer

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle form submission
    const form = document.getElementById('astroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            
            // Simple validation
            if (!name || !birthdate) {
                alert('Please fill in your name and birth date!');
                return;
            }
            
            // Calculate zodiac sign based on birth date
            const zodiacSign = getZodiacSign(birthdate);
            
            // Store the result in localStorage to show on result page
            localStorage.setItem('zodiacResult', `You are ${zodiacSign}`);
            localStorage.setItem('userName', name);
            
            // Redirect to result page
            window.location.href = 'result.html';
        });
    }
    
    // If we're on the result page, display the zodiac sign
    const resultElement = document.getElementById('result');
    if (resultElement) {
        const zodiacResult = localStorage.getItem('zodiacResult');
        const userName = localStorage.getItem('userName');
        
        if (zodiacResult) {
            resultElement.textContent = zodiacResult;
            
            // Add welcome message
            const pageTitle = document.querySelector('.page-header h1');
            if (pageTitle && userName) {
                pageTitle.textContent = `🌟 ${userName}'s Zodiac Sign 🌟`;
            }
        }
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields!');
                return;
            }
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Function to calculate zodiac sign based on birth date
function getZodiacSign(birthdate) {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1; // JavaScript months are 0-11
    const day = date.getDate();
    
    // Zodiac sign calculations
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries ♈";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini ♊";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo ♌";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo ♍";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio ♏";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius ♐";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricorn ♑";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius ♒";
    } else {
        return "Pisces ♓";
    }
}