document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(event) {
        event.preventDefault();
        
        var titleInput = document.getElementById('textTitle');
        var authorNameInput = document.getElementById('Authorname');
        var summaryInput = document.getElementById('Summary');
        var articleTextInput = document.getElementById('articleText');
        var profilePictureInput = document.getElementById('profilePicture');
        var mainPictureInput = document.getElementById('mainPicture');

        var title = titleInput.value;
        var authorName = authorNameInput.value;
        var summary = summaryInput.value;
        var articleText = articleTextInput.value;
        var profilePicture = profilePictureInput.files[0];
        var mainPicture = mainPictureInput.files[0];

        var articleData = {
            title: title,
            authorName: authorName,
            summary: summary,
            articleText: articleText,
            profilePicture: profilePicture ? profilePicture.name : null,
            mainPicture: mainPicture ?  mainPicture.name : null
        };

        localStorage.setItem('articleData', JSON.stringify(articleData));

        console.log("Article data stored successfully:", articleData);

        titleInput.value = '';
        authorNameInput.value = '';
        summaryInput.value = '';
        articleTextInput.value = '';
        profilePictureInput.value = '';
        mainPictureInput.value = '';

        alert("A new article has been added!");

    }

    document.getElementById('submitButton').addEventListener('click', handleFormSubmission);
});


function deleting(title) {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var articleData = JSON.parse(localStorage.getItem(key));
        if (articleData && articleData.title === title) {
            localStorage.removeItem(key);
            break; 
        }
    }

    document.getElementById("thisCanBeDeleted").innerHTML = "";
    var remainingsideElements = document.querySelectorAll(".remainingside");
    remainingsideElements.forEach(function (element) {
        element.innerHTML = "";
    });

    alert("Article deleted successfully!");
}
