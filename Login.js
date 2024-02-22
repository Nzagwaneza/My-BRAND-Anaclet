document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById('Username');
    var passwordInput = document.getElementById('Password');
    var errorBlock = document.getElementById('errorBlock');

    document.querySelector('.login').addEventListener('click', function (event) {
        errorBlock.textContent = '';

        if (!isValidUsername(usernameInput.value)) {
            displayErrorMessage("Username should be text");
            event.preventDefault();
            return;
        }

        if (!isValidPassword(passwordInput.value)) {
            displayErrorMessage("Password should be at least 8 characters");
            event.preventDefault();
            return;
        }
    });

    function isValidUsername(username) {
        var regex = /^[a-zA-Z]+$/;
        return regex.test(username);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }

    function displayErrorMessage(message) {
        errorBlock.textContent = message;
    }
});
