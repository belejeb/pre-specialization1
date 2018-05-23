<?php
$server = 'localhost';
$user = 'admin';
$pass = 'admin';
$bd = 'evaluacion';

$conexion = mysqli_connect($server,$user,$pass,$bd)
or die ("Ha sucedido un error inesperado en la conexion de la base de datos");


mysqli_set_charset($conexion,"utf8");


$data = file_get_contents("datos_alumnos.json");
$alumnos = json_decode($data,true);
$promedio = 0;
$sumas = 0;
foreach ($alumnos as $alumno) {
$sumas = $alumno['Nota_1'] + $alumno['Nota_2'] + $alumno['Nota_3'];
$promedio = $sumas / 3;

$promedio = round($promedio,2);

  echo "<br>";
  print_r("<b>".$alumno['Nombres'].' '.$alumno['Apellidos'].'</b> - '.$alumno['Carnet'].' - '.$promedio);
  echo "<br>";

$sql = "INSERT INTO nota_alumnos (carnet, promedio) VALUES ('".$alumno['Carnet']."','".$promedio."')" ;


if ($conexion->query($sql) === TRUE) {
    echo "Registro Insertado";
    echo "<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}


}

 ?>
