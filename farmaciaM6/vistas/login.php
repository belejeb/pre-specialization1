<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/login.css">
    <script type="text/javascript" src="../js/lib/jquery.js"></script>
      <script type="text/javascript" src="../js/dist/jquery.validate.js"></script>
	  <title>Login</title>
</head>

<body>


    <form  method="post" name="login">

        <fieldset>
            <legend>Iniciar Sesión</legend>

            <table>
              <tr>
                <td><input type="text" id="id_txt_usuario" name="usuario" placeholder=" Usuario"></td>
              </tr>
              <tr>
                <td><input type="password" id="id_txt_password"name="password" placeholder="Contraseña"></td>
              </tr>
              <tr>
                <td><input type="submit" value ="Iniciar Sesión"  name = 'loginM6' onclick="login()"></td>
              </tr>
              <tr>
                <td><input type="checkbox" name="session">No cerrar sesión</td>
              </tr>
              <tr>
                <td><a href="cuenta.html">¿No tienes cuenta?</a></td>
              </tr>

            </table>

        </fieldset>


<?php

if(isset($_POST['loginM6'])){
$usr = $_POST['usuario']?? '';
$pass = $_POST['password']?? '';
$nivel=0;
$error="";
include("../database/Connection.php");

$sql = "SELECT usuario,contrasenia,idNivel FROM usuarios  WHERE usuario='".$usr."' AND contrasenia='".$pass."'";


if ($Result = $conn->query($sql)) {
  while ($row = $Result->fetch_row()) {
    //echo "$row[0]";
    //echo "$row[1]";
    switch ($row) {
      case  $row[0]==$usr AND $row[1]== $pass AND $row[2]==1:
      $_SESSION['login_user']=$usr; // Initializing Session
header("location:../vistas/admin/dashboard.html"); // Redirecting To Other Page
        break;
      case  $row[0]==$usr AND $row[1]== $pass AND $row[2]==2:
      $_SESSION['login_user']=$usr; // Initializing Session
header("location:../vistas/user/dashboard.html"); // Redirecting To Other Page
break;

      default:
      echo "<script> alert('Username or Password is invalid')</script>";
        break;


  }
  if (!empty($_POST["sesion"])){
    setcookie('user',$usr, time()+7000000);
  }
}
}
}
?>


    </form>
</body>
<script type="text/javascript">
// Wait for the DOM to be ready
$(function() {
// Initialize form validation on the registration form.
// It has the name attribute "registration"
$("form[name='login']").validate({
  // Specify validation rules
  rules: {
    // The key name on the left side is the name attribute
    // of an input field. Validation rules are defined
    // on the right side
    usuario: "required",
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
