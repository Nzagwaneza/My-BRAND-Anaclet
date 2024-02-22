document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var emailInput = document.querySelector('input[name="email"]');
    var errorDiv = document.querySelector('.error'); // Select by class

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            errorDiv.textContent = 'Please enter a valid email address.';
            errorDiv.style.color = 'red'; // Set color to red
        } else {
            errorDiv.textContent = ''; // Clear error message
            form.submit(); // Submit the form if email is valid
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
