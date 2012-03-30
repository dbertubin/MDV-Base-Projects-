$(document).ready(function(){

	function getElem(x){	
		var theElement = document.getElementById(x);
 		return theElement;
  	};
	function makeGroup(){
		var formTag= document.getElementsByTagName("form"),// form tag is an arrray of all the form tags 
			selectLI = getElem("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups");
		for(var i = 0, j = priorityGroups.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = priorityGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}					
		selectLI.appendChild(makeSelect);	
	}
	function toggleControls(n){
	    switch(n){
		    case "on":
		    	getElem("addTask").style.display = "none";
		    	getElem("clear").style.display = "inline";
		    	getElem("displayLink").style.display = "none";
		    	getElem("addNew").style.display = "inline";
		    	break;
	    	case "off":
	    		getElem("addTask").style.display = "block";
	    		getElem("clear").style.display = "inline";
		    	getElem("displayLink").style.display = "inline";
		        getElem("addNew").style.display = "none";
                        getElem("items").style.display = "none";
		    	break;
	    	default:
                        return false;
		}
	}	
	// Store Data 	
	function storeData(key){
		if (!key){
			var id 		= Math.floor(Math.random()*100000001);
		} else {
			id = key;
		}
			 	
		var item 			= {};
			item.groups 	= ["Group:", getElem("groups").value];
			item.taskName	= ["Task Name:", getElem("taskName").value];
			item.taskLength = ["Task Length:", getElem("taskLength").value];
			item.completeBy = ["Complete By:", getElem("completeBy").value];
			item.notes 		= ["Notes:", getElem("notes").value];	
		localStorage.setItem(id, JSON.stringify(item));
		alert("Task Saved!");
	}
        function setSlideValue () {
            var slideValue = getElem("taskLength").value;
            
        }
            
        
        
	// Write date from the local storage to the browser
	function getData(){
		if (localStorage.length === 0) {
                  autoFillData();
                    alert("There are no tasks saved so default data was added.");	
		} 
		toggleControls("on");
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		getElem("items").style.display = "block";
		for(var i =0, j=localStorage.length; i<j; i++ ){
			var makeLi = document.createElement("li");
			var linksLi =document.createElement("li");
		        linksLi.setAttribute("id","linksLi");
			makeList.appendChild(makeLi);
		        //makeList.setAttribute("id","listed");
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from loc stor val back to an object using JSON.parse()
			var object = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			getImage(object.groups[1], makeSubList);
			for( var n in object){
			    var makeSubLi = document.createElement("li");
                            makeSubList.appendChild(makeSubLi);
			    var optSubText = object[n][0] +" " + object[n][1];
			    makeSubLi.innerHTML = optSubText;
                            makeSubList.setAttribute("id","displayed");
			    makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete links for each item in local storage	
		}
	}
	function getImage (catName, makeSubList) {
            var imageLi = document.createElement("li");
            makeSubList.appendChild(imageLi);
            var newImg = document.createElement("img");
            var setSrc = newImg.setAttribute("src", "images/"+catName+".png");
            newImg.setAttribute("id", "img");
            imageLi.appendChild(newImg);
        }
	function makeItemLinks (key,linksLi){
	// add single item  edit link
		var editLink =  document.createElement("a");
		editLink.href  = "#";
		editLink.id = "editLink";
		editLink.key = key;
		var editText = "Edit Task";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML  =  editText;
		linksLi.appendChild(editLink);
	// add link break	
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);
	// add single delete	
		var deleteLink =  document.createElement("a");
		deleteLink.href  =  "#" ;
		deleteLink.id = "deleteLink";
		deleteLink.key = key;
		var deleteText = "Delete Task";
		deleteLink.addEventListener("click",  deleteItem);
		deleteLink.innerHTML  =  deleteText;
		linksLi.appendChild(deleteLink);
	}		
	function editItem() {
	// Grab the datafrom local Storage 
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
	//Show the form 
		toggleControls("off");
	// populate form fields with current local stortage values.	
		getElem("groups").value 	    = item.groups[1];
		getElem("taskName").value 	    = item.taskName[1];
		getElem("taskLength").value 	    = item.taskLength[1];
		getElem("completeBy").value     = item.completeBy[1];
		getElem("notes").value 		    = item.notes[1];
		
		save.removeEventListener("click", storeData);
		getElem("submit").value = "Edit Task";
		var editSubmit = getElem("submit");
	// save key value established in the in this funct is a prop of  the editSubmit 
	//editSubmit .addEventListener("click", validate);
		editSubmit.key = this.key;
		
	}
	function deleteItem(){
		var ask = confirm(" Are you sure that you want to delete this Task?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Task is Deleted!");
			window.location.reload();
		} else {
			alert("Task was not Deleted!");
		}
	}
	function clearLocal(){
		if(localStorage.length === 0){
		alert("There are no tasks to clear!");	
		} else {
                    localStorage.clear();
                    alert("All tasks are deleted!");
                    window.location.reload();
                    return false;
		}
	}

	function autoFillData () {
           
            // Store the Json object in to LS
            for ( var n in json) {
                var id 		= Math.floor(Math.random()*1000000001);
                localStorage.setItem(id, JSON.stringify(json[n]));
            }
    }
	function validate (e) {
            
	// defineing elements that we need to validate
		var getGroup 		=  getElem("groups");
		var getTaskName 	= getElem("taskName");
		var getCompleteBy 	= getElem("completeBy");
	// reset error messages
                errMsg.innerHTML = " "
                getGroup.style.border 		= "1px solid grey" ;
                getTaskName.style.border 	= "1px solid grey" ;
                getCompleteBy.style.border 	= "1px solid grey" ;		
	//Get  error messages 	
		var messageArray = []
	// group validation
		if (getGroup.value ==="--From Highest to Lowest of Priority--"){
			var  groupError = "Please select a Priority!";
			getGroup.style.border = "1px solid red" ;
			messageArray.push(groupError);
		};
		if (getTaskName.value ==="")  {
			var taskNameError = "Please Enter a Task Name!";
			getTaskName.style.border = "1px solid red" ;
			messageArray.push(taskNameError);
		};
		var dateRegEx  = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])getElem/;
		if (!(dateRegEx.exec(getCompleteBy.value))){
			var dateError = "Please enter date in yyyy-mm-dd format!";
			getCompleteBy.style.border = "1px solid red" ;
			messageArray.push(dateError);
		};
		// there were errors display
		if (messageArray.length >= 1) {
			for(var i = 0, j= messageArray.length; i<j; i++){
				var txt = document.createElement("li");
                                txt.setAttribute("id","txt");
				txt.style.color = "red"
				txt.innerHTML = messageArray[i];
				getElem("errors").appendChild(txt);
			}		
			e.preventDefault();
			return false;
		} else {
			storeData(this.key);
		}
	}
// Var defaults 
	var priorityGroups = ["--Choose Type of Thing to Do--", "Current Things to Do","Future Things to Do","Things to Do with Friends","Bucket List","Shared Bucket Lists"];
	//	var	selectDueValue = "No";  // 
	errMsg = getElem("errors");
	makeGroup();
	//Set up Links & Submit Click Events 
	var displayLink = getElem("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = getElem("clear");
	clearLink.addEventListener('click', clearLocal)
	var save = getElem('submit');
	save.addEventListener('click', validate);
        var setValue = getElem("taskLength");
            setValue.addEventListener(blur, setSlideValue);
});	