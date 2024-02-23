document.addEventListener("DOMContentLoaded", function () {
    var modalSubscribe = document.getElementById('myModalsubscribe');
    var closeButtonSubscribe = document.getElementById('closeModalsubscribe');
    var subscribeForm = document.getElementById('subscribeForm');
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
  
    closeButtonSubscribe.addEventListener('click', function () {
      modalSubscribe.style.display = "none";
    });
  
    document.getElementById('submitSubscribe').addEventListener('click', function () {
      emailError.textContent = '';
      if (!isValidEmail(emailInput.value)) {
        displayErrorMessage("Please enter a valid email address");
        return;
      }
      // If all validations pass, you can submit the form here
      // For now, we're just logging a success message
      console.log("Subscription successful!");
    });
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function displayErrorMessage(message) {
      emailError.textContent = message;
    }
  });
  