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
