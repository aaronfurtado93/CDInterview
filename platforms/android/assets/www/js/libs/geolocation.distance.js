var deviceLatitude = sessionStorage.getItem("deviceLatitude");
var deviceLongitude = sessionStorage.getItem("deviceLongitude");

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
    d = Math.ceil(d);
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onGeolocationSuccess(position) {
    sessionStorage.setItem("deviceLatitude",position.coords.latitude);
    sessionStorage.setItem("deviceLongitude",position.coords.longitude);
    debugger;
}

// onError Callback receives a PositionError object
//
function onGeolocationError(error) {
    console.error('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function getCurrentLocation()
{
    
    //REPLACE IF WITH DO WHILE
        do {
            navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, { maximumAge: 30000, timeout: 60000, enableHighAccuracy: false });
            debugger;
        }
        while (isBlankNullUndefined(deviceLatitude) || isBlankNullUndefined(deviceLongitude));    
}

function calculateDistanceFromCurrentLocation (latitude, longitude) {
    /*getCurrentLocation ();*/
    
    var distanceInKm = getDistanceFromLatLonInKm (sessionStorage.getItem("deviceLatitude"), sessionStorage.getItem("deviceLongitude"), latitude, longitude);
    
    return distanceInKm;
}