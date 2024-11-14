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