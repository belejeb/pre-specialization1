<?php
include("../../database/Connection.php");

  $usuario = $_POST['usuario'];
  $password = $_POST['password'];
  $nivel = $_POST['nivel'];

  $sql=" CALL 	spInsertarUsuarios('".$usuario."','".$password."','".$nivel."')";

  if ($result = $conn->query($sql))
  {

  		echo "<script>alert('Datos ingresados');  window.location='./user.html'; </script>";

  }

$conn-> close();
?>
