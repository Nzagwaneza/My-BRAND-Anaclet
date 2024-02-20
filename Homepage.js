// Function to fetch and insert the modal content
function loadModalContent() {
    fetch('modal.html', { mode: 'no-cors' })
 // Fetch the modal content HTML file
      .then(response => response.text()) // Convert response to text
      .then(data => {
        document.getElementById('modalContainer').innerHTML = data; // Insert modal content into the modal container
        showModal(); // Call the function to show the modal after it's loaded
      })
      .catch(error => console.error('Error fetching modal content:', error));
  }
  
  // Function to show the modal
  function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block"; // Show the modal
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
  }
  
  // Open the modal when the button is clicked
  document.getElementById("openModal").addEventListener("click", loadModalContent);
  