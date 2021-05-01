document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Kindly click on the small image on my profile.. See the magic');
});
thumbnailElement.addEventListener("click", function() {
    alert('I saw you click!');
var thumbnailElement = document.getElementById("smart_thumbnail");
    
if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
}else {
        thumbnailElement.className = "";
    }
  });
});
