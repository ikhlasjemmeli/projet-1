<?php
$user="root";
$mdp="";
$db="travel";
$server="localhost";
$link=mysqli_connect($server,$user,$mdp,$db);
if($link)
{
    //echo "connexion etablie";
}
else{
    die(mysqli_connect_error());
}
?>