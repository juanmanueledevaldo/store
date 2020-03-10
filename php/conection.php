<?php
$host;
$database;
$user;
$password;
$host="localhost";
$database="candy";
$user="root";
$password="";
$con = new mysqli($host,$user,$password,$database);
if ($con->connect_errno) {
    # code...
    die("Fallo la conexion:(".$con -> mysqli_connect_errno().")".$con-> mysqli_connect_error());
}
?>