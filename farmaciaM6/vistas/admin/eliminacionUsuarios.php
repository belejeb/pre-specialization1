

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Eliminar Usuario</h1>
<form  action="eliminarUsuarios.php" method="post">
  <label for="">Usuario a Eliminar:</label>
  <?php
  include("../../database/Connection.php");
  $query ="SELECT * FROM `usuarios`";
  $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
  $options = $options."<option value='$row[0]'> $row[1]</option>";
 }
 ?>
  <select class="" name="usuario">

 <?php echo $options;
 ?>
  </select><br><br>
  <input type="submit" name="select" value="Seleccionar">

</form>
</body>
</html>
