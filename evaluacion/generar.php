<?php
$server = 'localhost';
$user = 'admin';
$pass = 'admin';
$bd = 'evaluacion';

$conexion = mysqli_connect($server,$user,$pass,$bd)
or die ("Ha sucedido un error inesperado en la conexion de la base de datos");

$sql = "SELECT * FROM datos_alumnos";
mysqli_set_charset($conexion,"utf8");

if(!$result = mysqli_query($conexion,$sql)) die();
$alumnos = array();

while($row = mysqli_fetch_array($result)){
  $alumnos[] = array(
    'Carnet' => $row['carnet'],
    'Nombres'=> $row['nombres'],
    'Apellidos' => $row['apellidos'],
    'Carrera' => $row['carrera'],
    'Nota_1' => $row['nota1'],
    'Nota_2' => $row['nota2'],
    'Nota_3' => $row['nota3']
  );

}



$json_string = json_encode($alumnos);
$file = 'datos_alumnos.json';
file_put_contents($file, $json_string);

?>
