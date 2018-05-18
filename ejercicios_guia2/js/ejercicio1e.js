
function efecto(x)
{
	
	var x = document.getElementById("id_cmb_efecto").value;
	x = parseInt(x);
	if(x==1){
	document.getElementById("id_img").style.transition=  'width 1s ease 1s';
	}
	else if(x==2){
			document.getElementById("id_img").style.transition=  'width 2s linear ';
	}
	else if(x==3){
			document.getElementById("id_img").style.transition=  'width 3s ease-in ';
	}
	else if(x==4){
		document.getElementById("id_img").style.transition=  'width 4s ease-out ';
	}
	else{
		document.getElementById("id_img").style.transition=  'width 2s';
	}
}
