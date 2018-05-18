function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rmascotas").addEventListener("invalid", validacion, true);
	document.getElementById("Rmascotas").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("Rmascotas").checkValidity();
if (valido_form){
document.getElementById("Rmascotas").submit();
}
else{
	alert("DATOS GUARDADOS EXITOSAMENTE");
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("nombreCliente").value="";
	document.getElementById("raza").value="";
	document.getElementById("especie").value="";
	document.getElementById("id_txt_descripcion").value="";
	document.getElementById("telefono").value="";
	document.getElementById("nombre").disabled=false;
	document.getElementById("codigo").disabled=false;
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("modalTelefono").hidden=false;
	document.getElementById("modalEspecie").hidden=false;
	document.getElementById("modalRaza").hidden=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("raza").disabled=false;
	document.getElementById("especie").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("id_cmb_sexo").disabled=false;
	document.getElementById("pic").disabled=false;
	document.getElementById("fechaRegistro").disabled=false;
	document.getElementById("fechaDeceso").disabled=false;
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
	document.getElementById("nombre").value="dash";
	document.getElementById("nombreCliente").value="jose";
	document.getElementById("raza").value="greyhound";
	document.getElementById("telefono").value="6495-3261";
	document.getElementById("especie").value="canino";
	document.getElementById("id_txt_descripcion").value="aplicacion de vacuna antirabica";
	document.getElementById("id_cmb_sexo").value=1;
	document.getElementById("fechaRegistro").value="2017-04-20";

}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("pic").disabled=false;
	document.getElementById("telefono").disabled=false;
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("modalTelefono").hidden=false;
	document.getElementById("modalEspecie").hidden=false;
	document.getElementById("modalRaza").hidden=false;
	document.getElementById("raza").disabled=false;
	document.getElementById("especie").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("id_cmb_sexo").disabled=false;
	document.getElementById("fechaRegistro").disabled=false;
document.getElementById("fechaDeceso").disabled=false;
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
