<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.js"></script>

	<title>Sistema Farmaceutico</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />


    <!-- Bootstrap core CSS     -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Animation library for notifications   -->
    <link href="assets/css/animate.min.css" rel="stylesheet"/>

    <!--  Paper Dashboard core CSS    -->
    <link href="assets/css/paper-dashboard.css" rel="stylesheet"/>


    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="assets/css/demo.css" rel="stylesheet" />


    <!--  Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
    <link href="assets/css/themify-icons.css" rel="stylesheet">

</head>
<body>

<div class="wrapper">
    <div class="sidebar" data-background-color="white" data-active-color="success">

    <!--
		Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
	-->

    	<div class="sidebar-wrapper">


            <ul class="nav">
                <li >
                    <a href="dashboard.html">
                        <i class="ti-panel"></i>
                        <p>Home</p>
                    </a>
                </li>
                <li class="active">
                    <a href="user.html">
                        <i class="ti-user"></i>
                        <p>Usuarios</p>
                    </a>
                </li>
                <li>
                  <a href="nivel.html">
                        <i class="ti-view-list-alt"></i>
                        <p>Niveles</p>
                    </a>
                </li>
                <li>
                    <a href="typography.html">
                        <i class="ti-heart"></i>
                        <p>Medicamentos</p>
                    </a>
                </li>
                <li>
                    <a href="laboratorio.html">
                        <i class="ti-briefcase"></i>
                        <p>Laboratorios</p>
                    </a>
                </li>
                <li>
                    <a href="maps.html">
                        <i class="ti-shopping-cart"></i>
                        <p>Carrito</p>
                    </a>
                </li>

            </ul>
    	</div>
    </div>

    <div class="main-panel">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar bar1"></span>
                        <span class="icon-bar bar2"></span>
                        <span class="icon-bar bar3"></span>
                    </button>
                    <a class="navbar-brand" href="#">Dashboard</a>
                </div>
								<div class="collapse navbar-collapse">
																	 <ul class="nav navbar-nav navbar-right">
																			 <li>
																					<form Id="logout" action="../../logout.php" method="post">

																							 <input type="submit" name="logout"  value="CERRAR SESSION">
																																 </form>

																					 </a>
																			 </li>
								</div>
            </div>
        </nav>


        <div class="content">
            <div class="container-fluid">

                    <div class="col-lg-3 col-sm-6">
                        <div class="card">

                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                              <?php

                                include("../../database/Connection.php");

                                $codigo = $_POST['usuario'];

                                $sql="select * from usuarios where idUsuario = $codigo";

                                if ($result = $conn-> query($sql))
                                {
                                  while($info = $result-> fetch_row())
                                  {
                                    $codigo = $info[0];
                                    $usuario = $info[1];
                                    $pass = $info[2];
                                    $nivel =$info[3];
                                  }
                                }





                              ?>

                              		<h1>Actualizar datos de Usuario</h1>
                              		<form name="modUser" method="post">
                              			<input type="hidden" name="codigo" value="<?php echo $codigo ?>">
                              			<input type="text" placeholder="usuario" name="usuario" value="<?php echo $usuario; ?>"><br><br>
                              			<input type="text" placeholder="Password" name="pass" value="<?php echo $pass; ?>"><br><br>
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
                                    <select class="" name="nivel">

                                   <?php echo $options;
                                   ?>
                                    </select><br><br>
                              			<input type="submit" name="ACTUALIZAR" value="ACTUALIZAR">
                              		</form>
                              		<br><br>

																		<script>
																		// Wait for the DOM to be ready
																		$(function() {
																		// Initialize form validation on the registration form.
																		// It has the name attribute "registration"
																		$("form[name='modUser']").validate({
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

																		    pass: {
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


                              <?php
                              include("../../database/Connection.php");

                              if(isset($_POST['ACTUALIZAR'])){
                              	$codigo = $_POST['codigo'];
                              	$usuario=$_POST['usuario'];
                              	$pass=$_POST['pass'];
                                 $nivel=$_POST['nivel'];
                              	$sql="CALL 	spModificarUsuario('$codigo', '$usuario', '$pass','$nivel')";


                              	if ($result = $conn-> query($sql))
                              	{
                              		echo"<script>alert('Actualizado correctamente'); window.location='./user.html';</script>";
                              	}
                              	else
                              	{
                              		echo"<script>alert('Error al actualizar'); window.location='./user.html';</script>";
                              	}
                              }
                              ?>
                        </div>
                    </div>
                </div>

        </div>


        <footer class="footer">
            <div class="container-fluid">

                <div class="copyright pull-right">
                  Copyright (c) 2017 Copyright Holder All Rights Reserved.
            </div>
        </footer>

    </div>
</div>


</body>

    <!--   Core JS Files   -->
    <script src="assets/js/jquery-1.10.2.js" type="text/javascript"></script>
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>

	<!--  Checkbox, Radio & Switch Plugins -->
	<script src="assets/js/bootstrap-checkbox-radio.js"></script>

	<!--  Charts Plugin -->
	<script src="assets/js/chartist.min.js"></script>

    <!--  Notifications Plugin    -->
    <script src="assets/js/bootstrap-notify.js"></script>



</html>
