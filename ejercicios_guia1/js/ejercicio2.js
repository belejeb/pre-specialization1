function calcularSalario(){

	var salario = document.getElementById("id_nmb_salario").value;
	var edad = document.getElementById("id_nmb_edad").value;
	var imagen = document.getElementById("insertarImagen");

	if(edad<18)
		alert('Debe ser mayor de edad');
	else{

	var isss = 0;
	var renta=0;
	var afp =0;
	var salario_liquido =0;

	salario= parseFloat(salario);

	afp = salario*0.035;

	if (salario >=600){
		isss=40;
	}
	else {
		isss=salario*0.06;
	}

	if (edad>17 && edad<36) {
		renta=salario*0.06;
	}
	else if(edad>=36 && edad<51){
		renta=salario*0.05;
	}
	else renta=salario*0.04;

	salario_liquido = (salario)-(afp+renta+isss);

	document.getElementById("id_td_descuento_isss").innerHTML= "USD $" +isss.toFixed(2);
	document.getElementById("id_td_descuento_renta").innerHTML= "USD $" +renta.toFixed(2);
	document.getElementById("id_td_descuento_afp").innerHTML="USD $" +afp.toFixed(2);
	document.getElementById("id_td_salario_liquido").innerHTML= "USD $"+salario_liquido.toFixed(2);

	if (salario_liquido<=300) {

		document.getElementById("id_td_salario_liquido").className="fondoRojo";
	}
	else if(salario_liquido>300 && salario_liquido<751){

		document.getElementById("id_td_salario_liquido").className="fondoNaranja";
	}
	else if(salario_liquido>750 && salario_liquido<1401){
		document.getElementById("id_td_salario_liquido").className="fondoAmarillo";
	}
	else {document.getElementById("id_td_salario_liquido").className="fondoVerde";
	}

	if (document.getElementById("id_rdo_sexo_masculino").checked==true) {
			imagen.innerHTML="<img src=\"../imagenes/iconoMasculino.png\">";
			sexo.innerHTML="Masculino";
	}
	else {
		imagen.innerHTML="<img src=\"../imagenes/iconoFemenino.png\">";
		sexo.innerHTML="Femenino";
	}
 }
}
