<?php
include("../../database/Connection.php");



	$codigo = $_POST['nivel'];

	$sql="CALL 	spEliminarNivel('$codigo')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Eliminado correctamente'); window.location='./nivel.html';</script>";
	}
	else
	{
		echo"<script>alert('Error al eliminar'); window.location='./nivel.html';</script>";
	}
?>
