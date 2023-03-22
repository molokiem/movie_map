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
