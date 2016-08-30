var Person = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    street: null,
    city: null,
    state: null
};

var contactList = [];

var current;

$(document).ready(function() {

    $("#addContact").click(function(e) {
        e.preventDefault();
        if ($("#firstName").val() !== "" && $("#lastName").val() !== "") {
          var newItem = Object.create(Person);
          for (var prop in newItem) {
              newItem[prop] = $("#" + prop).val();
          }
          contactList.push(newItem);
          $("#contactList").append("<li>" + newItem.firstName + " " + newItem.lastName + "</li>");
          $("input").val("");
        } else {
          alert("First and Last names are required");
        }

    });

    $("#contactList").on("click", "li", function() {
      $("form").css("width", "66.66%");
      $("#contactInfo").css("display", "inline");
      //Populate the info card with information from the corresponding object.
      var item = contactList[$(this).index()];
      $("#infoTitle").text(item.firstName + " " + item.lastName);
      $("#infoFirstName").text(item.firstName);
      $("#infoLastName").text(item.lastName);
      $("#infoPhoneNumber").text(item.phoneNumber);
      $("#infoAddresses").empty();
      $("#infoAddresses").append("<li>" + item.street + ' ' + item.city + ', ' + item.state + "</li>");

    });
});
