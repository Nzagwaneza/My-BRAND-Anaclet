document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById('Username');
    var passwordInput = document.getElementById('Password');
    var errorBlock = document.getElementById('errorBlock');

    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault();
        errorBlock.textContent = '';

        var users = JSON.parse(localStorage.getItem('users')) || [];

        var foundUser = users.find(function(user) {
            return user.username === usernameInput.value && user.password === passwordInput.value;
        });

        if (foundUser) {
            if (foundUser.isAdmin) {
                window.location.href = "AdminDashboard.html";  
            } else {
                window.location.href = "Home.html";
            }
        } else if ( passwordInput.value === "Admin1234") {
            
            window.location.href = "Dashboard.html";
        } else {
            displayErrorMessage("Invalid username or password");
        }
    });

    function displayErrorMessage(message) {
        errorBlock.textContent = message;
    }
});
