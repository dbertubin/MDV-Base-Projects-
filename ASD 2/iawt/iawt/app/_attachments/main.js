// Bertubin, Derek
//Project  3 ASD 1206

/*******************************************
				List All  
 *******************************************/

$('#listAll').live("pageinit",function(){
	$('#listView').empty();
	$.ajax({
		"url": "_view/listall",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#listView');
			});
			$('#listView').listview('refresh');
		}
	});
});
/*******************************************
	 			Current
*******************************************/
$('#current').on("pageinit",function(){
	$('#currentView').empty();
	$.ajax({
		"url": "_view/current",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#currentView');
			});
			$('#currentView').listview('refresh');
		}
	});
});
/*******************************************
				Future
*******************************************/
$('#future').live("pageinit",function(){
	$('#futureView').empty();
	$.ajax({
		"url": "_view/future",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#futureView');
			});
			$('#futureView').listview('refresh');
		}
	});
});
/*******************************************
				Collabrative 
*******************************************/
$('#collabrative').live("pageinit",function(){
	$('#collabrativeView').empty();
	$.ajax({
		"url": "_view/collabrative",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#collabrativeView');
			});
			$('#collabrativeView').listview('refresh');
		}
	});
});
/*******************************************
				BUCKET 
*******************************************/

$('#bucket').live("pageinit",function(){
	$('#bucketView').empty();
	$.ajax({
		"url": "_view/bucket",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#bucketView');
			});
			$('#bucketView').listview('refresh');
		}
	});
});
/*******************************************
			SHARED BUCKET 
*******************************************/
$('#sharedBucket').live("pageinit",function(){
	$('#sharedBucketView').empty();
	$.ajax({
		"url": "_view/sharedbucket",
		"dataType": "json",
		"success":function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				console.log(name);
				$(''+
						'<li>' +
						'<a href="#example">' +
						'<h4>' + name +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#sharedBucketView');
			});
			$('#sharedBucketView').listview('refresh');
		}
	});
});


/*******************************************
				FORM 
 *******************************************/

