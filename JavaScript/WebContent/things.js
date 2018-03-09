var myButton = document.getElementById('myButton');
var list = document.getElementById('myList');
var newList = document.getElementById('new');
var counter = 1;

myButton.addEventListener("click", toAdd);

function toAdd() 
{
	var text = document.getElementById('thing').value;
	var entry = document.createElement('LI');
   	entry.appendChild(document.createTextNode(text));
    list.appendChild(entry);
}

list.addEventListener("click", activatePriority);

function activatePriority(e) 
{
	if(e.target.nodeName == 'LI') 
	{
		newList.appendChild(e.target);
	}	
}

newList.addEventListener("click", deleteI);

function deleteI(e)
{
	if(e.target.nodeName == 'LI') 
	{
		newList.removeChild(e.target);
	}
}