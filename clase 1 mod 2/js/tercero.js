function tercero(){
	var salario = document.getElementById("id_nmb_salario").value;
	var isss = 0;
	var renta=0;
	var afp =0;
	var salario_liquido =0;
	salario= parseFloat(salario);
	if (salario <=500){
		afp= salario * 0.03;//3%de descuento de afp
		renta = salario*.05;//5% de descuento de renta
		isss= salario *0.01;//1% de descuento de isss
	}
	else {
		afp= salario*0.07;//7% de descuento de afp
		renta = salario*0.10;//10% de descuento de renta
		isss= salario*0.05;//5% de descuento de isss
	}
	salario_liquido = (salario)-(afp+renta+isss);
	document.getElementById("id_td_descuento_isss").innerHTML= isss;
	document.getElementById("id_td_descuento_renta").innerHTML= renta;
	document.getElementById("id_td_descuento_afp").innerHTML= afp;
	document.getElementById("id_td_salario_liquido").innerHTML= "USD $"+salario_liquido;
}