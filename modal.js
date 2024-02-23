    console.log("called moda")
  var nameInput = document.getElementById('full-name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var errorBlocks = document.querySelectorAll('.error');
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault()

      errorBlocks.forEach(function (errorBlock) {
          errorBlock.textContent = '';
      });

      if (!isValidName(nameInput.value)) {
          displayErrorMessage("Name should be at least 4 characters and only contain letters", 'nameError');
      }

      if (!isValidEmail(emailInput.value)) {
          displayErrorMessage("Please enter a valid email address", 'emailError');
      }

      if (!isValidMessage(messageInput.value)) {
          displayErrorMessage("Message cannot be empty", 'messageError');
      }
  });

  function isValidName(name) {
      return name.length >= 4 && /^[a-zA-Z ]+$/.test(name);
  }

  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidMessage(message) {
      return message.trim() !== '';
  }

  function displayErrorMessage(message, errorId) {
      var errorBlock = document.getElementById(errorId);
      errorBlock.textContent = message;
  }

