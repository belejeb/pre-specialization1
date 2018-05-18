function login(){
	var usuario =document.getElementById("id_txt_usuario").value;
	var pass = document.getElementById("id_txt_password").value;
	if (usuario== "admin" && pass=="clave"){
		
		window.location.href="clientes.html";
		
	}
	else if(usuario=="user" && pass=="clave"){
		window.location.href="clientesUser.html";
	}
	if (usuario != "admin" && usuario!="user"){
		document.getElementById("id_txt_usuario").style.backgroundColor="blue";
		
	}
	else {
		document.getElementById("id_txt_usuario").style.backgroundColor="#ffffff"
	}
	
	if (pass!="clave"){
		document.getElementById("id_txt_password").style.backgroundColor="blue";
		
	}
	else{
		document.getElementById("id_txt_password").style.backgroundColor="#ffffff";
		
	}
}