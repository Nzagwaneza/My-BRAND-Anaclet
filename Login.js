document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById('Username');
    var passwordInput = document.getElementById('Password');
    var errorBlock = document.getElementById('errorBlock');

    document.getElementById('loginButton').addEventListener('click', function (event) {
        errorBlock.textContent = '';

        if (!isValidUsername(usernameInput.value)) {
            displayErrorMessage("Username should be text");
            return;
        }

        if (!isValidPassword(passwordInput.value)) {
            displayErrorMessage("Password should be at least 8 characters");
            return;
        }

        // Check if the credentials are "Admin.anaclet" and "Admin"
        if (usernameInput.value === "Adminanaclet" && passwordInput.value === "Admin1234") {
            // Redirect to Dashboard.html
            window.location.href = "Dashboard.html";
        } else {
            // Redirect to Home.html if credentials are incorrect
            window.location.href = "Home.html";
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
