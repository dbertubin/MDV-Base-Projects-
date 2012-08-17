// Wait for Cordova to load
//

function onLoad(){
document.addEventListener("deviceready", onDeviceReady, false);
};
// Cordova is ready
//
function onDeviceReady() {
    // create
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";       //specify both to support all devices
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save
    contact.save(onSaveSuccess,onSaveError);
    
    // clone
    var clone = contact.clone();
    clone.name.givenName = "John";
    console.log("Original contact name = " + contact.name.givenName);
    console.log("Cloned contact name = " + clone.name.givenName);
    
    // remove
    contact.remove(onRemoveSuccess,onRemoveError);
}

// onSaveSuccess: Get a snapshot of the current contacts
//
function onSaveSuccess(contact) {
    alert("Save Success");
}

// onSaveError: Failed to get the contacts
//
function onSaveError(contactError) {
    alert("Error = " + contactError.code);
}

// onRemoveSuccess: Get a snapshot of the current contacts
//
function onRemoveSuccess(contacts) {
    alert("Removal Success");
}

// onRemoveError: Failed to get the contacts
//
function onRemoveError(contactError) {
    alert("Error = " + contactError.code);
}

// success callback
function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        alert(contacts[i].displayName);
    }
};

// error callback
function onError(contactError) {
    alert('onError!');
};

// specify contact search criteria
var options = new ContactFindOptions();
options.filter="";          // empty search string returns all contacts
options.multiple=true;      // return multiple results
filter = ["displayName"];   // return contact.displayName field

// find contacts
navigator.contacts.find(filter, onSuccess, onError, options);

function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        alert("Formatted: " + contacts[i].name.formatted + "\n" +
              "Family Name: "  + contacts[i].name.familyName + "\n" +
              "Given Name: "  + contacts[i].name.givenName + "\n" +
              "Middle Name: "  + contacts[i].name.middleName + "\n" +
              "Suffix: "  + contacts[i].name.honorificSuffix + "\n" +
              "Prefix: "  + contacts[i].name.honorificSuffix);
    }
};

function onError(contactError) {
    alert('onError!');
};

var options = new ContactFindOptions();
options.filter="";
filter = ["displayName","name"];
navigator.contacts.find(filter, onSuccess, onError, options);


function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        for (var j=0; j<contacts[i].organizations.length; j++) {
            alert("Pref: " + contacts[i].organizations[j].pref + "\n" +
                  "Type: " + contacts[i].organizations[j].type + "\n" +
                  "Name: " + contacts[i].organizations[j].name + "\n" +
                  "Department: "  + contacts[i].organizations[j].department + "\n" +
                  "Title: "  + contacts[i].organizations[j].title);
        }
    }
};

function onError(contactError) {
    alert('onError!');
};

var options = new ContactFindOptions();
options.filter="";
filter = ["displayName","organizations"];
navigator.contacts.find(filter, onSuccess, onError, options);
