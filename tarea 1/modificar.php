<?php

  include("./conexion.php");

  $codigo = $_POST['alumno'];

  $sql="select * from alumno where idAlumno = $codigo";

  if ($result = $conn-> query($sql))
  {
    while($info = $result-> fetch_row())
    {
      $codigo = $info[0];
      $nombre = $info[1];
      $apellido = $info[2];
      $grado =$info[3];
    }
  }





?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>ACTUALIZAR</title>
</head>
<body>

		<h1>Actualizar datos de Alumno</h1>
		<form  method="post">
			<input type="hidden" name="codigo" value="<?php echo $codigo ?>">
			<input type="text" placeholder="Nombre" name="nombre" value="<?php echo $nombre; ?>"><br><br>
			<input type="text" placeholder="Apellido" name="apellido" value="<?php echo $apellido; ?>"><br><br>
      <input type="number" name="grado" min="1" max=7 value="<?php echo $grado; ?>"><br><br>
			<input type="submit" name="ACTUALIZAR" value="ACTUALIZAR">
		</form>
		<br><br>
	
</body>
</html>
<?php
  include("./conexion.php");

if(isset($_POST['ACTUALIZAR'])){
	$codigo = $_POST['codigo'];
	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
$grado=$_POST['grado'];
	$sql="CALL 	spModificarAlumno('$codigo', '$nombre', '$apellido','$grado')";


	if ($result = $conn-> query($sql))
	{
		echo"<script>alert('Actualizado correctamente'); window.location='./';</script>";
	}
	else
	{
		echo"<script>alert('Error al actualizar'); window.location='./';</script>";
	}
}
?>
  </body>
</html>
