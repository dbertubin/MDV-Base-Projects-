function (doc){
	if(doc.groups[1] === "collabrative"){
		emit(doc.id, {
			"groups":doc.groups,
			"taskName":doc.taskName,
			"taskLength":doc.taskLength,
			"completeBy":doc.completeBy,
			"notes":doc.notes
		});
	}
};