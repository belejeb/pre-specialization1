<h1>MOSTARDATOS</h1>
<?php
include("../../database/Connection.php");
$sql="SELECT * from medicamento";
$result = mysqli_query($conn,$sql);

	while($row = mysqli_fetch_array($result))
	{
    echo "<h2 align=center> Informacion</h2>";
		echo " <div class='content table-responsive table-full-width'>";
		 echo " <table class='table table-striped'>";
			echo "<thead>";
				echo "<th>ID</th>";
				echo "<th>nombre</th>";
				echo "<th>precio</th>";
					echo "<th>imagen</th>";
					echo "<th>laboratorio</th>";
			echo "</thead>";
    if ($result = $conn->query($sql))
    {
             while ($info = $result-> fetch_row())
     {
             	echo"<tr><td>$info[0]</td><td>$info[1]</td><td>$info[2]</td>";
             	  echo "<td>";
				  echo "<img src='../../files/".$info[3]."' >";
				  echo "</td>";
				  echo "<td>$info[4]</td></tr>";
    }
    }
		echo "<tbody>";
		echo "</table>";
		echo "</div>";
	}


    $conn->next_result();
  $conn->close();

?>
