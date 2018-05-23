<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Ingrese los datos del Medicamento</h1>

 <form action="INSERTARMedicamento.php" method="post" enctype="multipart/form-data">

   <label for="medicamento">Nombre Medicamento:</label>
   <input type="text" name="medicamento" value="" autocomplete="off" placeholder="paracetamol"><br><br>
   <label for="precio">Precio:</label>
   <input type="text" name="precio" value="" placeholder="00.00"><br><br>
    <label for="imagen">Imagen</label>
    <input type="file" name="imagen" accept="image/*" value=""><br><br>
   <label for="nivel">laboratorio</label>

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
   <button type="submit" name="guardar">Guardar</button>
   <!--<input type="submit" name="guardar" value="Guardar">-->
 </form>
  </body>
</html>
