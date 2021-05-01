document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Kindly click on the small image on my profile.. See the magic');
});

var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
     alert('I saw you click!');
});
if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";

}else {
        thumbnailElement.className = "";
    }
  });
});
