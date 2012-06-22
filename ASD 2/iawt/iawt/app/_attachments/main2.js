	$('#home').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/listAll", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#listView');
				});
				$('#listView').listview('refresh');
			}
		});
	});
	
	$('#current').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/current", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#currentView');
				});
				$('#currentView').listview('refresh');
			}
		});
	});
	
	$('#future').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/future", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#futureView');
				});
				$('#futureView').listview('refresh');
			}
		});
	});
	
	$('#collabrative').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/collabrative", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#collabrativeView');
				});
				$('#collabrativeView').listview('refresh');
			}
		});
	});
	
	
	$('#bucket').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/bucket", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#bucketView');
				});
				$('#bucketView').listview('refresh');
			}
		});
	});
	
	
	$('#sharedbucket').live("pageshow",function(){
		$.couch.db("iawt").view("iawt/sharedbucket", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					console.log(name);
					console.log(id);
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'<h5>' + date +'</h5>' +
							'<h5>' + noteLabel + '</h5>' +
							'<h5>' + notes + '</h5>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#sharedBucketView');
				});
				$('#sharedBucketView').listview('refresh');
			}
		});
	});
/*	var urlVars = function(){
		var urlData = $($.mobile.activePage).data('url');
		var urlParts = urlData.split('?');
		var urlPairs = urlParts[1].split('&');
		var urlValues ={};
		for (var pair in urlPairs) {
			var keyValue = urlPairs[pair].split('=');
			var key = decodeURIComponent(keyValue[0]);
			var value = decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		};
		return urlValues;
		console.log(urlValues);
	};
	
	
	
	$('#details').live("pageshow",function(){
		console.log("page active");
		var detailId = urlVars()["detailId"];	
		$.ajax({
			"url": "http://127.0.0.1:5984/iawt/" + detailId ,
			"type" : "GET",
			"dataType": "json",
			"success":function(detailId) {
				for (var i = 0 , j = data.length; i<j; i++){
					var thing = data.length[i];
					$(''+
						'<li>' +
						'<a href="#example">' +
						'<img src=" + thing.groups[1] + .png">' +
						'<h4>' + thing.taskName[1] +'</h4>' +
						'</a>' +
						'</li>'							
					).appendTo('#detailview');
				};
				console.log(detailId);
				$.each(data.values, function(index, thing){
					console.log(data.values);
					var name = thing.value.taskName[1];
					console.log(thing);
					$(''+
							'<li>' +
							'<a href="#example">' +
							'<h4>' + name +'</h4>' +
							'</a>' +
							'</li>'							
						).appendTo('#detailview');
				});
				$('#detailview').listview('refresh');
			}
		});
	}); */
			
	$('#form').live('pageinit', function(){
		
		
		var toggleControls = function (n){
		    switch(n){
			    case "on":
			    	$("#friendForm").css("display" , "none");
			    	$("#clear").css("display " , "inline");
			    	$("#displayLink").css("display" , "none");
			    	$("#addNew").css("display " , "block");
			    	$('#items').css("display" , "block");
			    	$('#itemList').empty();
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
			console.log("store Fired!")
			if (!key){
				var id 		= Math.floor(Math.random()*100000001);
			} else {
				 id = key;
			};
				 	
			var item 				= {};
				item.groups 		= ["Group:", 			$("#groups").val()];
				item.taskName		= ["Task Name:", 		$("#taskName").val()];
				item.taskLength 	= ["Task Length:", 		$("#taskLength").val()];
				item.completeBy 	= ["Complete By:", 	$("#completeBy").val()];
				item.notes 			= ["Notes:", 			$("#notes").val()];	
			localStorage.setItem(id, JSON.stringify(item));
			
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
	/*	var getImage =  function  (catName, makeSubList) {
			var imageLi = $("<li></li>");
			makeSubList.append(imageLi);
			var newImg = $("<img></img>");
			var setSrc = newImg.attr("src", catName+".png");
		//	newImg.attr("id", "img");
			imageLi.append(newImg);
	    };	*/
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
				makeList.attr("id" , "itemList");
				makeDiv.append(makeList);
			$("#friendForm").after(makeDiv);
		//	$("#items").css("display", "block");
			for(var i =0, j=localStorage.length; i<j; i++ ){
				var makeLi = $("<li></li>");
				var linksLi =$("<li></li>");
				makeList.append(makeLi);
				var key = localStorage.key(i);
					console.log(key);
				var value = localStorage.getItem(key);
				var item = jQuery.parseJSON(value);
					console.log(item);
				var makeSubList = $("<li></li>");
				var makeSubLi = $( "<h3>"+item.taskName[1]+"</h3>"+
		                "<p><strong>"+item.groups[1]+"</strong></p>"+
		                "<p>"+item.completeBy[1]+"</p>" +
		                "<p>"+item.notes[1]+"</p>" );
				var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
	            makeLink.on('click', function(){
	                console.log("This is my key: "+this.id);
	            });
	            makeLink.html(makeSubLi);
	            makeSubList.append(makeLink).appendTo("#itemList");
	        }; // end for loop
	        $("ul").listview('refresh');
	    };  // end storage.on
		        
					
	
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