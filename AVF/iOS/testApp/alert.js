function onLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    
    phoneGapReady.innerHTML = ("")
    
}

// alert dismissed
function alertDismissed() {
    
}

// Show a custom alert
function showAlert() {
    navigator.notification.alert(
                                 'Alert Works!',
                                 alertDismissed, // callback
                                 'Alert Demo', 
                                 'Done!' 
                                 );
}

// process the confirmation result
function onConfirm(button) {
    alert('You selected button ' + button);
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
                                   'Confirm Works!', 
                                   onConfirm, // callback to invoke with index of button pressed
                                   'Confirm Demo', 
                                   'Restart,Exit' 
                                   );
}

