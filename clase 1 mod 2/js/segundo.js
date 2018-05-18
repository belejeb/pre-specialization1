function segundo()
{
	var num1      = document.getElementById ("id_numero_uno").value;
	var num2      = document.getElementById ("id_numero_dos").value;
	var operacion = document.getElementById ("id_cmb_operacion").value;
    var resultado    = 0;

    num1          = parseFloat(num1);
    num2          = parseFloat(num2);
    operacion     = parseInt(operacion);

switch(operacion)

{
	case 1:
	resultado = num1 + num2;
	break;

	case 2: 
	resultado = num1 - num2; 
	break;

	case 3: 
	resultado = num1 * num2; 
	break;

	case 4: 
	resultado = num1 / num2; 
	break;

}
alert("El resultado de la operacion es:"+resultado);

}
function limpiar()
 {
 	document.getElementById ("id_numero_uno").value = "";
 	document.getElementById ("id_numero_dos").value = "";
 	document.getElementById ("id_cmb_operacion").value = 1;
 }
