$(document).ready(function () {
  $("#liveToastBtn").click(function () {
    $("#liveToast").show();
  });

  $("#boredBtn").click(function () {
    $.ajax({
      url: "https://www.boredapi.com/api/activity/",
      success: function (response) {
        console.log(response);
      },
    });
  });
});
