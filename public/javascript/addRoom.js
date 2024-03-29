//const { default: axios } = require("axios");

document.getElementById("addRoom").addEventListener("submit", handleSubmit);

$(document).ready(() => {
  var currentTime = new Date();
  currentTime.setSeconds(0, 0);
  document
    .getElementById("launchDate")
    .setAttribute(
      "min",
      dateToLocalISOString(currentTime).replace(":00.000Z", "")
    );
});

function dateToLocalISOString(date) {
  return new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
}

async function handleSubmit(event) {
  event.preventDefault();
  const bookingDate = document.getElementById("launchDate").value;
  const bookDate = new Date(bookingDate);
  console.log(bookingDate);

  const result = await axios
    .post("api/rooms", {
      name: $("#Rname").val(),
      capacity: $("#Rcapacity").val(),
      location: $("#Rlocation").val(),
      launchDateTime: bookDate,
      hourlyRate: $("#Rprice").val(),
    })
    .then(function (response) {
      console.log(response);
      alert("Room Created!");
      window.location = "/viewRoom";
    });
}
