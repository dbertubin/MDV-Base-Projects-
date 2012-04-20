
$(document).ready(function(){	
        $.ajax({
        	"url": "_view/listall",
        	"dataType": "json",
        	"success": function(data){
        		var listAll = {};
        			listAll.groups 
        		console.log(data);
        	}
        });
    })   