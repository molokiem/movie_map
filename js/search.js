// var searchBtn = document.querySelector(".find-store-button");
var searchBtn = $(".find-store-button");
var infowindow;

function searchStores() {
  var searchInput = $("#search-input");
  var geocoder = new google.maps.Geocoder();
  infowindow = new google.maps.InfoWindow();

  var showConvenienceLocations = function (lat, lon) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lon },
      zoom: 15,
    });
    var request = {
      location: map.getCenter(),
      type: ["convenience_store"],
      radius: "3000",
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function (results, status) {
      console.log("search");
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  };
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

// searchBtn.addEventListener("click", searchStores);
searchBtn.click(searchStores);
