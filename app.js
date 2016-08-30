var Person = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  street: null,
  city: null,
  state: null
};

var contactList= [];

$(document).ready(function() {

  $("button").click(function() {
    event.preventDefault();
    var newItem = Object.create(Person);
    for (var prop in newItem) {
      newItem[prop] = $("#" + prop).val();
    }
    contactList.push(newItem);
    $("#contactList").append("<li><a>" + newItem.firstName + " " + newItem.lastName + "</a></li>");
  });

});
