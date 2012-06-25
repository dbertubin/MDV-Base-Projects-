	$('#home').live("pageshow",function(){
		$('#listView').empty();
		$.couch.db("iawt").view("iawt/listAll", {
			success:function(data) {
				console.log(data);
				$.each(data.rows, function(index, thing){
					var name = thing.value.taskName[1];
					var id = thing.id;
					var date = thing.value.completeBy[1];
					var noteLabel = thing.value.notes[0];
					var notes = thing.value.notes[1];
					$(''+
							'<li>' +
							'<a href= details.html?detailId=' + id + '>'  +
							'<h4>' + name +'</h4>' +
							'</a>' +
							'</li>'	
							
						).appendTo('#listView');
				});
				$('#listView').listview('refresh');
			}
		});
	});
	
	$('#current').live("pageshow",function(){
		$('#currentView').empty();
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
							'</a>' +
							'</li>'	
							
						).appendTo('#currentView');
				});
				$('#currentView').listview('refresh');
			}
		});
	});
	
	$('#future').live("pageshow",function(){
		$('#futureView').empty();
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
							'</a>' +
							'</li>'	
							
						).appendTo('#futureView');
				});
				$('#futureView').listview('refresh');
			}
		});
	});
	
	$('#collabrative').live("pageshow",function(){
		$('#collabrativeView').empty();
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
							'</a>' +
							'</li>'	
							
						).appendTo('#collabrativeView');
				});
				$('#collabrativeView').listview('refresh');
			}
		});
	});
	
	
	$('#bucket').live("pageshow",function(){
		$('#bucketView').empty();
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
							'</a>' +
							'</li>'	
							
						).appendTo('#bucketView');
				});
				$('#bucketView').listview('refresh');
			}
		});
	});
	
	
	$('#sharedBucket').live("pageshow",function(){
		$('#sharedBucketView').empty();
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
							'</a>' +
							'</li>'	
							
						).appendTo('#sharedBucketView');
				});
				$('#sharedBucketView').listview('refresh');
			}
		});
	});
	
	var urlVars = function(){
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
		console.log("details page active");
		var detailId = urlVars()["detailId"];
		console.log("the id in view: ", detailId);
		$.couch.db('iawt').openDoc(detailId, {
			"success":function(data) {
				console.log(data);
					$(''+
						'<ul>'+
						'<li><img src="' + data.groups[1] + '.png"></li>' +
						'<li><h4>' + data.taskName[0] +'</h4>' + '<h4>' + data.taskName[1] +'</h4></li>' +
						'<li><h4>' + "Excitement Level:" +'</h4>' + '<h4>' + data.taskLength[1] +'</h4></li>' +
//						'<li><h4>' + data.completeBy[0] +'</h4>' + '<h4>' + data.completeBy[1] +'</h4></li>' +
						'<li><h4>' + data.notes[0] +'</h4>' +'<h4>' + data.notes[1] +'</h4></li>' +
						'</ul>'
					).appendTo('#detailview').trigger('create');
					$(''+
							'<a id= "editLink" href= editForm.html?detailId=' + detailId + '>' +
							 'Edit This?' +
							 '</a>'
					).appendTo('#editLink').trigger('create');
				console.log(detailId);
			    var detailId = {};
			    var setObject = function(object){
			        detailId._id = object._id;
			        detailId._rev = object._rev;
			        console.log("id: ", detailId);
			    };
			
			    function splitURL(){
			        var urlData = $($.mobile.activePage).data('url');
			        var urlParts = urlData.split('?');
			        var urlVals = urlParts[1].split('&');
			        console.log(urlVals);
			        var idVals = {};
			        for (var i in urlVals){
			            var keyValue = urlVals[i].split('=');
			            var key = decodeURIComponent(keyValue[0]);
			            var value = decodeURIComponent(keyValue[1]);
			            idVals[key] = value;
			        }
			        console.log("URL Split");
			        console.log(idVals[key]);
			        return(idVals[key]);
			    }
			    
			        var itemToChange = splitURL();
			        function loadItemData(itemToChange){
			        	var thisItem;
			        	console.log(thisItem);
			        	$.couch.db('iawt').openDoc(itemToChange, {
			        		success: function(data) {
			        			thisItem = data;
			        			console.log(thisItem);
			        			$('#taskName').val(data.taskName[1]).trigger('create');
			        			console.log(data.taskName[1]);
			        			$('#taskLength').val(data.taskLength[1]);
			        			$('#groups').val(data.groups[1]);
			        			$('#completeBy').val(data.completeBy[1]);
			        			$('#notes').val(data.notes[1]);
			        		}
			        	})
			        }
			    


			    $('#removeItem').on("click", function(event){
			        event.preventDefault();
			        $.couch.db('iawt').openDoc(itemToChange, {
			            success: function(data) {
			            	thisItem = data;
			                console.log(thisItem);
			                removeItem = {};
			                removeItem._id = thisItem._id;
//			                console.log(thisItem._id);
			                removeItem._rev = thisItem._rev;
//			                console.log(thisItem._rev);
//			                console.log(removeItem);
			                $.couch.db('iawt').removeDoc(removeItem, {
			                	success: function(data) {
			                		console.log("Deleted");
			                		alert("This thing has been deleted. Either you have crossed something off your list or changed your mind, either way it's now off your list!");
			                		$.mobile.changePage('index.html',{transition: 'slideup'});
			                	}
			                })
			            }
			        })
			    })
			}
		})
	})
	
	
	$('#editForm').live('pageshow', function(){                   
		console.log("edit pages");
	    var detailId = {};
	    var setObject = function(object){
	        detailId._id = object._id;
	        detailId._rev = object._rev;
	        console.log("id: ", detailId);
	    };
	
	    function splitURL(){
	        var urlData = $($.mobile.activePage).data('url');
	        var urlParts = urlData.split('?');
	        var urlVals = urlParts[1].split('&');
	        console.log(urlVals);
	        var idVals = {};
	        for (var i in urlVals){
	            var keyValue = urlVals[i].split('=');
	            var key = decodeURIComponent(keyValue[0]);
	            var value = decodeURIComponent(keyValue[1]);
	            idVals[key] = value;
	        }
	        console.log("URL Split");
	        console.log(idVals[key]);
	        return(idVals[key]);
	    }
	    
	        var itemToChange = splitURL();
	        function loadItemData(itemToChange){
	        	var thisItem;
	        	console.log(thisItem);
	        	$.couch.db('iawt').openDoc(itemToChange, {
	        		success: function(data) {
	        			thisItem = data;
	        			console.log(thisItem);
	        			$('#taskName').val(data.taskName[1]).trigger('create');
	        			console.log(data.taskName[1]);
	        			$('#taskLength').val(data.taskLength[1]);
	        			$('#groups').val(data.groups[1]);
	        			$('#completeBy').val(data.completeBy[1]);
	        			$('#notes').val(data.notes[1]);
	        		}
	        	})
	        }
	    


	    $('#removeItem').on("click", function(event){
	        event.preventDefault();
	        $.couch.db('iawt').openDoc(itemToChange, {
	            success: function(data) {
	            	thisItem = data;
	                console.log(thisItem);
	                removeItem = {};
	                removeItem._id = thisItem._id;
//	                console.log(thisItem._id);
	                removeItem._rev = thisItem._rev;
//	                console.log(thisItem._rev);
//	                console.log(removeItem);
	                $.couch.db('iawt').removeDoc(removeItem, {
	                	success: function(data) {
	                		console.log("Deleted");
	                		alert("This thing has been deleted. Either you have crossed something off your list or changed your mind, either way it's now off your list!");
	                		$.mobile.changePage('index.html',{transition: 'slideup'});
	                	}
	                })
	            }
	        })
	    })
	    $('#updateItem').on("click", function(event){
	        event.preventDefault();
	        $.couch.db('iawt').openDoc(itemToChange, {
	        	success: function(data) {
	        		console.log("upadte fires");
	        		thisItem = data;
	    	        updateItem = {};
	    	        updateItem._id = thisItem._id;
	    	        
	    	        console.log(updateItem);
	    	        updateItem._rev = thisItem._rev;
	    	        $("#groups").val(updateItem.groups[1]);
	    			$("#taskName").val(updateItem.taskName[1]);
	    			$("#taskLength").val(updateItem.taskLength[1]);
	    			$("#completeBy").val(updateItem.completeBy[1]);
	    			$("#notes").val(updateItem.notes[1]);
	    	        
//	    	        updateItem.taskName = $('#taskName').val();
//	    	        updateItem.taskLength = $('#taskLength').val();
//	    	        updateItem.groups = $('#groups').val([1]);
//	    	        updateItem.completeBy = $('#completeBy').val();
//	    	        updateItem.notes = $('#notes').val();

	    	        $.couch.db('iawt').saveDoc(updateItem, {
	    	            success: function(data) {
	    	                $.mobile.changePage("index.html")
	    	            }
	    	        })
	        	}
	     
	        
	        });
	    });
	});
