//declare global variables
var inputs,container;
var currentColor;


function start(){
	//get instances of the relevant sliders
	inputs = document.getElementsByClassName("input-class");
	container = document.getElementById("color-display-container");
	currentColor = document.getElementById("current-color");

for(var i = 0;i < inputs.length;i++)
	inputs[i].addEventListener("change",update);

}




function update(){
	
let obj = this;
		if(this.getAttribute("id")==="red")
			changeColor(1,3);
		if(this.getAttribute("id")==="green")changeColor
			(3,5);
		if(this.getAttribute("id")==="blue")
			changeColor(5,7)
		
//to handle the logic if the word is not a two digit word
function hexString(){
var colorString = parseInt(obj.value).toString(16)
if(colorString.length === 2)
	return colorString;
else
{
colorString = "0" + colorString;
return colorString;	
}
}

function changeColor(i,j){
currentColor.innerHTML = currentColor.innerHTML.replace(currentColor.innerHTML.substring(i,j),hexString());
container.style.background = currentColor.innerHTML;
currentColor.style.color = currentColor.innerHTML;
}	
}

window.addEventListener("load",start,false)