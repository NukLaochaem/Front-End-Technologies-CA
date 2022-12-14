function contactInfo() {
  let email = prompt("Please enter your email");
  let telephone_number = prompt("Please enter your phone number");
  let address = prompt("Please enter address");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    $(document).ready(function () {
      $("#contactDetails p").text(function () {
        $(this).text(email);
      });

      $("#contactDetails p:eq(1)").text(function () {
        $(this).text(telephone_number);
      });

      $("#contactDetails p:eq(2)").text(function () {
        $(this).text(address);
      });
    });

    console.log("From:", email);
    console.log("Contact:", telephone_number);
    console.log("Address:", address);
  } else {
    alert("You have entered an invalid email address!");
  }
}
