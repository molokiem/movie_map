// USER INPUT

// When the user lands on the page and they are looking for a movie

// When they click on the drop down menu
// Then they are provided with genres of movies

// When the user picks a genre out of 3 movie recommendations will appear
// Then they can choose one of those movie

// When the user picks a movie
// Then the movie is saved to local storage

// Below the movie section
// When the user will be able to check locations to buy snacks
// and see how far they are from the location

// get location
//change url with baseURL

// var baseURL = "https://api.openweathermap.org/data/2.5";
// var apiKey = "307f24d9af855edf4286e32464c76737";
// var url = baseURL + "/weather?appid=" + apiKey;

<<<<<<< HEAD
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
=======
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

$(document).ready(function(){
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
>>>>>>> 17568ac3276bab5f322f4be647d09c8934a6d6b3
});

// ES6 VERSION OF CALLING API DATA

// async function getData() {
//   var data = await fetch(
//     "https://api.themoviedb.org/3/movie/550?api_key=8624c76629e368c99110086d1bbb16d0"
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);

//       return response;
//     })
//     .catch((err) => console.error(err));

//   console.log(data);
// }

// getData();

//img.omdbapi.com/?apikey=[yourkey]&

// function getMovieDataBySearch(searchParam) {
//   var baseURL = "http://omdbapi.com/";
//   var myKey = "?apikey=trilogy&";
//   var genre = `s=${searchParam}`;

//   fetch(baseURL + myKey + genre)
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       renderMovieData(data);
//       return data;
//     });
// }

// function renderMovieData(data) {
//   // draw stuff
// }

// var lis = document.createElement("div");
// var dataEl = `<li>word</li>`;

// lis.textContent = dataEl;
// document.querySelector("#word").append(lis);

// renderMovieData();

// EXTRA WORK

// function getMovieBySearch(movie) {
//   var baseURL = "http://omdbapi.com/";
//   var myKey = "?apikey=trilogy&";
//   var genre = `s=${movie}`;

//   fetch(baseURL + myKey + genre)
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       // renderMovieData(data);
//       return data;
//     });
// }

// function getMovieDataBySearch(searchParam) {}

// getMovieDataBySearch();

// function renderMovieData(data) {
//   // draw stuff
// }

// var newDiv = document.createElement("div");
// newDiv.innerHTML(`<li> word </li>`);

// renderMovieData();
