<?php
include("./conexion.php");

  $nombre = $_POST['alumno'];
  $apellido = $_POST['apellido'];
  $grado = $_POST['grado'];

  $sql="Call spInsertarAlumno('$nombre','$apellido','$grado')";

  if ($result = $conn->query($sql))
  {

  		echo "<script>alert('Datos ingresados');  window.location='./'; </script>";

  }

$conn-> close();
?>
