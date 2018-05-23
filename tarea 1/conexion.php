<?php
$server= 'localhost';
$user='root';
$password='';
$dbname='alumnos';
$conn= new mysqli($server,$user,$password,$dbname);
if ($conn->connect_error){
  die('Error de conexion');
}
?>
