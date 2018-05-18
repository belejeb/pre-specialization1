
function delay(x)
{
	
	var x = document.getElementById("id_x").value;
	x = parseInt(x);
	if(x==1){
	document.getElementById("id_img").style.transition=  'width 1s ease 1s';
	}
	else if(x==2){
			document.getElementById("id_img").style.transition=  'width 1s ease 2s';
	}
	else if(x==3){
			document.getElementById("id_img").style.transition=  'width 1s ease 3s';
	}
	else{
		document.getElementById("id_img").style.transition=  'width 0s';
	}
}
