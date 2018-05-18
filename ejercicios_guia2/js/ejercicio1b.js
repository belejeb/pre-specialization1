
function translatex(x)
{
	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	if(x==100){
	document.getElementById("id_img").style.transform= "translate(100px,50px)";
	}
	else if(x==200){
			document.getElementById("id_img").style.transform= "translate(200px,50px)";
	}
	else if(x==300){
			document.getElementById("id_img").style.transform= "translate(300px,50px)";
	}
	else{
		document.getElementById("id_img").style.transform= "translate(0px,0px)";
	}
}
function translatey(y)
{
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	if(y==100){
	document.getElementById("id_img").style.transform= "translate(50px,100px)";
	}
	else if(y==200){
			document.getElementById("id_img").style.transform= "translate(50px,200px)";
	}
	else if(y==300){
			document.getElementById("id_img").style.transform= "translate(50px,300px)";
	}
	else{
		document.getElementById("id_img").style.transform= "translate(0px,0px)";
	}
}