$('#form').live('pageinit', function(){
	
	
	var toggleControls = function (n){
	    switch(n){
		    case "on":
		    	$("#friendForm").css("display" , "none");
		    	$("#clear").css("display " , "inline");
		    	$("#displayLink").css("display" , "none");
		    	$("#addNew").css("display " , "block");
			$('#items').css("display" , "block");
		    	break;
	    	case "off":
	    		$("#friendForm").css("display" , "block");
	    		$("#clear").css("display" , "block");
		    	$("#displayLink").css("display" , "block");
		        $("#addNew").css("display" , "block");
                        $("#items").css("display" , "none");
		    	break;
	    	default:
                        return false;
		}
	};
	
	var formBack = function (){
		toggleControls("off");
	};

	var formGone = function(){
		toggleControls("on");
	};
// Store Data
	var storeData = function (key){
		if (!key){
			var id 		= Math.floor(Math.random()*100000001);
		} else {
			 id = key;
		};
			 	
		var item 				= {};
			item.groups 		= ["Group:", 			$("#groups").val()];
			item.taskName	= ["Task Name:", 		$("#taskName").val()];
			item.taskLength 	= ["Task Length:", 		$("#taskLength").val()];
			item.completeBy 	= ["Complete By:", 	$("#completeBy").val()];
			item.notes 		= ["Notes:", 			$("#notes").val()];	
		localStorage.setItem(id, JSON.stringify(item));
		console.log(id, JSON.stringify(item));
	};
         
// Write date from the local storage to the browser
	var autoFillData = function  () {
		for ( var n in json) {
                var id 		= Math.floor(Math.random()*1000000001);
                localStorage.setItem(id, JSON.stringify(json[n]));
            }
	};
// Edit Item 
	var editItem = function () {
	// Grab the datafrom local Storage 
		var value = localStorage.getItem(this.key);
		var item = jQuery.parseJSON(value);
		var save = $("submit");
	//	save.addEventListener("click", validate);
	//Show the form 
		toggleControls("off");
	// populate form fields with current local stortage values.	
		$("#groups").val(item.groups[1]);
		$("#taskName").val(item.taskName[1]);
		$("#taskLength").val(item.taskLength[1]);
		$("#completeBy").val(item.completeBy[1]);
		$("#notes").val(item.notes[1]);
		save.u.on("click", storeData);
		$("#submit").val("Edit Task");
		var editSubmit = $("#submit");
	// save key value established in the in this funct is a prop of  the editSubmit 
	//editSubmit .addEventListener("click", validate);
		editSubmit.on("click","form.validate");
		editSubmit.key = this.key;
		
	};

	var deleteItem = function (){
		var ask = confirm(" Are you sure that you want to delete this Task?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Task is Deleted!");
			window.location.reload();
		} else {
			alert("Task was not Deleted!");
		}
	};

//Get Data
	var getImage =  function  (catName, makeSubList) {
		var imageLi = $("<li></li>");
		makeSubList.append(imageLi);
		var newImg = $("<img></img>");
		var setSrc = newImg.attr("src", catName+".png");
	//	newImg.attr("id", "img");
		imageLi.append(newImg);
    };		
	var makeItemLinks = function  (key,linksLi){// add single item  edit link
		var editLink =  $("<a></a>");
		editLink.href  = "#";
		editLink.id = "editLink";
		editLink.key = key;
		var editText = "Edit Task";
		editLink.html(editText);
		linksLi.append(editLink);
		editLink.on("click", editItem);
// add single delete	
		var deleteLink =  $("<a></a>");
		deleteLink.href  =  "#" ;
		deleteLink.attr("id", "deleteItem");
		deleteLink.key = key;
		var deleteText = "Delete Task";
		deleteLink.on("click", deleteItem);
		deleteLink.html(deleteText);
		linksLi.append(deleteLink);
	}; 	
	var getData = function (){
		toggleControls("on");
		if (localStorage.length === 0) {
			autoFillData();
			alert("There are no tasks saved so default data was added.");	
		}
		var makeDiv = $("<div></div>");
		makeDiv.attr("data-role", "listview");
		var makeList = $("<ul></ul>");
		makeDiv.append(makeList);
		$("#friendForm").after(makeDiv);
	//	$("#items").css("display", "block");
		for(var i =0, j=localStorage.length; i<j; i++ ){
			console.log(localStorage.length);
			var makeLi = $("<li></li>");
			var linksLi =$("<li></li>");
	//	        linksLi.attr("id" , "linksLi");
			makeList.append(makeLi);
		//  makeList.attr("id","listed");
			var key = localStorage.key(i);
			console.log(key);
			var value = localStorage.getItem(key);
			//Convert string from loc stor val back to an object using JSON.parse()
			var object = jQuery.parseJSON(value);
			console.log(object);
			var makeSubList = $("<ul></ul>");
			makeLi.append(makeSubList);
			getImage(object.groups[1], makeSubList);
						console.log(object.groups[1]);

			console.log(object);
			for( var n in object){
				var makeSubLi = $("<li><li>");
				makeSubList.append(makeSubLi);
				var optSubText = object[n][0] + " " + object[n][1];
				makeSubLi.innerHTML = optSubText;
		//		makeSubList.attr("id","displayed");
				makeSubList.append(linksLi);
			};
			makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete links for each item in local storage	
		}
	};
// Note for getImage ***  the  group value names may need to be changed in the furture to the full name of the group 	

		

// Clear DATA 	
	var clearLocal = function (){
		if(localStorage.length === 0){
		alert("There are no tasks to clear!");	
		} else {
                    localStorage.clear();
                    alert("All tasks are deleted!");
                    window.location.reload();
                    return false;
		}
	};
	
//	Validate
	$("#friendForm").validate({
		submitHandler: function(form) {
		alert("Task Saved");
		console.log("Call Action");
		window.location.reload();
		}
	});	
	

	
	$("#submit").on("click", storeData);
	$("#displayLink").on("click", getData);
	$("#clearLink").on("click", clearLocal);
	$("#addNew").on("click", formBack);
	

 });	