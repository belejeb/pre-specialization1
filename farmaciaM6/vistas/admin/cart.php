<?php
/*
* Este archio muestra los productos en una tabla.
*/

session_start();
include "php/conection.php";
?>
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
                <li >
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
                <li class="active">
                    <a href="products.php">
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

															<!DOCTYPE html>
															<html>
															<head>
																<title></title>
																<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
															</head>
															<body>
															<div class="container">
																<div class="row">
																	<div class="col-md-12">
																		<h1>Carrito</h1>
																		<a href="./products.php" class="btn btn-default">Productos</a>
																		<br><br>
															<?php
															/*
															* Esta es la consula para obtener todos los productos de la base de datos.
															*/
															$products = $con->query("select * from medicamento");
															if(isset($_SESSION["cart"]) && !empty($_SESSION["cart"])):
															?>
															<table class="table table-bordered">
															<thead>
																<th>Cantidad</th>
																<th>Producto</th>
																<th>Precio Unitario</th>
																<th>Total</th>
																<th></th>
															</thead>
															<?php
															/*
															* Apartir de aqui hacemos el recorrido de los productos obtenidos y los reflejamos en una tabla.
															*/
															foreach($_SESSION["cart"] as $c):
															$products = $con->query("select * from medicamento where idMedicamento =$c[product_id]");
															$r = $products->fetch_object();

															$totalInd =$c["q"]*$r->precio;
																?>
															<tr>
															<th><?php echo $c["q"];?></th>
																<td><?php echo $r->nombre;?></td>
																<td>$ <?php echo $r->precio; ?></td>
																<td>$ <?php echo $totalInd;?></td>
																<td style="width:260px;">
																<?php
																$found = false;
																foreach ($_SESSION["cart"] as $c) { if($c["product_id"]==$r->idMedicamento){ $found=true; break; }}
																?>
																	<a href="php/delfromcart.php?id=<?php echo $c["product_id"];?>" class="btn btn-danger">Eliminar</a>
																</td>
															</tr>
															<?php  endforeach;?>

															<tr>
															</tr>
															</table>

															<form class="form-horizontal" method="post" action="./php/process.php">
															  <div class="form-group">
															    <label for="inputEmail3" class="col-sm-2 control-label">Email del cliente</label>
															    <div class="col-sm-5">
															      <input type="email" name="email" required class="form-control" id="inputEmail3" placeholder="Email del cliente">
															    </div>
															  </div>
															  <div class="form-group">
															    <div class="col-sm-offset-2 col-sm-10">
															      <button type="submit" class="btn btn-primary">Procesar Venta</button>
															    </div>

															  </div>
															</form>
															<form class="form-horizontal" action="generarPDF.php" method="post">
																<div class="col-sm-offset-2 col-sm-10">
																	<button type="submit" class="btn btn-primary" >Imprimir</button>
																</div>
															</form>


															<?php else:?>
																<p class="alert alert-warning">El carrito esta vacio.</p>
															<?php endif;?>
															<br><br><hr>





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

	    <!--  Google Maps Plugin    -->
	    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>

	    <!-- Paper Dashboard Core javascript and methods for Demo purpose -->
		<script src="assets/js/paper-dashboard.js"></script>

		<!-- Paper Dashboard DEMO methods, don't include it in your project! -->
		<script src="assets/js/demo.js"></script>



</html>
