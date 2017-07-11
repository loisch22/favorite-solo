$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var favThings = ["fav1", "fav2", "fav3", "fav4", "fav5"];

    favThings.forEach(function(favThing) {
      var allFavThings = $("input#" + favThing).val();
      $(".confirm").show();
      $(".allFavs").append("<li>" + allFavThings + "</li>");
    });
  });
});
