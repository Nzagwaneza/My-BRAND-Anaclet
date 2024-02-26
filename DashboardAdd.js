document.addEventListener("DOMContentLoaded", function () {
    var articleData = localStorage.getItem('articleData');
  
    if (articleData) {
      try {
        articleData = JSON.parse(articleData);
        
        var title = articleData.title;
  
        if (title) {
          document.getElementById('titleToDelete').innerText = title;
        }
  
       
      } catch (error) {
        console.error('Error parsing article data:', error);
      }
    } else {
      console.log('No article data found in local storage.');
    }
  });
  