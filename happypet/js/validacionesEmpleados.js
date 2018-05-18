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
function enviar(e){
var valido_form = document.getElementById("Rempleados").checkValidity();
if (valido_form){
		alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rempleados").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("dui").disabled=false;
	document.getElementById("nit").disabled=false;
	document.getElementById("fecha").disabled=false;

	document.getElementById("sexom").disabled=false;
	document.getElementById("sexof").disabled=false;
	document.getElementById("ve").disabled=false;
	document.getElementById("em").disabled=false;
	document.getElementById("jvmv").disabled=false;
	document.getElementById("especialidad").disabled=false;
	document.getElementById("ac").disabled=false;
	document.getElementById("inac").disabled=false;
	document.getElementById("cv").disabled=false;
	document.getElementById("foto").disabled=false;

document.getElementById("nombre").value="";
	document.getElementById("apellido").value="";
	document.getElementById("dui").value="";
	document.getElementById("nit").value="";
	document.getElementById("fecha").value="";
	document.getElementById("jvmv").value="";
	document.getElementById("especialidad").value="";


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
	document.getElementById("nombre").value="Oscar Miguel";
	document.getElementById("apellido").value="Romero Cruz";
	document.getElementById("dui").value="93829310-2";
	document.getElementById("nit").value="3233-090972-343-3";
	document.getElementById("fecha").value="2016-10-02";
	document.getElementById("sexom").checked=true;
	document.getElementById("ve").checked=true;
	document.getElementById("jvmv").value="159487621459";
	document.getElementById("especialidad").value="cardiologo";
	document.getElementById("ac").checked=true;
}
function modificar(){
	document.getElementById("nombre").disabled=false;
	document.getElementById("apellido").disabled=false;
	document.getElementById("dui").disabled=false;
	document.getElementById("nit").disabled=false;
	document.getElementById("fecha").disabled=false;

	document.getElementById("sexom").disabled=false;
	document.getElementById("sexof").disabled=false;
	document.getElementById("ve").disabled=false;
	document.getElementById("em").disabled=false;
	document.getElementById("jvmv").disabled=false;
	document.getElementById("especialidad").disabled=false;
	document.getElementById("ac").disabled=false;
	document.getElementById("inac").disabled=false;
	document.getElementById("cv").disabled=false;
	document.getElementById("foto").disabled=false;

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
function tipoVeterinario(){

	document.getElementById("jvmv").disabled=false;
	document.getElementById("especialidad").disabled=false;

}
function tipoEmpleado(){
	document.getElementById("jvmv").disabled=true;
	document.getElementById("especialidad").disabled=true;
}
