function (doc){
	if(doc._id > "0"){
		emit(doc.id, {
			"groups":doc.groups,
			"taskName":doc.taskName,
			"taskLength":doc.taskLength,
			"completeBy":doc.completeBy,
			"notes":doc.notes
		});
	}
};