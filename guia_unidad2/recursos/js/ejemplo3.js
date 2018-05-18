function agregar()
{
	alert("SE AGREGA UN NUEVO REGISTRO");
}

function modificar()
{
	alert("SE MODIFICARÁ UN REGISTRO EXISTENTE");
}

function eliminar()
{
	if (confirm("¿DESEA ELIMINAR EL REGISTRO SELECCIONADO?"))
	{
		alert("SE ELIMINÓ EL REGISTRO EXISTENTE");
	}
	else
	{
		alert("CANCELADO LA OPERACIÓN DE ELIMINACIÓN");
	}
}

function guardar()
{
	alert("SE AGREGARÁ LA INFORMACIÓN REGISTRADA");
}

function cancelar()
{
	alert("SE CANCELARÁ LA OPERACIÓN");
}