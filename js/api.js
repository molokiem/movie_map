//BELOW IS OUR GLOBAL VARIABLES THAT CAN BE ACCESSED THROUGHOUT OUR SCRIPTS FUNCTIONALITY

var dropdownLis = $("#dropdown1 li");

var liComedy = document.getElementById("#comedy");
var onlyDropdown = document.getElementById("#horror");

var image1 = $("#movie-poster-1");
var image2 = $("#movie-poster-2");
var image3 = $("#movie-poster-3");

// HERE WE ARE DECLARING OUR FUNCTION WHICH WILL RETURN MOVIE SELECTIONS THROUGH A SEARCH QUERY FROM THE OMDB API

function getMovieBySearch(cat) {
  var baseURL = "http://omdbapi.com/"; // THE BASE URL THAT IS REQUIRED
  var myKey = "?apikey=trilogy&"; // OUR API KEY USED TO ACCESS THE DATA
  var query = `s=${cat}`; // OUR SEARCH QUERY RETURNING A CATEGORY --GENRE--
  // console.log(cat);

  // WE ARE NOW FETCHING DATA FROM OUR WEB API BY CONCATONATING OUR VARIABLES ASSIGNED WITH THE CORRECT INFORMATION
  //WE ARE RETURNED A PROMISE OF HOW THE CODE WILL BE HANDLED BY THE SERVER SIDE CALL

  fetch(baseURL + myKey + query) //GET
    .then((response) => response.json()) //RETRIEVE A JSON DATA OBJECT
    .then((data) => {
      //PASSING THE DATA AS AN ARGUMENT ALLOWS US TO MANIPULATE THE DATA
      console.log(data); //A CHECK TO MAKE SURE WE HAVE AN OBJECT THAT CAN BE ACCESSED

      //BELOW WE HAVE CREATED AN EMPTY ARRAY THAT WE WILL PUSH DATA TO IN ORDER TO RANDOMIZE OUR POSTERS WHEN ACCESSED BY A CLICK FROM THE USER IN OUR DROPDOWN MENU

      var threeMovies = [];

      //WE RUN A LOOP OVER THE LENGTH OF OUR EMPTY ARRAY AND KEEP IT GOING AS LONG AS IT REMAINS BELOW 3-- BC WE ONLY HAVE 3 SECTIONS TO DISPLAY OUR POSTERS

      for (let i = 0; threeMovies.length < 3; i++) {
        //WE WANT TO RANDOMIZE OUR POSTERS-- SO WE MAKE SURE TO RUN THE MATH.FLOOR AND MATH.RANDOM FUNCTIONS WHILE MULTIPLYING THE 0-1 BY THE LENGTH OF OUR DATA BEING CALLED FROM OUR WEB API. WHICH IS CAPPED AT 10.

        //WE ALSO KEEP IN MIND OUR DATA IS GOING INTO THE SEARCH QUERY OF OUR OBJ

        var randomNumber = Math.floor(Math.random() * data.Search.length);
        // console.log(randomNumber);

        //NOW WE WANT TO SEE IF A PARTICULAR MOVIE POSTER IS INCLUDED WITHIN OUR THREEMOVIES ARRAY-- IF IT'S NOT LOG A RANDOM NUMBER

        //IF IT'S THERE LOG -- MOVIE ALREADY THERE

        if (threeMovies.includes(data.Search[randomNumber])) {
          console.log(randomNumber); //RANDOMIZES THE POSTERS FROM THE ARRAY SEARCH
          console.log("movie already there");
          return;
        } else {
          console.log("new movie");

          //HERE WE ARE PUSHING THE RANDOMIZATION OF OUR DATA.SEARCH TO THE NEW ARRAY WHICH WILL BE DISPLAYED IM OUR NEXT BLOCK OF CODE

          threeMovies.push(data.Search[randomNumber]);
        }
      }

      console.log(threeMovies); //SHOWS THE NEW ARRAY WITH OUR RANDOMIZED MOVIE POSTERS

      //WE ASSIGNED A VARIABLE OF MOVIES WITH DATA.SEARCH WHICH ENTERS THE OBJECT OF DATA TO LOOK FOR OUR SEARCH ARRAY -- GENRE OF MOVIE
      //WE THEN MAKE SURE TO ACCESS OUR THREEMOVIES OBJECT EVEN FURTHER BY LOOKING INTO THE POSTERS ARRAY WHICH ADDS THEM TO OUR SRC ATTRIBUTE SECTION WITHIN OUR HTML

      var movies = data.Search;
      console.log(movies, image1); //JUST LOGGING TO CHECK IF OUR MOVIES ONE OF OUR IMAGE SECTIONS IS BEING TARGETED
      image1.attr("src", threeMovies[0].Poster); //IMAGE1 TARGETS MOVIE-POSTER-1 ID AND ACCESSES OUR THREEMOVIES ARRAY AND DIGS FURTHER INTO THE POSTERS
      image2.attr("src", threeMovies[1].Poster); //""
      image3.attr("src", threeMovies[2].Poster); //""
    });
}

//BELOW WE ARE MAKING SURE THAT WHEN ONE OF OUR DROPDOWN GENRES IS CLICKED IT CORRELATES TO ==THIS== PARTICUALR LI AND NOT ANOTHER. THEN PASS THROUGH OUR GENRE --CAT-- BY CALLING OUR GETMOVIEBYSEARCH FUN

function showRandomGenre() {
  var cat = $(this).text();
  getMovieBySearch(cat);
  
}
dropdownLis.click(showRandomGenre);
