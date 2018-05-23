<?php
  include("./conexion.php");



	$codigo = $_POST['alumno'];

	$sql="CALL spEliminarAlumno('$codigo')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Eliminado correctamente'); window.location='./';</script>";
	}
	else
	{
		echo"<script>alert('Error al eliminar'); window.location='./';</script>";
	}
?>
