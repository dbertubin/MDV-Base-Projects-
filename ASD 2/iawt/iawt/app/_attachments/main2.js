$('#home').live("pageshow",function(){
	$.couch.db("iawt").view("iawt/listAll", {
		success:function(data) {
			console.log(data);
			$.each(data.rows, function(index, thing){
				var name = thing.value.taskName[1];
				var id = thing.id;
				console.log(name);
				console.log(id);
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
	console.log("page active");
	var detailId = urlVars()["detailId"];	
	$.ajax({
		"url": "http://127.0.0.1:5984/iawt/" + detailId ,
		"type" : "GET",
		"dataType": "json",
		"success":function(data) {
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
		/*	console.log(data);
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
					).appendTo('#sharedBucketView');*/
			}
		});
		});
		//	$('#detailview').listview('refresh');
		

	
	


