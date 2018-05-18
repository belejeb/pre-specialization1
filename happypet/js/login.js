function login(){
	Notification.requestPermission();
	var usuario =document.getElementById("id_txt_usuario").value;
	var pass = document.getElementById("id_txt_password").value;
	if (usuario== "admin" && pass=="clave"){

		window.location.href="admin/main.html";

	}
	else if(usuario=="user" && pass=="clave"){
		window.location.href="user/main.html";
	}
	else if(usuario=="veterinario" && pass=="clave"){
		window.location.href="veterinario/main.html";
	}
	if (usuario != "admin" && usuario!="user" && usuario!="veterinario"){
		document.getElementById("id_txt_usuario").style.backgroundColor="red";

	}
	else {
		document.getElementById("id_txt_usuario").style.backgroundColor="#ffffff"
	}

	if (pass!="clave"){
		document.getElementById("id_txt_password").style.backgroundColor="red";

	}
	else{
		document.getElementById("id_txt_password").style.backgroundColor="#ffffff";

	}
	var icono="";
	var mensaje="";
	if (usuario=="admin"){
		icono = "../imagenes/Logo_HappyPet.png";
		mensaje="Hola "+usuario+" bienvenido.";
	}
	else if(usuario=="user"){
		icono = "../imagenes/Logo_HappyPet.png";
		mensaje="Hola "+usuario+" bienvenido.";
	}
	else if(usuario=="veterinario"){
		icono = "../imagenes/Logo_HappyPet.png";
		mensaje="Hola "+usuario+" bienvenido.";
	}
	else{
		icono = "../imagenes/Logo_HappyPet.png";
		mensaje="usuario: "+usuario+" desconocido.";
	}
	var title ="Ingresar al sistema happypet";
	var extra={
		icon : icono,
		body: mensaje
	}
	var notificacion = new Notification( title,extra);
	setTimeout(function(){notificacion.close()},1000);

		}
