// Derek Bertubin
// MiU Project 3 1202 
/*window.addEventListener("DOMContentLoaded", function(){
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
		var item 				= {};
			item.groups		= ["Category:  ", $('#groups').value];
			item.name			= ["Name the Thing You Want to Do: ", $('#name').value];
			item.rating			= ["Rate How Excited You Are to DO This! (1=Excited, 5=Super Really Excited!):  ", $('#rating').value];
			item.comments		= ["Tell me more about what you want to do!:  ", $('#comments').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recommendation Saved");
		}
*/

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> gh-pages
/*
>>>>>>> master
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
/*
=======
<<<<<<< HEAD
=======
/*
>>>>>>> master
>>>>>>> gh-pages
=======
=======
/*
>>>>>>> master
>>>>>>> gh-pages
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages
=======
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages

$(document).ready(function(){

	var form = $('#form');

	form.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			//storeData(this.key)
		}
	});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> gh-pages
});
=======
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
=======
<<<<<<< HEAD
});
=======
>>>>>>> gh-pages
=======
});
=======
>>>>>>> gh-pages
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages
=======
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages
});
*/


$("#friendform").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> gh-pages
>>>>>>> master
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
=======
>>>>>>> master
>>>>>>> gh-pages
=======
>>>>>>> master
>>>>>>> gh-pages
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages
=======
>>>>>>> master
=======
>>>>>>> master
>>>>>>> gh-pages
