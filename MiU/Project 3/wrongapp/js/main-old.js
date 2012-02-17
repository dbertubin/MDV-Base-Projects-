// Derek Bertubin
// MiU Project 3 1202 

function storeData(key){
		if(!key){
			var id 					= Math.floor(Math.random()*1000000001);
		}else{
			//Set the ID to the existing key we're editing so that it will save over the data
			//Key is the same key that was passed along from the editSubmit event handler
			//To the validate function, adn then passed here, into the storeData function
			var id = key;
		}
		//Gather up all our form field values and store in an object.
		//Oject properties contain array with the form label and input value.
		//getCheckboxValue();
		var item 				= {};
			item.groups1		= ["Category:  ", $('#groups1').value];
			item.name			= ["Recommendation Title:  ", $('#name').value];
			item.rating			= ["Rating (1=bad, 5=amazing):  ", $('#rating').value];
			item.comments		= ["Comments:  ", $('#comments').value];
			item.phonenum		= ["Phone Number:  ", $('#phonenum').value];
			item.email			= ["Email:  ", $('#email').value];
			item.url			= ["Website:  ", $('#url').value];
			item.location		= ["Location:  ", $('#location').value];
		//Save data into Local Storage: Use Stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recommendation Saved");

		}


$(document).ready(function(){

	var form = $('#form');

	form.validate({
		submitHandler: function(){
			storeData(this.key)
		}
	});
});