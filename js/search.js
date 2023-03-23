var searchBtn = $(".find-store-button");
var infowindow;

// main function
// will execute once search button is clicked
function searchStores() {
  var searchInput = $("#search-input");
  var geocoder = new google.maps.Geocoder();
  infowindow = new google.maps.InfoWindow();

  // calls for the convenience store results
  var showConvenienceLocations = function (lat, lon) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lon },
      zoom: 15,
    });
    // Create a new request object with the location, type, and radius parameters for nearby convenience stores
    var request = {
      location: map.getCenter(),
      type: ["convenience_store"],
      radius: "3000",
    };

    // If the status of the search is OK, create a marker for each convenience store location returned by the API
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function (results, status) {
      console.log("search");
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        // Center the map on the first convenience store location returned by the API
        map.setCenter(results[0].geometry.location);
      }
    });
  };
  // If the status of the search is OK, call for the location results from the showConvenienceLocations funtion
  var getCoordinates = function (results, status) {
    if ((status = "OK")) {
      showConvenienceLocations(
        results[0].geometry.location.lat(),
        results[0].geometry.location.lng()
      );
    }
  };
  geocoder.geocode({ address: searchInput.val() }, getCoordinates);
}

// createMarker controlls the markers on the map to be visible and get that information from our showConvenienceLocations function
function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

// calls the main funtion, searchStores, once the search button is clicked
searchBtn.click(searchStores);
