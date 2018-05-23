<?php
include("../../database/Connection.php");



	$codigo = $_POST['laboratorio'];

	$sql="CALL 		spEliminarLaboratorio('$codigo')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Eliminado correctamente'); window.location='./laboratorio.html';</script>";
	}
	else
	{
		echo"<script>alert('Error al eliminar'); window.location='./laboratorio.html';</script>";
	}
?>
