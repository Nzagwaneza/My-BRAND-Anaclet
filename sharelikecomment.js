
    function shareOnSocialMedia() {
        // Replace this with the code to share on social media
        alert('Share on social media');
    }

    var likeCount = 0;
    var dislikeCount = 0;
    
    function incrementLike() {
        likeCount++;
        var likeElement = document.getElementById('like');
        likeElement.innerHTML = 'Like <i class="fa-solid fa-thumbs-up">' + likeCount + '</i>';
    }
    
    function incrementDislike() {
        dislikeCount++;
        var dislikeElement = document.getElementById('dislike');
        dislikeElement.innerHTML = 'Dislike <i class="fa-solid fa-thumbs-down">' + dislikeCount + '</i>';
    }
    