function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rproveedores").addEventListener("invalid", validacion, true);
	document.getElementById("Rproveedores").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("Rproveedores").checkValidity();
if (valido_form){
	alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rproveedores").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("proveedor").value="";
	document.getElementById("contacto").value="";
	document.getElementById("marca").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("producto").value="";
	document.getElementById("telefono").value="";
	document.getElementById("correo").value="";
	document.getElementById("id_txt_direccion").innerHTML="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("proveedor").disabled=false;
	document.getElementById("contacto").disabled=false;
	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("marca").disabled=false;
document.getElementById("descripcion").disabled=false;
	document.getElementById("producto").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("telefono").disabled=false;
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
	document.getElementById("proveedor").value="Purina";
	document.getElementById("marca").value="Purina";
	document.getElementById("id_txt_direccion").value="Bº Concepcion Ave. Alberto Masferrer";
	document.getElementById("contacto").value="Luis Caceres";
	document.getElementById("descripcion").value="Comida para perros";
	document.getElementById("producto").value="Purina Dog";
	document.getElementById("telefono").value="2665-2008";
	document.getElementById("correo").value="test_mail@test.com";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("proveedor").disabled=false;
	document.getElementById("marca").disabled=false;

	document.getElementById("id_txt_direccion").disabled=false;
	document.getElementById("contacto").disabled=false;
	document.getElementById("descripcion").disabled=false;
	document.getElementById("producto").disabled=false;
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
