function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rclientes").addEventListener("invalid", validacion, true);
	document.getElementById("Rclientes").addEventListener("input", controlar, false);

}


function controlar(e)
{
 var elemento=e.target;
 if(elemento.validity.valid)
 {
  elemento.classList.remove('css_error_input');
 elemento.classList.add('css_ok_input');
}
else
{
	elemento.classList.add('css_error_input');
	 elemento.classList.remove('css_ok_input');
  }
}
function validacion(e)
{
var elemento=e.target;

elemento.classList.add('cs_error_input');
}
function enviar(e){
var valido_form = document.getElementById("Rclientes").checkValidity();
if (valido_form){
	alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rclientes").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("apellido").value="";
	document.getElementById("id_txt_direccion").innerHTML="";
	document.getElementById("dui").value="";
	document.getElementById("telefono").value="";
	document.getElementById("correo").value="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("dui").disabled=false;
document.getElementById("fechaRegistro").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("correo").disabled=false;
	document.getElementById("nuevo").disabled=true;
	document.getElementById("modificar").disabled=true;
	document.getElementById("eliminar").disabled=true;
	document.getElementById("guardar").disabled=false;
	document.getElementById("cancelar").disabled=false;
	document.getElementById("cargar").disabled=true;



}
function cargar(){

	document.getElementById("modificar").disabled=false;
	document.getElementById("eliminar").disabled=false;
	document.getElementById("guardar").disabled=true;
	document.getElementById("nuevo").disabled=true;
	document.getElementById("cancelar").disabled=true;
	document.getElementById("cargar").disabled=false;
	document.getElementById("codigo").value="00001";
	document.getElementById("nombre").value="belejeb";
	document.getElementById("apellido").value="santin";
	document.getElementById("id_txt_direccion").value="COLONIA  SANTA  EMILIA BLOCK D8 PASAJE 7 # 191";
	document.getElementById("dui").value="04835292-0";
	document.getElementById("fechaRegistro").value="2017-04-20";


	document.getElementById("telefono").value="2665-9840";

	document.getElementById("correo").value="test_mail@test.com";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("fechaRegistro").disabled=false;

	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("dui").disabled=false;

	document.getElementById("telefono").disabled=false;

	document.getElementById("correo").disabled=false;
	document.getElementById("nuevo").disabled=true;
	document.getElementById("modificar").disabled=true;
	document.getElementById("eliminar").disabled=true;
	document.getElementById("guardar").disabled=false;
	document.getElementById("cancelar").disabled=false;
	document.getElementById("cargar").disabled=true;
}
function borrar(){
	var borrar = confirm("desea eliminar registro");
	if (borrar==true){
		alert("DATOS ELIMINADOS EXITOSAMENTE");
		location.reload(false);
	}

}
function cancelar(){
	location.reload(true);
}
