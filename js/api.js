function getMovieBySearch(movie) {
  var baseURL = "http://omdbapi.com/";
  var myKey = "?apikey=trilogy&";
  var query = `s=${movie}`;

  fetch(baseURL + myKey + query)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.Search;
    });
}

function renderSearch() {
  var divEl = document.querySelector("li");
}

getMovieBySearch("action");
getMovieBySearch("horror");
getMovieBySearch("comedy");
getMovieBySearch("drama");
getMovieBySearch("fantasy");
getMovieBySearch("scifi");

var dropdownUl = document.querySelectorAll("li");
// var liHorror = document.getElementById("#horror");
var liComedy = document.getElementById("#comedy");
let onlyDropdown = document.getElementById("#horror");
//RETURNS ARRAY
console.log(dropdownUl);

console.log(dropdownUl.length);

dropdownUl.forEach(function (li) {
  console.log("for each works");

  li.addEventListener("click", function (e) {
    if (li !== liHorror) {
      return getMovieBySearch("horror");
    } else {
      console.log("wrong");
      return "wrong";
    }
    // li.append(liHorror);
    // getMovieBySearch("horror");
    // li.append(liComedy);
    // getMovieBySearch("comedy");
  });
});

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
