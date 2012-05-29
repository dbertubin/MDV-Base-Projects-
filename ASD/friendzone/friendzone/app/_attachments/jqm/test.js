
$("#listAll").on("pageinit", function(){	
        $.ajax({
        	"url": "_view/listall",
        	"dataType": "json",
        	"success": function(data){
        		console.log(data);
        		$.each(data.rows, function(index, list){
        			var id 		= list.id
        			var listAll = {};
        				listAll.group 		= list.value.groups;
        				listAll.taskName 	= list.value.taskName;
        				listAll.completeBy	= list.value.completeBy;
        			$(''+
        					'<li>' +
        							'<a href= "listAll.html?listAll=' +'">' +
        							''
        					
        			
        			
        			
        			)
        		})        		
        		console.log(listAll);
        	}
        });
    })   