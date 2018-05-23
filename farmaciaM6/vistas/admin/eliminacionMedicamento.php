

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Eliminar medicamento</h1>
<form  action="eliminarMedicamento.php" method="post">
  <label for="">Medicamento a Eliminar:</label>
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
  <input type="submit" name="select" value="Seleccionar">

</form>
</body>
</html>
