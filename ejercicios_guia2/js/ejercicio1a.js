
function showValuex(newValue)
{
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	document.getElementById("rangex").innerHTML=newValue;
	if(x==100){
	document.getElementById("id_img").style.transform= "rotateX(100deg)";
	}
	else if(x==200){
			document.getElementById("id_img").style.transform= "rotateX(200deg)";
	}
	else if(x==300){
			document.getElementById("id_img").style.transform= "rotateX(300deg)";
	}
	else{
		document.getElementById("id_img").style.transform= "rotateX(0deg)";
	}
}
function showValuey(newValue)
{
	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	document.getElementById("rangey").innerHTML=newValue;
	if(y==100){
	document.getElementById("id_img").style.transform= "rotateY(100deg)";
	}
	else if(y==200){
			document.getElementById("id_img").style.transform= "rotateY(200deg)";
	}
	else if(y==300){
			document.getElementById("id_img").style.transform= "rotateY(300deg)";
	}
	else{
		document.getElementById("id_img").style.transform= "rotateY(0deg)";
	}
}
function showValuez(newValue)
{var z = document.getElementById("id_z").value;
	z = parseInt(z);
	document.getElementById("rangez").innerHTML=newValue;
	if(z==100){
	document.getElementById("id_img").style.transform= "rotateZ(100deg)";
	}
	else if(z==200){
			document.getElementById("id_img").style.transform= "rotateZ(200deg)";
	}
	else if(z==300){
			document.getElementById("id_img").style.transform= "rotateZ(300deg)";
	}
	else{
		document.getElementById("id_img").style.transform= "rotateZ(0deg)";
	}
}