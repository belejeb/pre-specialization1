

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>ELIMINAR alumno</h1>
<form  action="eliminar.php" method="post">
  <label for="">Alumno a ELIMINAR:</label>
  <?php
  include("conexion.php");
  $query ="SELECT * FROM `alumno`";
  $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
  $options = $options."<option value='$row[0]'> $row[1]</option>";
 }
 ?>
  <select class="" name="alumno">

 <?php echo $options;
 ?>
  </select><br><br>
  <input type="submit" name="select" value="Seleccionar">

</form>
</body>
</html>
