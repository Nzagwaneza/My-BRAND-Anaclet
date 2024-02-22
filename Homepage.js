var modal= document.getElementById("myModal");
var bouton=  document.getElementById("openModal");
var span= document.getElementById("closeModal");

bouton.onclick = function () {
modal.style.display= "block";
}


span.onclick = function () {
  modal.style.display= "none";
  }

  window.onclick = function (event) {
    if(event.target == modal){
    modal.style.display= "none";
    }
    }

  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModalsubscribe");
    var openSubscribeBtn = document.getElementById("openSubscribe");
    var closeModalBtn = document.getElementById("closeModalsubscribe");
  
    openSubscribeBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      modal.style.display = "block";
    });
  
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  