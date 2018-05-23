<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>

  <link href="assets/css/paper-dashboard.css" rel="stylesheet"/>
  </head>
  <body>
    <h1>Ingrese los datos del usuario</h1>

 <form  name="registroUsuarios" action="INSERTARUsuarios.php"  method="post">

   <label for="usuario">Nombre usuario:</label>
   <input type="text" name="usuario"   value=""><br><br>
   <label for="password">contraseña:</label >
   <input type="password" name="password"   value=""><br><br>
   <label for="nivel">Nivel</label>

   <?php
  include("../../database/Connection.php");
   $query ="SELECT * FROM `nivel`";
   $result = mysqli_query($conn,$query);

 $options = "";

 while($row = mysqli_fetch_array($result))
 {
   $options = $options."<option value='$row[0]'> $row[1]</option>";
 }
 ?>
   <select class="" name="nivel" required>

  <?php echo $options;
  ?>
   </select><br><br>
   <input type="submit" name="guardar" value="Guardar">
 </form>
  </body>

  <script type="text/javascript" src="../js/lib/jquery.js"></script>
    <script type="text/javascript" src="../js/dist/jquery.validate.js"></script>
    <script type="text/javascript">
    // Wait for the DOM to be ready
    $(function() {
      // Initialize form validation on the registration form.
      // It has the name attribute "registration"
      $("form[name='registroUsuarios']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          usuario: "required",
          password: "required",
          password: {
            required: true,

          }
        },
        // Specify validation error messages
        messages: {
          usuario: "Please enter your user",

          password: {
            required: "Please provide a password",

          },

        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
    </script>
</html>
