
function transicionx(x)
{
	
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	if(x==1){
	document.getElementById("id_img").style.transition=  'width 1s';
	}
	else if(x==2){
			document.getElementById("id_img").style.transition=  'width 2s';
	}
	else if(x==3){
			document.getElementById("id_img").style.transition=  'width 3s';
	}
	else{
		document.getElementById("id_img").style.transition=  'width 0s';
	}
}
function transiciony(y)
{

	var y = document.getElementById("id_y").value;
	y = parseInt(y);
	if(y==1){
	document.getElementById("id_img").style.transition=  'height 1s';
	}
	else if(y==2){
			document.getElementById("id_img").style.transition=  'height 2s';
	}
	else if(y==3){
			document.getElementById("id_img").style.transition=  'height 3s';
	}
	else{
		document.getElementById("id_img").style.transition=  'height 0s';
	}
}