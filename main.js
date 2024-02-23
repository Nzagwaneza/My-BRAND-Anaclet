document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault();
        
        // Get data from input fields
        var title = document.getElementById('textTitle').value;
        var authorName = document.getElementById('Authorname').value;
        var summary = document.getElementById('Summary').value;
        var articleText = document.getElementById('articleText').value;
        var profilePicture = document.getElementById('profilePicture').files[0];
        var mainPicture = document.getElementById('mainPicture').files[0];

        // Create object to store data
        var articleData = {
            title: title,
            authorName: authorName,
            summary: summary,
            articleText: articleText,
            profilePicture: profilePicture ? profilePicture.name : null,
            mainPicture: mainPicture ?  mainPicture.name : null
        };
        // profilePicture: profilePicture ? profilePicture.name : null,
            // mainPicture: mainPicture ? mainPicture.name : null

        // Store data to local storage
        localStorage.setItem('articleData', JSON.stringify(articleData));

        // Display success message or perform any other action
        console.log("Article data stored successfully:", articleData);
    }

    // Add event listener to the submit button
    document.getElementById('submitButton').addEventListener('click', handleFormSubmission);
});
