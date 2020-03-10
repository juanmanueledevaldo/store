<?php
include ("conection.php");
$query = "Select * from candy ";
$result = mysqli_query($con,$query);
$json = array();
$card;
while ($row = mysqli_fetch_array($result)) {
    # code...
    $json[]=array(
        'name'=>$row['Can_Name'],
        'price'=>$row['Can_Price'],
        'trademark'=>$row['Can_Trademark'],
        'type'=>$row['Can_Type'],
        'picture'=>$row['Can_Presentation']
    );
}
$data = json_encode($json);
echo $data;
?>