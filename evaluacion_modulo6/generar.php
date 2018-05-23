<?php $server ="localhost";
$user="root";
$pass="";
$db="notas";
$conexion= mysqli_connect($server,$user,$pass,$db) or die("Ha sucedido un error contacte al administrador");
$sql = "SELECT * FROM datos_alumnos";
mysqli_set_charset($conexion,"utf8");
if (!$result= mysqli_query($conexion,$sql)) {
 die();
}
$alumnos= array();
while ($row=mysqli_fetch_array($result)) {
  $Carnet=$row['carnet'];
    $Nombres=$row['nombres'];
      $Apellidos=$row['apellidos'];
        $Carrera=$row['carrera'];
          $Nota1=$row['nota1'];
            $Nota2=$row['nota2'];
              $Nota3=$row['nota3'];
  $alumnos[]= array('carnet'=> $Carnet,
  'nombres'=> $Nombres,'apellidos'=> $Apellidos,
  'carrera'=> $Carrera,'nota1'=> $Nota1,
  'nota2'=> $Nota2,'nota3'=> $Nota3, );
}
$close= mysqli_close($conexion)
or die("Ha ocurrido un error contacte al administrador");
$Json_string=json_encode($alumnos);
$file ="alumnos.json";
echo "Archivo json generado";
file_put_contents($file,$Json_string,FILE_APPEND |LOCK_EX)
?>
