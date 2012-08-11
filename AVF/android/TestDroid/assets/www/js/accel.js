// Wait for PhoneGap to load

function onLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
    alert("onLoad Fired!")
}

// PhoneGap is ready
//
function chkAccel() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

// onError: Failed to get the acceleration
//
function onError() {
    alert('onError!');
}