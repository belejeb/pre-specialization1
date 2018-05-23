<?php
include("../../database/Connection.php");



	$codigo = $_POST['usuario'];

	$sql="CALL 	spEliminarUsuario('$codigo')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Eliminado correctamente'); window.location='./user.html';</script>";
	}
	else
	{
		echo"<script>alert('Error al eliminar'); window.location='./user.html';</script>";
	}
?>
