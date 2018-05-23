<?php


	$server = 'localhost';
	$user = 'root';
	$password = '';
	$dbname = 'dbfarmacia';

	$conn = new mysqli($server, $user, $password, $dbname);

	if ($conn->connect_errno) {
		echo "ERROR TO TRY CONNECT {$conn->_connect_errno}";
	}

 ?>
