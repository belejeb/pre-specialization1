<?php
include("../../database/Connection.php");

$target = "../../files/".basename($_FILES['imagen']['name']);


		$imagen = $_FILES['imagen']['name'];



  $medicamento= $_POST['medicamento'];
  $precio = $_POST['precio'];
  $imagenes = $imagen;
  $laboratorio = $_POST['laboratorio'];
  $sql=" CALL 		spInsertarMedicamento('".$medicamento."','".$precio."','".$imagenes."','".$laboratorio."')";

  if ($result = $conn->query($sql))
  {

  		echo "<script>alert('Datos ingresados');  window.location='./medicamento.html'; </script>";

  }

  		if (move_uploaded_file($_FILES['imagen']['tmp_name'], $target)) {
			$msg = "Image uploaded successfully";
		}else{
			$msg = "Failed to upload image";
		}

$conn-> close();
?>
