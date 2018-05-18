
function torcionx(x)
{
	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	if(x==100){
	document.getElementById("id_img").style.transform= "skew(100deg,50deg)";
	}
	else if(x==200){
			document.getElementById("id_img").style.transform= "skew(200deg,50deg)";
	}
	else if(x==300){
			document.getElementById("id_img").style.transform= "skew(300deg,50deg)";
	}
	else{
		document.getElementById("id_img").style.transform= "skew(0deg,0deg)";
	}
}
function torciony(y)
{
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	if(y==100){
	document.getElementById("id_img").style.transform= "skew(50deg,100deg)";
	}
	else if(y==200){
			document.getElementById("id_img").style.transform= "skew(50deg,200deg)";
	}
	else if(y==300){
			document.getElementById("id_img").style.transform= "skew(50deg,300deg)";
	}
	else{
		document.getElementById("id_img").style.transform= "skew(0deg,0deg)";
	}
}