<?php $server = "localhost";
$user = "root";
$pass = "";
$bd = "demo_json";

//Creamos lña conexión
$conexion = mysqli_connect($server, $user, $pass, $bd)
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//Generamos la consulta
$sql = "SELECT * FROM Clientes";
mysqli_set_charset($conexion, "utf8"); //Formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$clientes = array(); //Creamos un Array

while($row = mysqli_fetch_array($result))
{
    $id=$row['id'];
    $nombre=$row['nombre'];
    $edad=$row['edad'];
    $genero=$row['genero'];
    $email=$row['email'];
    $localidad=$row['localidad'];
    $telefono=$row['telefono'];

    $clientes[] = array('id'=> $id, 'nombre'=> $nombre, 'edad'=> $edad, 'genero'=> $genero, 'email'=> $email, 'localidad'=> $localidad, 'telefono'=> $telefono);
}

//Desconectamos la base de datos
$close = mysqli_close($conexion)
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

//Creamos el JSON
//$clientes['clientes'] = $clientes;
$json_string =json_encode($clientes);
echo $json_string;

?>
