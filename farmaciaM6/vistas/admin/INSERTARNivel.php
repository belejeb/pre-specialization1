<?php
include("../../database/Connection.php");

  $nivel = $_POST['nivel'];

  $sql=" CALL 	spInsertarNivel('".$nivel."')";

  if ($result = $conn->query($sql))
  {

  		echo "<script>alert('Datos ingresados');  window.location='./nivel.html'; </script>";

  }

$conn-> close();
?>
