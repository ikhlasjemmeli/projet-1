<?php
include "cnx.php";
if(isset($_POST["name"]) && isset($_POST["number"]) && isset($_POST["email"]) && isset($_POST["date"]))
   {
       
       $name=$_POST["name"];
       $number=$_POST["number"];
       $email=$_POST["email"];
       $date=$_POST["date"];
        
       $req=mysqli_query($link,"insert into user(name,email,number,date) values('$name','$email','$number','$date')");
        if($req)
        {
            echo "insertion effectuée";
            header("location:insertion.html");
        }
        else{
            echo "erreur";
        }
    }

?>