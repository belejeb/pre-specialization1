<?php
$server='localhost';
$user='root';
$password='';
$dbname='guia2';

$conn = new mysqli($server,$user,$password,$dbname);
if ($conn->connect_error){
	die('Error de Conexion');
}
?>