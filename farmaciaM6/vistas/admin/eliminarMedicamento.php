<?php
include("../../database/Connection.php");



	$codigo = $_POST['medicamento'];

	$sql="CALL 		spEliminarMedicaemnto('$codigo')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Eliminado correctamente'); window.location='./medicamento.html';</script>";
	}
	else
	{
		echo"<script>alert('Error al eliminar'); window.location='./medicamento.html';</script>";
	}
?>
