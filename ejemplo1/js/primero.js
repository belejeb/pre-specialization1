function Primero()
{
	var nombre = prompt("Por favor digite su nombre: ");
	var edad = prompt("Por favor digite su edad: ");
	edad = parseInt(edad);
	if (edad >=18){
		alert("El nombre ingresado fue: "+nombre+", ya eres mayor de edad." );
		
	}
	else if( edad <18){
		alert("El nombre ingresado fue: "+nombre+", es menor de edad." );
	}
	else{
		alert("El dato ingresado es incorrecto" );
	}
		
}