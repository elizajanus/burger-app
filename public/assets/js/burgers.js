
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEaten = {
      eaten: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten
    }).then(
      function() {
        console.log("changed eaten to", newEaten);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      eaten: 0
    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });

 $(".delete").on("click", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/burgers/" + id
  }).then(function() {
    console.log("deleted burger");

    location.reload();
  });
 }); 
});
