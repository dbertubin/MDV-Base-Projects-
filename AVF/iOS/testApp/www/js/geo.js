// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {}

function checkGeo () {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// onSuccess Geolocation
//
var onSuccess = function(position) {
    
    var largeMap = document.getElementById('largeMap');
    
    largeMap.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red%7Ccolor:red%7C" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false";
    
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}