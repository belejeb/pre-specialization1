<?php include("./conexion.php");

  $nombre = $_POST['alumno'];


  $sql="Call spBuscarAlumno('$nombre')";

  if ($result = $conn->query($sql))
  {
    echo "<script>alert('Alumnos encontrados'); </script>";
    echo "<h2 align=center> Informacion</h2>";
    echo "<table border=1 align=center";
    echo "<tr><td>ID</td><td>Nombre</td><td>Apellido</td><td>grado</td>";


    while ($info = $result-> fetch_row())
{
     echo"<tr><td>$info[0]</td><td>$info[1]</td><td>$info[2]</td><td>$info[3]</td</tr>";
}

  }
  echo "</table>";
$conn-> close(); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <a href="index.html">Regresar</a>
  </body>
</html>
