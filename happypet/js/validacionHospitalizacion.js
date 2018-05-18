function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rhospital").addEventListener("invalid", validacion, true);
	document.getElementById("Rhospital").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("Rhospital").checkValidity();
if (valido_form){
	alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rhospital").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombreMascota").value="";
	document.getElementById("jaula").value="";
	document.getElementById("fechaEntrada").value="";
	document.getElementById("fechaSalida").value="";
	document.getElementById("tamaño").value="";
	document.getElementById("disponibilidad").value="";
document.getElementById("modalMascota").hidden=false;
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombreMascota").disabled=false;
	document.getElementById("jaula").disabled=false;
	document.getElementById("fechaEntrada").disabled=false;
	document.getElementById("fechaSalida").disabled=false;
	document.getElementById("tamaño").disabled=false;
	document.getElementById("disponibilidad").disabled=false;
	document.getElementById("tipoIngreso").disabled=false;
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
	document.getElementById("nombreMascota").value="Doggy";
	document.getElementById("jaula").value="Canino";
	document.getElementById("fechaEntrada").value="2016-05-15";
	document.getElementById("fechaSalida").value="2016-02-25";
	document.getElementById("tamaño").value="Grande";
	document.getElementById("disponibilidad").value="SI";
document.getElementById("disponibilidad").value="SI";
	document.getElementById("tipoIngreso").value="HOSPEDAJE";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombreMascota").disabled=false;
	document.getElementById("jaula").disabled=false;
	document.getElementById("fechaEntrada").disabled=false;
	document.getElementById("fechaSalida").disabled=false;
	document.getElementById("tamaño").disabled=false;
	document.getElementById("modalMascota").hidden=false;
	document.getElementById("disponibilidad").disabled=false;
	document.getElementById("tipoIngreso").disabled=false;
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
