function ingresar() 
{
	var usuario = document.getElementById('univo_usuario').value;
	var password = document.getElementById('univo_pass').value;
	//VALIDAR USUARIO
	if (usuario == "") 
	{
		document.getElementById("univo_usuario").classList.remove("input_ok");
		document.getElementById("univo_usuario").classList.add("input_requerido");
	}
	else
	{
		document.getElementById("univo_usuario").classList.remove("input_requerido");
		document.getElementById("univo_usuario").classList.add("input_ok");
	}

	//VALIDAR PASSWORD
	if (password == "") 
	{
		document.getElementById("univo_pass").classList.remove("input_ok");
		document.getElementById("univo_pass").classList.add("input_requerido");
	}
	else
	{
		document.getElementById("univo_pass").classList.remove("input_requerido");
		document.getElementById("univo_pass").classList.add("input_ok");
	}

	if (usuario!="" && password!="")
	{
		alert("CORRECTO USTED INGRESARA...");
	}
	else
	{
		alert("ERROR, INGRESAR LOS DATOS");
	}
}

function limpiar()
{
	document.getElementById("univo_usuario").value = "";
	document.getElementById("univo_pass").value = "";
	document.getElementById("univo_usuario").classList.remove("input_ok");
	document.getElementById("univo_usuario").classList.remove("input_requerido");
	document.getElementById("univo_pass").classList.remove("input_ok");
	document.getElementById("univo_pass").classList.remove("input_requerido");
}