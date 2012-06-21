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
	var detailId= urlVars()["detailId"];
	console.log(detailId);
	$.couch.db("iawt").view("iawt/details", {
		success:function(detailId) {
			console.log(detailId);
			$.each(detailId.rows, function(index, thing){
				console.log(detailId.rows);
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

