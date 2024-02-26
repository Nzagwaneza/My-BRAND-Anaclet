document.addEventListener("DOMContentLoaded", function () {
  var articleData = localStorage.getItem('articleData');

  if (articleData) {
    try {
      articleData = JSON.parse(articleData);
      
      var title = articleData.title;
      var authorName = articleData.authorName;
      var summary = articleData.summary;
      var articleText = articleData.articleText;
      var profilePicture = articleData.profilePicture;

      if (title) {
        document.getElementById('titleview').innerText = title;
      }

      if (authorName) {
        document.getElementById('authornameview').innerText = "Author's name: " + authorName;
      }

      if (articleText) {
        document.getElementById('articletextview').innerText = articleText;
      }

      if (profilePicture) {
        document.getElementById('authorpicview').src = profilePicture;
      }

      if (summary) {
        document.getElementById('summaryview').innerText = summary;
      }
    } catch (error) {
      console.error('Error parsing article data:', error);
    }
  } else {
    console.log('No article data found in local storage.');
  }
});
