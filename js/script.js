var moveLeftButton = document.querySelector(".move-left-button");

var moveMovieTickerLeft = document.querySelector(".john-wick-4-link");

moveLeftButton.addEventListener("click", moveLeft);

function moveLeft() {
  moveMovieTickerLeft.setAttribute("style", "right: 395px;");

  console.log(moveLeft);
}


// get location
//change url with baseURL

var baseURL = 'https://api.openweathermap.org/data/2.5';
var apiKey = '307f24d9af855edf4286e32464c76737';
var url = baseURL + '/weather?appid=' + apiKey;

navigator.geolocation.getCurrentPosition(function (locationData) {
    console.log(locationData);
    //made a request for the api to get current location of the user
    $.get(
        url +
        "&lat=" +
        locationData.coords.latitude +
        "&lon=" +
        locationData.coords.longitude
    );
    then(function (data) {
        console.log(data);
    });
});
