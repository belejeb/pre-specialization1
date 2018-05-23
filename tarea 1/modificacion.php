<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Modificar datos de alumnos</h1>
<form class="" action="modificar.php" method="post">
  <label for="">Pelicula a modificar:</label>
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
