var moveLeftButton = document.querySelector(".move-left-button");

var moveMovieTickerLeft = document.querySelector(".john-wick-4-link");

moveLeftButton.addEventListener("click", moveLeft);

function moveLeft() {
  moveMovieTickerLeft.setAttribute("style", "right: 395px;");

  console.log(moveLeft);
}

//side note
//getLocation button

// navigator.geolocation.getCurrentPosition(function (locationData) {
//   console.log(locationData);
//   //made a request for the api to get current location of the user
//   $.get(
//     url +
//       "&lat=" +
//       locationData.coords.latitude +
//       "&lon=" +
//       locationData.coords.longitude
//   );
//   then(function (data) {
//     console.log(data);
//   });
// });
