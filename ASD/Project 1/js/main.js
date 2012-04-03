// Bertubin, Derek
//Project  2 ASD 1204 


// Todo for Week 2

// Add $("home").live("pageinit", function(){...});

// convert Function  makeList to var makeList = function(){};

// Go back to wimba and get more pointers 



// $(document).ready(function(){

$('#form').live('pageinit', function(){
	
	var fzForm = $("#form");
	
	var toggleControls = function (n){
	    switch(n){
		    case "on":
		    	$("#fzForm").css("display" , "none");
		    	$("#clear").css("display " , "inline");
		    	$("#displayLink").css("display" , "none");
		    	$("#addNew").css("display " , "inline");
		    	break;
	    	case "off":
	    		$("#form").css("display" , "block");
	    		$("#clear").css("display" , "block");
		    	$("#displayLink").css("display" , "block");
		        $("#addNew").css("display" , "block");
                        $("#items").css("display" , "block");
		    	break;
	    	default:
                        return false;
		}
	};
	
	var formBack = function (){
		toggleControls("off");
	};	

// Store Data
	var storeData = function (key){
		if (!key){
			var id 		= Math.floor(Math.random()*100000001);
		} else {
			id = key;
		};
			 	
		var item 				= {};
			item.groups 		= ["Group:", 			$("groups").value];
			item.taskName	= ["Task Name:", 		$("taskName").value];
			item.taskLength 	= ["Task Length:", 		$("taskLength").value];
			item.completeBy 	= ["Complete By:", 	$("completeBy").value];
			item.notes 		= ["Notes:", 			$("notes").value];	
		localStorage.setItem(id, JSON.stringify(item));
		alert("Task Saved!");
	};
         
// Write date from the local storage to the browser
	var autoFillData = function  () {
		for ( var n in json) {
                var id 		= Math.floor(Math.random()*1000000001);
                localStorage.setItem(id, JSON.stringify(json[n]));
            }
	}; 

	var getData = function (){
		toggleControls("on");
		if (localStorage.length === 0) {
			autoFillData();
			alert("There are no tasks saved so default data was added.");	
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
		$("#groups").value(item.groups[1]);
		$("#taskName").value(item.taskName[1]);
		$("#taskLength").value(item.taskLength[1]);
		$("#completeBy").value(item.completeBy[1]);
		$("#notes").value(item.notes[1]);
		save.unbind("click", storeData);
		$("#submit").value("Edit Task");
		var editSubmit = $("#submit");
	// save key value established in the in this funct is a prop of  the editSubmit 
	//editSubmit .addEventListener("click", validate);
		editSubmit.bind("click", fzForm.validate);
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
	
	var makeItemLinks = function  (key,linksLi){// add single item  edit link
		var editLink =  $("<a></a>");
		editLink.href  = "#";
		editLink.id = "editLink";
		editLink.key = key;
		var editText = "Edit Task";
		editLink.html(editText);
		linksLi.append(editLink);
		editLink.bind("click", editItem);
// add single delete	
		var deleteLink =  $("<a></a>");
		deleteLink.href  =  "#" ;
		deleteLink.attr("id", "deleteItem");
		deleteLink.key = key;
		var deleteText = "Delete Task";
		deleteLink.bind("click", deleteItem);
		deleteLink.html(deleteText);
		linksLi.append(deleteLink);
	};
	var getImage =  function  (catName, makeSubList) {
		var imageLi = $("<li></li>");
		makeSubList.append(imageLi);
		var newImg = $("<img></img>");
		var setSrc = newImg.attr("src", "images/"+catName+".png");
		newImg.attr("id", "img");
		imageLi.append(newImg);
        };		
		var makeDiv = $("<div></div>");
		makeDiv.attr("id", "items");
		var makeList = $("<ul></ul>");
		makeDiv.append(makeList);
		$("#fzForm").after(makeDiv);
		$("#items").css("display", "block");
		for(var i =0, j=localStorage.length; i<j; i++ ){
			var makeLi = $("<li></li>");
			var linksLi =$("<li></li>");
		        linksLi.attr("id" , "linksLi");
			makeList.appendChild(makeLi);
		        //makeList.setAttribute("id","listed");
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from loc stor val back to an object using JSON.parse()
			var object = JSON.parse(value);
			var makeSubList = $("<ul></ul>");
			makeLi.append(makeSubList);
			getImage(object.groups[1], makeSubList);
			for( var n in object){
			    var makeSubLi = document.createElement("li");
                            makeSubList.append(makeSubLi);
			    var optSubText = object[n][0] +" " + object[n][1];
			    makeSubLi.innerHTML = optSubText;
                            makeSubList.attr("id","displayed");
			    makeSubList.append(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete links for each item in local storage	
		}
		
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
	
	$("#displayLink").bind("click", getData);
	$("#clearLInk").bind("click", clearLocal);
	$("#addLink").bind("click", formBack);
	

});	