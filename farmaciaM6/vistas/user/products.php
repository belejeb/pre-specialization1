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
															<h1>Productos</h1>
															<a href="./cart.php" class="btn btn-warning">Ver Carrito</a>
															<br><br>
															<?php
/*
* Este archio muestra los productos en una tabla.
*/

include "php/conection.php";

												/*
												* Esta es la consula para obtener todos los productos de la base de datos.
												*/
												$products = $con->query("select * from medicamento");
												?>
												<table class="table table-bordered">
												<thead>
													<th>Producto</th>
													<th>Precio</th>
													<th></th>
												</thead>
												<?php
												/*
												* Apartir de aqui hacemos el recorrido de los productos obtenidos y los reflejamos en una tabla.
												*/
												while($r=$products->fetch_object()):?>
												<tr>
													<td><?php echo $r->nombre;?></td>
													<td>$ <?php echo $r->precio; ?></td>
													<td style="width:260px;">
													<?php
													$found = false;

													if(isset($_SESSION["cart"])){ foreach ($_SESSION["cart"] as $c) { if($c["product_id"]==$r->idMedicamento){ $found=true; break; }}}
													?>
													<?php if($found):?>
														<a href="cart.php" class="btn btn-info">Agregado</a>
													<?php else:?>
													<form class="form-inline" method="post" action="./php/addtocart.php">
													<input type="hidden" name="product_id" value="<?php echo $r->idMedicamento; ?>">
														<div class="form-group">
															<input type="number" name="q" value="1" style="width:100px;" min="1" class="form-control" placeholder="Cantidad">
														</div>
														<button type="submit" class="btn btn-primary">Agregar al carrito</button>
													</form>
													<?php endif; ?>
													</td>
												</tr>
												<?php endwhile; ?>
												</table>
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
