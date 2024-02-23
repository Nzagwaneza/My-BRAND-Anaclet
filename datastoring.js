
  document.getElementById('submitButton').addEventListener('click', function() {
    // Collect article data
    var articleData = {
      title: document.getElementById('textTitle').value,
      author: document.getElementById('Authorname').value,
      summary: document.getElementById('Summary').value,
      // Add other properties as needed
    };

    // Retrieve existing articles from localStorage or initialize an empty array
    var articles = JSON.parse(localStorage.getItem('articles')) || [];

    // Add the new article data to the articles array
    articles.push(articleData);

    // Store the updated articles array back in localStorage
    localStorage.setItem('articles', JSON.stringify(articles));
  });
