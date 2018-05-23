<h1>MOSTARDATOS</h1>
<?php
include("../../database/Connection.php");
$sql="SELECT * from laboratorio";
$result = mysqli_query($conn,$sql);

	while($row = mysqli_fetch_array($result))
	{
    echo "<h2 align=center> Informacion</h2>";
		echo " <div class='content table-responsive table-full-width'>";
		 echo " <table class='table table-striped'>";
			echo "<thead>";
				echo "<th>ID</th>";
				echo "<th>laboratorio</th>";
				echo "<th>telefono</th>";
					echo "<th>registro</th>";

			echo "</thead>";
    if ($result = $conn->query($sql))
    {
             while ($info = $result-> fetch_row())
     {
             	echo"<tr><td>$info[0]</td><td>$info[1]</td><td>$info[2]</td><td>$info[3]</td</tr>";
    }
    }
		echo "<tbody>";
		echo "</table>";
		echo "</div>";
	}


    $conn->next_result();
  $conn->close();
?>
