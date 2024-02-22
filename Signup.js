document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.Importantarea'); // Target the form by class
    const usernameInput = document.getElementById('Username');
    const passwordInput = document.getElementById('Password');
    const confirmPasswordInput = document.getElementById('ConfirmPassword');
    const errorBlock = document.getElementById('errorBlock');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      errorBlock.textContent = '';
  
      if (usernameInput.value.length < 4) {
        displayError('Username must be at least 4 characters long');
        return;
      }
  
      if (passwordInput.value.length < 8) {
        displayError('Password must be at least 8 characters long');
        return;
      }

      if (passwordInput.value !== confirmPasswordInput.value) {
        displayError('Passwords do not match');
        return;
      }
  
      form.submit();
    });
  
    function displayError(message) {
      errorBlock.textContent = message;
      errorBlock.style.color = 'red';
    }
  });
  