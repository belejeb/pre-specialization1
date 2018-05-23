<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="contenedor" style="border: 1px black solid;">
    <h1>Modificar datos de medicamento</h1>
<form class="" action="modificarMedicamento.php" method="post">
  <label for="">usuario a modificar:</label>
  <?php
  include("../../database/Connection.php");
  $query ="SELECT * FROM `medicamento`";
  $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
  $options = $options."<option value='$row[0]'> $row[1]</option>";
 }
 ?>
  <select class="" name="medicamento">

 <?php echo $options;
 ?>
  </select><br><br>
  <input type="submit" name="select" value="Seleccionar" onclick="modificar()">

</form>
