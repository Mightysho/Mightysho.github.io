document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Click to see the magic on the small image on my profile');
});
document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
}else {
        thumbnailElement.className = "";
    }
  });
});
