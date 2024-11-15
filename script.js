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
const message = document.getElementById('message');

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