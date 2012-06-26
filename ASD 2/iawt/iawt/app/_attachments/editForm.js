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
	        			console.log("Load should work");
	        			thisItem = data;
	        			setObject(data);
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
	        // ADDED TO SEE IFF I CAN COMMIT........
	        var currentItem = loadItemData(itemToChange)
	        
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
		    	        
//		    	        updateItem.taskName = $('#taskName').val();
//		    	        updateItem.taskLength = $('#taskLength').val();
//		    	        updateItem.groups = $('#groups').val([1]);
//		    	        updateItem.completeBy = $('#completeBy').val();
//		    	        updateItem.notes = $('#notes').val();

		    	        $.couch.db('iawt').saveDoc(updateItem, {
		    	            success: function(data) {
		    	                $.mobile.changePage("index.html")
		    	            }
		    	        })
		        	}
		     
		        
		        });
		    });
});
