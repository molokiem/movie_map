var dropdownLis = $("#dropdown1 li");
// var liHorror = document.getElementById("#horror");
var liComedy = document.getElementById("#comedy");
var onlyDropdown = document.getElementById("#horror");

var image1 = $("#movie-poster-1");
var image2 = $("#movie-poster-2");
var image3 = $("#movie-poster-3");

//RETURNS ARRAY

function getMovieBySearch(cat) {
  var baseURL = "http://omdbapi.com/";
  var myKey = "?apikey=trilogy&";
  var query = `s=${cat}`;
  console.log(cat);
  fetch(baseURL + myKey + query)
    .then((response) => response.json())
    .then((data) => {
      var movies = data.Search;
      console.log(movies, image1);
      image1.attr("src", movies[0].Poster);
      image2.attr("src", movies[1].Poster);
      image3.attr("src", movies[2].Poster);
    });
}

// getMovieBySearch("action");
// getMovieBySearch("horror");
// getMovieBySearch("comedy");
// getMovieBySearch("drama");
// getMovieBySearch("fantasy");
// getMovieBySearch("scifi");

function showRandomGenre() {
  var cat = $(this).text();
  getMovieBySearch(cat);
}
dropdownLis.click(showRandomGenre);

// dropdownUl.forEach(function (li) {
//   console.log("for each works");

//   li.addEventListener("click", function (e) {
//     if (li !== liHorror) {
//       return getMovieBySearch("horror");
//     } else {
//       console.log("wrong");
//       return "wrong";
//     }
//     // li.append(liHorror);
//     // getMovieBySearch("horror");
//     // li.append(liComedy);
//     // getMovieBySearch("comedy");
//   });
// });

// myButtons.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // this is the data I want to add to local storage from user input
//     let textInput = $(this).siblings("textarea").val();
//     // here is the hour block I want to save the data that correctly stores within its proper key local storage
//     let textDiv = $(this).parent().attr("id");

//     const savedCalendarData = localStorage.setItem(textDiv, textInput);

//     // console.log(textInput);
//     // console.log(this);
//   });
// });
