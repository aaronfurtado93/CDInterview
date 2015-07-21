var deviceLatitude = "";
var deviceLongitude = "";

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
    deviceLatitude = position.coords.latitude;
    deviceLongitude = position.coords.longitude;
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
    var currentLocation = {
        latitude: null,
        longitude: null
    }
    
    //REPLACE IF WITH DO WHILE
    if(isBlankNullUndefined(deviceLatitude) || isBlankNullUndefined(deviceLongitude)) {
        do {
            navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, { maximumAge: 30000, timeout: 60000, enableHighAccuracy: false });
        }
        while (isBlankNullUndefined(deviceLatitude) || isBlankNullUndefined(deviceLongitude));
    }
    
    currentLocation.latitude = deviceLatitude;
    currentLocation.longitude = deviceLongitude;
    
    return currentLocation;    
}

function calculateDistanceFromCurrentLocation (latitude, longitude) {
    var currentLocation = getCurrentLocation ();
    
    var distanceInKm = getDistanceFromLatLonInKm (currentLocation.latitude, currentLocation.longitude, latitude, longitude);
    
    return distanceInKm;
}