$(document).ready(function () {
  $("#accessToggle").change(function () {
    if ($(this).is(":checked")) {
      $("p").css("fontSize", "120%");
    } else {
      $("p").css("fontSize", "100%");
    }
  });
});
