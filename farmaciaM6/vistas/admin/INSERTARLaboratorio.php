<?php
include("../../database/Connection.php");

  $laboratorio = $_POST['laboratorio'];
  $telefono = $_POST['telefono'];
  $registro = $_POST['registro'];

  $sql=" CALL 	spInsertarLaboratorio('".$laboratorio."','".$telefono."','".$registro."')";

  if ($result = $conn->query($sql))
  {

  		echo "<script>alert('Datos ingresados');  window.location='./laboratorio.html'; </script>";

  }

$conn-> close();
?>
