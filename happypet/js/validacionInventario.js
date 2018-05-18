function iniciar()
{
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rinventario").addEventListener("invalid", validacion, true);
	document.getElementById("Rinventario").addEventListener("input", controlar, false);

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
var valido_form = document.getElementById("Rinventario").checkValidity();
if (valido_form){
	alert("DATOS GUARDADOS EXITOSAMENTE");
document.getElementById("Rinventario").submit();
}
else{
	alert("ERROR: REVISAR FORMULARIO");
}

}
window.addEventListener("load",iniciar,false);
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("tipodeproducto").value="";
	document.getElementById("cantidad").value="";
	document.getElementById("marca").value="";
	document.getElementById("proveedor").value="";
	document.getElementById("costo").value="";
	document.getElementById("stock anterior").value="";
	document.getElementById("stock actual").value="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("descripcion").disabled=false;
	document.getElementById("tipodeproducto").disabled=false;
	document.getElementById("cantidad").disabled=false;
document.getElementById("marca").disabled=false;
	document.getElementById("proveedor").disabled=false;
	document.getElementById("costo").disabled=false;
	document.getElementById("stock anterior").disabled=false;
	document.getElementById("stock actual").disabled=false;
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
	document.getElementById("nombre").value="Purina";
	document.getElementById("descripcion").value="Comida para perros";
	document.getElementById("tipodeproducto").value="alimento";
	document.getElementById("cantidad").value="500 libras";
	document.getElementById("marca").value="Purina";
	document.getElementById("proveedor").value="Purina Dog";
	document.getElementById("costo").value="$200";
	document.getElementById("stock anterior").value="100 libras";
	document.getElementById("stock actual").value="600 libras";
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("nombre").disabled=false;
	document.getElementById("descripcion").disabled=false;
	document.getElementById("tipodeproducto").disabled=false;
	document.getElementById("cantidad").disabled=false;
	document.getElementById("marca").disabled=false;
	document.getElementById("proveedor").disabled=false;
	document.getElementById("costo").disabled=false;
	document.getElementById("stock anterior").disabled=false;
	document.getElementById("stock actual").disabled=false;
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
