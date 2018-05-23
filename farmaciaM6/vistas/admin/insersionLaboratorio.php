<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Ingrese los datos del laboratorio</h1>

 <form action="INSERTARLaboratorio.php" method="post">

   <label for="laboratorio">Nombre laboratorio:</label>
   <input type="text" name="laboratorio" value="" autocomplete="off" placeholder="test"><br><br>
   <label for="telefono">Telefono:</label autocomplete="off">
   <input type="text" name="telefono" value="" maxlength="8"placeholder="00000000"><br><br>
   <label for="telefono">Registro:</label autocomplete="off">
   <input type="text" name="registro" value="" placeholder="testregistro"><br><br>
   <input type="submit" name="guardar" value="Guardar">
 </form>
  </body>
</html>
