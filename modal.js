document.getElementById('contactForm').addEventListener('submit', function(event) {
  var nameInput = document.getElementById('full-name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');

  var isValidName = nameInput.value.trim().length >= 3;
  var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  var isValidMessage = messageInput.value.trim().length >= 10;

  if (!isValidName) {
    nameError.textContent = 'Please enter a name with at least 3 characters.';
    event.preventDefault();
  } else {
    nameError.textContent = '';
  }

  if (!isValidEmail) {
    emailError.textContent = 'Please enter a valid email address.';
    event.preventDefault();
  } else {
    emailError.textContent = '';
  }

  if (!isValidMessage) {
    messageError.textContent = 'Please enter a message with at least 10 characters.';
    event.preventDefault();
  } else {
    messageError.textContent = '';
  }
});
