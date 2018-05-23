<?php
$server ="localhost";
$user="root";
$pass="";
$db="notas";
$conexion = mysqli_connect($server,$user,$pass,$db)
or die ("Ha sucedido un error inesperado en la conexion de la base de datos");
$data= file_get_contents("alumnos.json");
$alumnos = json_decode($data, true);
$suma=0;
$promedio=0;
foreach ($alumnos as $alumno) {
$suma = $alumno['nota1']+ $alumno['nota2']+$alumno['nota3'];
$promedio = $suma / 3;

$promedio = round($promedio,2);

  echo "<br>";
  print_r("<b>".$alumno['nombres'].' '.$alumno['apellidos'].'</b> - '.$alumno['carnet'].' - '.$promedio);
  echo "<br>";

$sql = "INSERT INTO nota_alumnos (carnet, promedio) VALUES ('".$alumno['carnet']."','".$promedio."')" ;


if ($conexion->query($sql) === TRUE) {
    echo "Registro Insertado";
    echo "<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

}
 ?>
