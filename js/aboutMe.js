$(document).ready(function () {
  $("#about p").text(function () {
    $(this).text("Hello world! my name is Nuk");
  });
  $("#about p")
    .last()
    .text(function () {
      $(this).text("I am studying backend-development to be a web developer");
    });

  $("#about p").click(function () {
    $(this).css("background-color", "powderblue"),
      $(this).css("color", "white");
  });
});
