<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <style>
        input[type="text"],input[type="email"] ,input[type="password"]  {
  padding: 12px 20px;
}

    input[type="submit"],input[type="reset"]{
        margin:5px;
    color: white;
    background-color: lightgreen;
    padding: 10px;
    cursor: pointer;
        }
    </style>
</head>
<body>

<h2>Registration Form</h2>

<form action="" method="post" onsubmit="return handleregvalidation()" >
    <table border="1">
        <tr>
            <td><label for="fullname">Full Name:</label></td>
            <td><input type="text" id="fullname" name="fullname">
            <br>
             <span id="fnameErr" style="color:red;"> </span>

        </td>

        </tr>

        <tr>
            <td><label for="email">Email:</label></td>
            <td><input type="email" id="email" name="email">
            <br>
             <span id="emailErr" style="color:red;"> </span>
</td>
        </tr>
        <tr>
            <td><label for="username">Username:</label></td>
            <td><input type="text" id="username" name="username">
            <br>
             <span id="usNameErr" style="color:red;"> </span>
</td>
        </tr>


        <tr>
            <td><label for="password">Password:</label></td>
            <td><input type="password" id="password" name="password">
            <br>
             <span id="passErr" style="color:red;"> </span>
</td>
        </tr>

        <tr>
            <td><label for="cpassword">Confirm Password:</label></td>
            <td><input type="password" id="cpassword" name="cpassword" >
            <br>
             <span id="cpassErr" style="color:red;"> </span>
</td>
        </tr>

        <tr>
            <td></td>
            <td>
                <input type="submit" value="Register">
                <input type="reset" value="Reset">
            </td>
        </tr>
    </table>
</form>

<?php 
$name = isset($_POST["fullname"]) ? $_POST["fullname"] : "";
$username = isset($_POST["username"]) ? $_POST["username"] : "";
$email = isset($_POST["email"]) ? $_POST["email"] : "";
$password = isset($_POST["password"]) ? $_POST["password"] : "";

if($username !="" && $password !="" && $name !="" && $email !=""){
echo '<p>Registration Successful</p>';
}else{
    echo"....";
}

?>
<script src="../controller/JS/regval.js"></script>
</body>
</html>
