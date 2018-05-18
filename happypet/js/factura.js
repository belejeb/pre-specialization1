function total(){
	var precio1 = document.getElementById("p1").value;
	var precio2 = document.getElementById("p2").value;
	var precio3 = document.getElementById("p3").value;
	var precio4 = document.getElementById("p4").value;
	var precio5 = document.getElementById("p5").value;
	var precio6 = document.getElementById("p6").value;
	var precio7 = document.getElementById("p7").value;
	var precio8 = document.getElementById("p8").value;
	var precio9 = document.getElementById("p9").value;
	var precio10 = document.getElementById("p10").value;
	if(precio1=="")
	{
		precio1=0;
	}

	if( precio2=="" ) 
		{precio2=0;}

		if(precio3=="")
			{precio3=0;}

		if(precio4=="" )
			{precio4=0;}

		if(precio5=="")
			{precio5=0;}

			if(precio6=="")
				{precio6=0;}

			 if(precio7=="")
			 	{precio7=0;}

			 if(precio8=="") 
			 	{precio8=0;}

			 	if(precio9=="")
			 		{precio9=0;}

			 	if(precio10=="")
			 		{precio10=0;}
	var suma= parseFloat(precio1)+parseFloat(precio2)+parseFloat(precio3)+parseFloat(precio4)+parseFloat(precio5)+parseFloat(precio6)+parseFloat(precio7)+parseFloat(precio8)+parseFloat(precio9)+parseFloat(precio10);
    var iva= parseFloat(suma)*0.13;
    var t= parseFloat(suma)+iva;

    document.getElementById("pi").innerHTML=iva;
    document.getElementById("pt").innerHTML=t;
   

	
}

function cargar()
{
	document.getElementById("c1").value="1";
	document.getElementById("d1").value="consulta general";
	document.getElementById("p1").value="20";
	document.getElementById("numero").value="0001";
	document.getElementById("fecha").value="2017-02-10";
	document.getElementById("cli").value="Jose Miguel Umaña";
	document.getElementById("mascota").value="Flofy";
	document.getElementById("pi").innerHTML="2.6";
	document.getElementById("pt").innerHTML="22.6";

document.getElementById("modificar").disabled=false;
	document.getElementById("eliminar").disabled=false;
	document.getElementById("guardar").disabled=true;
	document.getElementById("nuevo").disabled=true;
	document.getElementById("cancelar").disabled=true;
	document.getElementById("cargar").disabled=false;
	
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
function modificar() {
	// body...
document.getElementById("numero").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("cli").disabled=false;
	document.getElementById("mascota").disabled=false;
	document.getElementById("generar").disabled=false;


document.getElementById("nuevo").disabled=true;
	document.getElementById("modificar").disabled=true;
	document.getElementById("eliminar").disabled=true;
	document.getElementById("guardar").disabled=false;
	document.getElementById("cancelar").disabled=false;
	document.getElementById("cargar").disabled=true;
}

function nuevo(){

	document.getElementById("numero").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("cli").disabled=false;
	document.getElementById("mascota").disabled=false;
	document.getElementById("generar").disabled=false;

	document.getElementById("numero").value="0003";
	document.getElementById("fecha").value="";
	document.getElementById("cli").value="";
	document.getElementById("mascota").value="";

    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";
    document.getElementById("c9").value="";
    document.getElementById("c10").value="";

    document.getElementById("d1").value="";
    document.getElementById("d2").value="";
    document.getElementById("d3").value="";
    document.getElementById("d4").value="";
    document.getElementById("d5").value="";
    document.getElementById("d6").value="";
    document.getElementById("d7").value="";
    document.getElementById("d8").value="";
    document.getElementById("d9").value="";
    document.getElementById("d10").value="";

    document.getElementById("p1").value="";
    document.getElementById("p2").value="";
    document.getElementById("p3").value="";
    document.getElementById("p4").value="";
    document.getElementById("p5").value="";
    document.getElementById("p6").value="";
    document.getElementById("p7").value="";
    document.getElementById("p8").value="";
    document.getElementById("p9").value="";
    document.getElementById("p10").value="";

    document.getElementById("pi").innerHTML="";
    document.getElementById("pt").innerHTML="";


	
	document.getElementById("nuevo").disabled=true;
	document.getElementById("modificar").disabled=true;
	document.getElementById("eliminar").disabled=true;
	document.getElementById("guardar").disabled=false;
	document.getElementById("cancelar").disabled=false;
	document.getElementById("cargar").disabled=true;


}
function guardar()
{

	var c1= document.getElementById("c1").value;
	var d1= document.getElementById("d1").value;
	var p1= document.getElementById("p1").value;
	var numero= document.getElementById("numero").value;
	var fecha= document.getElementById("fecha").value;
	var cli= document.getElementById("cli").value;
	var mascota= document.getElementById("mascota").value;
	var pi= document.getElementById("pi").value;
	var pt= document.getElementById("pt").value;

	if(c1!="" && d1!="" && p1!="" && numero!="" && fecha!="" && cli!="" ){
		alert("factura registrada exitosamente");
	document.getElementById("nuevo").disabled=false;
	document.getElementById("modificar").disabled=true;
	document.getElementById("eliminar").disabled=true;
	document.getElementById("guardar").disabled=true;
	document.getElementById("cancelar").disabled=true;
	document.getElementById("cargar").disabled=false;

  document.getElementById("numero").disabled=true;
	document.getElementById("fecha").disabled=true;
	document.getElementById("cli").disabled=true;
	document.getElementById("mascota").disabled=true;
	document.getElementById("generar").disabled=true;}
	else{
		alert("porfavor llene todos los campos");
	}
}