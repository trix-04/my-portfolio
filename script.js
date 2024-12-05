document.addEventListener("DOMContentLoaded", function() {
    var loadingText = document.getElementById('loading-text');
    var percentage = 0;
    var interval = setInterval(function() {
        percentage += 1;
        loadingText.textContent = percentage + '%';
        if (percentage >= 100) {
            clearInterval(interval);
            
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500); n
        }
    }, 30);
});


const buttons = document.querySelectorAll('.toggle-details');

for (const button of buttons) {
    button.addEventListener('click', function () {
        const details = this.nextElementSibling;
        details.classList.toggle('show');

        if (details.classList.contains('show')) {
            this.textContent = 'Less details';
        } else {
            this.textContent = 'More details';
        }
    });
}

const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

form.addEventListener('submit', function(event) {
    clearErrors();
    let isFormValid = true;

    if (firstName.value.trim() == '') {
        showError(firstName, "Please enter your first name.");
        isFormValid = false;
    } else if (!isValidName(firstName.value)) {
        showError(firstName, "First name should not contain any numbers or special characters.");
        isFormValid = false;
    }

    if (lastName.value.trim() == '') {
        showError(lastName, "Please enter your last name.");
        isFormValid = false;
    } else if (!isValidName(lastName.value)) {
        showError(lastName, "Last name should not contain any numbers or special characters.");
        isFormValid = false;
    }

    if (email.value.trim() == '') {
        showError(email, "Please enter your email.");
        isFormValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, "Please enter a valid email address.");
        isFormValid = false;
    }

    if (!isFormValid) {
        event.preventDefault();
    }
});

function showError(inputElement, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.innerText = message;

    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    inputElement.classList.add('invalid');
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.remove();
    });
    const invalidInputs = document.querySelectorAll('.invalid');
    invalidInputs.forEach(function(input) {
        input.classList.remove('invalid');
    });
}

function isValidEmail(email) {
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }
}

function isValidName(name) {
    let namePattern = /^[a-zA-Z]+$/;
    if (namePattern.test(name)) {
        return true;
    } else {
        return false;
    }
}

const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


