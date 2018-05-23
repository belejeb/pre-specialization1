<?php
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

echo json_encode($arr);

$string = '{"nombre": "Angelina", "apellido": "Jolie"}';
$resultado = json_decode($string);
//Vemos el resultado de la decodificación:
echo "<br>";
var_dump($resultado);
/*
* object(stdClass) [3]
public 'nombre' => string 'Angelina' (length=8)
public 'apellido' => string 'Jolie' (length=5)
*/

echo"<br>";
echo $resultado->nombre; // Angelina
echo "<br>";
echo $resultado->apellido; // Jolie
?>
