<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

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
                  <a href="medicamento.html">
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
                              <?php   include("../../database/Connection.php");

                                $nombre = $_POST['usuario'];


                                $sql="Call spBuscarUsuario('$nombre')";

                                if ($result = $conn->query($sql))
                                {
                                  echo "<script>alert('Usuarios encontrados'); </script>";
                                  echo "<h2 align=center> Informacion</h2>";
                                  echo " <div class='content table-responsive table-full-width'>";
                                   echo " <table class='table table-striped'>";
                                    echo "<thead>";
                                      echo "<th>ID</th>";
                                    	echo "<th>Usuario</th>";
                                    	echo "<th>Contraseña</th>";
                                    		echo "<th>Nivel</th>";

                                  	echo "</thead>";




                                  while ($info = $result-> fetch_row())
                              {
                                   echo"<tr><td>$info[0]</td><td>$info[1]</td><td>$info[2]</td><td>$info[3]</td</tr>";
                              }

                                }
                                echo "<tbody>";
                                echo "</table>";
																echo "</div>";
                              $conn-> close(); ?>

                                  <a href="user.html">Regresar</a>

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
