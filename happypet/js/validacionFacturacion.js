function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rfacturacion").addEventListener("invalid", validacion, true);
	document.getElementById("Rfacturacion").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("Rfacturacion").checkValidity();
if (valido_form){
		alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rfacturacion").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("fecha").value="";
	document.getElementById("nombreCliente").value="";
	document.getElementById("servicio").value="";
	document.getElementById("productos").value="";
	document.getElementById("cantidad").value="";
	document.getElementById("precio").value="";
	document.getElementById("totalFactura").value="";
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("codigo").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("servicio").disabled=false;
	document.getElementById("productos").disabled=false;
document.getElementById("cantidad").disabled=false;
	document.getElementById("precio").disabled=false;
	document.getElementById("totalFactura").disabled=false;
	document.getElementById("iva").disabled=true;
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
	document.getElementById("fecha").value="2017-05-10";
	document.getElementById("iva").value="1.3"
	document.getElementById("nombreCliente").value="Miguel Castro";
	document.getElementById("servicio").value="Vacunacion";
	document.getElementById("productos").value="propecsa";
	document.getElementById("cantidad").value="1";
	document.getElementById("precio").value="10";
	document.getElementById("totalFactura").value="11.3";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("nombreCliente").disabled=false;
	document.getElementById("modalCliente").hidden=false;
	document.getElementById("servicio").disabled=false;
	document.getElementById("productos").disabled=false;
	document.getElementById("cantidad").disabled=false;
	document.getElementById("precio").disabled=false;
	document.getElementById("totalFactura").disabled=false;
	document.getElementById("iva").disabled=false;
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
