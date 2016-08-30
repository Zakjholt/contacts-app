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

    $("button").click(function(e) {
        e.preventDefault();
        var newItem = Object.create(Person);
        for (var prop in newItem) {
            newItem[prop] = $("#" + prop).val();
        }
        contactList.push(newItem);
        $("#contactList").append("<li>" + newItem.firstName + " " + newItem.lastName + "</li>");
    });

    $("#contactList").click(function() {
      $("form").css("width", "66.66%");
      $("#contactInfo").css("display", "inline");
    });
});
