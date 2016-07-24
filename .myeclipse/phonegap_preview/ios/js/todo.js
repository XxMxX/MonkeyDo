function getArray()
{
	var toDoList = new Array;                                    //Create an Array
	var taskStr = LocalStorage.getItem(toDoList);            //Get the Task from Input using LocalStorage
	if(taskStr !== null);                                                         //if the value is NOT empty --null--
	{
		toDoList = JSON.parse(taskStr);
	}
	return toDoList;
}

function addTask()
{
	var task = document.getElementById("taskName").value;               //creating a variable to hold value of input
	var array = getArray();                                           //creating a variable to hold our Array
	array.push(task);                                                   //pushing the task into the Array
	localStorage.setItem(array,JSON.stringify(task));   //store the task LocalStorage saving it to the Array
	
	show();
	
	return false;
}

function show()
{
var array = getArray();                                                //create variable to hold Array
var htmlFormat ="<ul>";	                                                                //add unordered list
for (var i=0; i<array.length;i++);	//create a For Loop to display the Array
{
htmlFormat += "<li>" +array [i]+"<li>";
}
htmlFormat += "</ul>";
document.getElementById(array).innerHTML = htmlFormat;                            //Show the Document 
}
document.getElementbyid('add').addEventListener('click', addTask);
show();

