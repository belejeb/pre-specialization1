<h1>MOSTARDATOS</h1>
<?php
include './conexion.php';
$sql="SELECT * from alumno";
$result = mysqli_query($conn,$sql);

	while($row = mysqli_fetch_array($result))
	{
    echo "<h2 align=center> Informacion</h2>";
    echo "<table border=1 align=center";
    echo "<tr><td>ID</td><td>Nombre</td><td>Apellido</td><td>grado</td>";

    if ($result = $conn->query($sql))
    {
             while ($info = $result-> fetch_row())
     {
             	echo"<tr><td>$info[0]</td><td>$info[1]</td><td>$info[2]</td><td>$info[3]</td</tr>";
    }
    }
    echo "</table>";
	}


    $conn->next_result();
  $conn->close();
?>
