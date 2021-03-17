<?php

require_once 'inc/database.php';
require_once 'inc/function.php';

if (isset($_POST['name']) && isset($_POST['tel']) && isset($_POST['street']) && isset($_POST['house']) && isset($_POST['housing'])){
    
    $name = htmlspecialchars($_POST['name']);
    $tel = htmlspecialchars($_POST['tel']);
    $street = htmlspecialchars($_POST['street']);
    $house = htmlspecialchars($_POST['house']);
    $housing = htmlspecialchars($_POST['housing']);
    
    $result = insert_sub($link, $name, $tel, $street, $house, $housing);
    if($result == true){
        header('location: index.html');
    }
    else{
        echo "error";
    }
}
?>