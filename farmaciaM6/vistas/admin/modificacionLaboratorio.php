<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="contenedor" style="border: 1px black solid;">
    <h1>Modificar datos de laboratorio</h1>
<form class="" action="modificarLaboratorio.php" method="post">
  <label for="">laboratorio a modificar:</label>
  <?php
  include("../../database/Connection.php");
  $query ="SELECT * FROM `laboratorio`";
  $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
  $options = $options."<option value='$row[0]'> $row[1]</option>";
 }
 ?>
  <select class="" name="laboratorio">

 <?php echo $options;
 ?>
  </select><br><br>
  <input type="submit" name="select" value="Seleccionar" onclick="modificar()">

</form>
