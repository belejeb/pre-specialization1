function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("RfichaMed").addEventListener("invalid", validacion, true);
	document.getElementById("RfichaMed").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("RfichaMed").checkValidity();
if (valido_form){
	alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("RfichaMed").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombreCliente").value="";
	document.getElementById("nombreMascota").value="";
	document.getElementById("raza").value="";
	document.getElementById("especie").value="";
	document.getElementById("id_txt_descripcion").value="";
	document.getElementById("id_txt_diagnostico").value="";
	document.getElementById("veterinario").value="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("modalMascota").hidden=false;
	document.getElementById("modalEspecie").hidden=false;
	document.getElementById("modalRaza").hidden=false;
	document.getElementById("modalVeterinario").hidden=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("nombreMascota").disabled=false;
	document.getElementById("raza").disabled=false;
	document.getElementById("especie").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("id_txt_diagnostico").disabled=false;
	document.getElementById("veterinario").disabled=false;
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
	document.getElementById("nombreCliente").value="belejeb";
	document.getElementById("nombreMascota").value="dash";
	document.getElementById("raza").value="greyhound";
	document.getElementById("especie").value="canino";
	document.getElementById("id_txt_descripcion").value="aplicacion de vacuna antirabica";
	document.getElementById("id_txt_diagnostico").value="vacunacion";
	document.getElementById("veterinario").value="jose";

}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("nombreMascota").disabled=false;
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("modalMascota").hidden=false;
	document.getElementById("modalEspecie").hidden=false;
	document.getElementById("modalRaza").hidden=false;
	document.getElementById("modalVeterinario").hidden=false;
	document.getElementById("raza").disabled=false;
	document.getElementById("especie").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("id_txt_diagnostico").disabled=false;
	document.getElementById("veterinario").disabled=false;

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
