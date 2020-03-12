<?php
include ("conection.php");
header("Content-type: application/json; charset=utf-8");
$input = json_decode(file_get_contents("php://input"), true);
$candy = $input->Nombre;
$datetime = date("Y/m/d");
$status = 1;
$query ="INSERT 
INTO `sale` 
(
    `Sal_Id`, 
    `Sal_Date`, 
    `Sal_Candy`, 
    `Sal_Status`
    ) 
    VALUES 
    (
        NULL, 
        '$datetime',
        '$candy', 
        '$status');"
        ;
$result = mysqli_query($con,$query);

if(!$result){
    die("Error: %s\n" . mysqli_error($con));
}
$exito[] = array(
    'candy'=>$candy,
    'name'=> 'Juanito'
);
$exito = json_encode($exito);
echo $exito;
?>