////***************************************************			
	$('#iawtForm').live('pageinit', function(){
		
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
				console.log(item.groups);
				item.taskName		= ["Task Name:", 		$("#taskName").val()];
				console.log(item.taskName);
				item.taskLength 	= ["Task Length:", 		$("#taskLength").val()];
				console.log(item.taskLength);
				item.completeBy 	= ["Complete By:", 	$("#completeBy").val()];
				console.log(item.completeBy);
				item.notes 			= ["Notes:", 			$("#notes").val()];	
				console.log(item.notes);
			$.couch.db('iawt').saveDoc(item, {
				success: function(saved){
					console.log(saved, "was saved");
					$.mobile.changePage('index.html',{transition: 'slideup'});
				}
			});
			
			
		};	         
// Write date from the local storage to the browser
		var autoFillData = function  () {
			for ( var n in json) {
	                var id 		= Math.floor(Math.random()*1000000001);
	                //localStorage.setItem(id, JSON.stringify(json[n]));
	               
	            }
		};
// Edit Item 
		var editItem = function () {
// Grab the datafrom local Storage 
			var value = localStorage.getItem(this.key);
			var item = jQuery.parseJSON(value);
			var save = $("submit");
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
				makeList.attr("data-role", "listview");
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
	            makeSubList.append(makeLink).appendTo("#itemList").trigger('create');;
	        }; // end for loop
	//        $("ul").listview('refresh');
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
	//		window.location.reload();
			}
		});	
		
	
		
		$("#submit").on("click", storeData);
		$("#editLink").on("click", function(){
			$.mobile.changePage('editForm.html',{transition: 'slideup'});
		});
//		$("#clearLink").on("click", clearLocal);
//		$("#addNew").on("click", );
		
	
	 });	