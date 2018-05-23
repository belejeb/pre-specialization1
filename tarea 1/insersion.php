<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Ingrese los datos del alumno</h1>

 <form action="INSERTAR.php" method="post">

   <label for="alumno">Nombre Alumno:</label>
   <input type="text" name="alumno" value=""><br><br>
   <label for="apellido">Apellido:</label>
   <input type="text" name="apellido" value=""><br><br>
   <label for="grado">Grado</label>

   <?php
   include("conexion.php");
   $query ="SELECT * FROM `grado`";
   $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
   $options = $options."<option value='$row[0]'> $row[1] $row[2]</option>";
 }
 ?>
   <select class="" name="grado">

  <?php echo $options;
  ?>
   </select><br><br>
   <input type="submit" name="guardar" value="Guardar">
 </form>
  </body>
</html>
