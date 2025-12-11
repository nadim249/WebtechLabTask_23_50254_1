

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
</head>
<body>

 <h1>Log in</h1>

 <form action=""  onsubmit="return handleValidation()" method="post">

 <fieldset>
        <legend>LOGIN</legend>

<label for="usName">User Name:</label>
 <input type="text" name="usName" id="usName" placeholder="Enter your Username"/>
 <p id="usNameErr" style="color:red;"> </p>

 <label for="password">Password:</label>

 <input type="password" name="pass" id="pass" placeholder="Enter password"/> <br>
  <p id="passErr" style="color:red;"> </p>

 <hr>
 <input type="checkbox" name="remember" id="remember"/>
 <label for="remember">Remember me</label>
 <br>
 <input type="submit" value="Log in"/>
 <a href="forgetpass.php" target="_blank">Forget Password?</a>

 </fieldset>

</form>

<?php 
$user = isset($_POST["usName"]) ? $_POST["usName"] : "";
$password = isset($_POST["pass"]) ? $_POST["pass"] : "";

if($user !="" && $password !=""){
echo '<p><span style="color:dodgerblue;">'.$user.'</span>, You Have logged in Successfully</p>';
}else{
    echo"....";
}

?>

    <script src="../controller/JS/login.js"></script>
</body>
</html>