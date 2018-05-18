function iniciar()
{   
	document.getElementById("guardar").addEventListener("click", enviar, false);
	document.getElementById("nuevo").addEventListener("click", nuevo, false);
	document.getElementById("cargar").addEventListener("click", cargar, false);
	document.getElementById("eliminar").addEventListener("click", borrar, false);
	document.getElementById("cancelar").addEventListener("click", cancelar, false);
	document.getElementById("modificar").addEventListener("click", modificar, false);
	document.getElementById("Rvehiculos").addEventListener("invalid", validacion, true);
	document.getElementById("Rvehiculos").addEventListener("input", controlar, false);
	
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
var valido_form = document.getElementById("Rvehiculos").checkValidity();
if (valido_form){
document.getElementById("Rvehiculos").submit();
	}
	else{
	alert("ERROR: REVISAR FORMULARIO");
}
}
function nuevo(){
	document.getElementById("codigo").value="";
	document.getElementById("marca").value="";
	document.getElementById("modelo").value="";
	document.getElementById("id_cmb_clase").value="";
	document.getElementById("id_cmb_tipo").value="";
	document.getElementById("id_cmb_capacidad").value="";
	document.getElementById("pic").defaultValue="";
	document.getElementById("id_txt_descripcion").innerHTML="";
    document.getElementById("anio").value="";
	document.getElementById("id_cmb_estado").value="";
	document.getElementById("color").value="#000000";
	document.getElementById("precio").value="";
	document.getElementById("kilometros").value="";
	document.getElementById("id_cmb_combustible").value="";
	document.getElementById("codigo").disabled=false;
	document.getElementById("marca").disabled=false;
	document.getElementById("modelo").disabled=false;
	document.getElementById("id_cmb_clase").disabled=false;
	document.getElementById("id_cmb_tipo").disabled=false;
	document.getElementById("id_cmb_capacidad").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("pic").disabled=false;

	document.getElementById("anio").disabled=false;
	document.getElementById("kilometros").disabled=false;
		document.getElementById("id_cmb_combustible").disabled=false;
	document.getElementById("precio").disabled=false;
	document.getElementById("id_cmb_estado").disabled=false;
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
	document.getElementById("nuevo").disabled=false;
	document.getElementById("cancelar").disabled=true;
	document.getElementById("cargar").disabled=false;
	document.getElementById("codigo").value="0001";
	document.getElementById("marca").value="toyota";
	document.getElementById("modelo").value="corolla";
	document.getElementById("id_cmb_clase").value=1;
	document.getElementById("id_cmb_tipo").value=1;
	document.getElementById("id_cmb_capacidad").value=2;
	document.getElementById("pic").defaultValue="";
	document.getElementById("id_txt_descripcion").innerHTML="toyota corolla";
    document.getElementById("anio").value="2015";
	document.getElementById("id_cmb_estado").value=2;
	document.getElementById("color").value="#00ff3f";
	document.getElementById("precio").value=10000;
	document.getElementById("kilometros").value=200;
	document.getElementById("id_cmb_combustible").value=2;
}
function modificar(){
	document.getElementById("codigo").disabled=false;
	document.getElementById("marca").disabled=false;
	document.getElementById("modelo").disabled=false;
	document.getElementById("id_cmb_clase").disabled=false;
	document.getElementById("id_cmb_tipo").disabled=false;
	document.getElementById("id_cmb_capacidad").disabled=false;
	document.getElementById("id_txt_descripcion").disabled=false;
	document.getElementById("pic").disabled=false;

	document.getElementById("anio").disabled=false;
	document.getElementById("kilometros").disabled=false;
		document.getElementById("id_cmb_combustible").disabled=false;
	document.getElementById("precio").disabled=false;
	document.getElementById("id_cmb_estado").disabled=false;
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
