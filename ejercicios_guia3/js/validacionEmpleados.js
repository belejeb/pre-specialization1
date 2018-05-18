function iniciar()
{   
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rempleados").addEventListener("invalid", validacion, true);
	document.getElementById("Rempleados").addEventListener("input", controlar, false);
	
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
function enviar(){
var valido_form = document.getElementById("Rempleados").checkValidity();
if (valido_form){
document.getElementById("Rempleados").submit();
	}
	else{
	alert("ERROR: REVISAR FORMULARIO");
}
}
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("apellido").value="";
	document.getElementById("id_cmb_sexo").value="";
	document.getElementById("pic").defaultValue="";
	document.getElementById("id_txt_direccion").innerHTML="";
	document.getElementById("DUI").value="";
	document.getElementById("NIT").value="";
	document.getElementById("ISSS").value="";
	document.getElementById("NUP").value="";
	document.getElementById("telefono").value="";
	document.getElementById("celular").value="";
	document.getElementById("correo").value="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("id_cmb_sexo").disabled=false;
	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("DUI").disabled=false;
	document.getElementById("DUI").disabled=false;
	document.getElementById("pic").disabled=false;
	document.getElementById("curriculum").disabled=false;
	document.getElementById("NIT").disabled=false;
		document.getElementById("DUI").disabled=false;
	document.getElementById("ISSS").disabled=false;
	document.getElementById("DUI").disabled=false;
	document.getElementById("NUP").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("celular").disabled=false;
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
	document.getElementById("codigo").value="0001";
	document.getElementById("nombre").value="belejeb";
	document.getElementById("apellido").value="santin";
	document.getElementById("id_cmb_sexo").value=2;
	document.getElementById("pic").defaultValue="../../imagenes/male.png";
	document.getElementById("id_txt_direccion").innerHTML="COLONIA  SANTA  EMILIA BLOCK D8 PASAJE 7 # 191";
	document.getElementById("DUI").value="04835292-0";
	document.getElementById("NIT").value="9384-230693-101-1";
	document.getElementById("ISSS").value="123456789";
	document.getElementById("NUP").value="00000000000";
	document.getElementById("telefono").value="2665-9840";
	document.getElementById("celular").value="6985-0387";
	document.getElementById("correo").value="test_mail@test.com";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("id_cmb_sexo").disabled=false;
	document.getElementById("NUP").disabled=false;
	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("DUI").disabled=false;
	document.getElementById("NIT").disabled=false;
	document.getElementById("pic").disabled=false;
	document.getElementById("curriculum").disabled=false;
	document.getElementById("ISSS").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("celular").disabled=false;
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
		alert("DATOS BORRADOS EXITOSAMENTE");
		location.reload(false);
	}
	
}
function cancelar(){
	location.reload(true);
}
function nacionalidad(){
	var nacional = document.getElementById("id_cmb_nacionalidad").value
	nacional = parseInt(nacional);
	if(nacional==1){
		document.getElementById("pasaporte").disabled =true;
	
	}
	else {
		document.getElementById("pasaporte").disabled=false;
	}
}
window.addEventListener("load",iniciar,false);
