function calcularCoutas(){
	var cuota=0;
	var i=0;
	var isumado=0;
	var elevacion=0;
	var prestamo=document.getElementById("id_txt_prestamo").value;
	var tasaInteres=document.getElementById("id_txt_tasaInteres").value;
	var meses=document.getElementById("id_txt_meses").value;
	prestamo= parseFloat(prestamo);
	tasaInteres= parseFloat(tasaInteres);
	meses=parseFloat(meses);
	i= (tasaInteres/100)/12;
	isumado=1+i;
	elevacion= Math.pow(isumado,-meses);
	cuota=(prestamo/((1-elevacion)/i));
	document.getElementById("id_td_cuota").innerHTML= "$"+cuota.toFixed(2);
	
	if( isNaN(prestamo) ) {
 alert("El prestamo debe ser numerico");
document.getElementById("id_td_cuota").innerHTML= "$"+"0.00";
}

else if (isNaN(tasaInteres)){
	alert("El interes debe ser numerico");
	document.getElementById("id_td_cuota").innerHTML= "$"+"0.00";
	
}
else if (isNaN(meses)){
	alert("Los meses no pueden ser texto");
	document.getElementById("id_td_cuota").innerHTML= "$"+"0.00";
	}
	
	
}
