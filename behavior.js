document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Kindly click on the small image on my profile.. See the magic');
});
thumbnailElement.addEventListener("click", function() {
var thumbnailElement = document.getElementById("smart_thumbnail");

     alert('I saw you click!');
    
if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
}else {
        thumbnailElement.className = "";
    }
  });
});
