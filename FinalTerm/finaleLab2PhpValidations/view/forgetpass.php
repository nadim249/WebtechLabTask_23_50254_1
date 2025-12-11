<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forget Pass</title>
</head>
<body>
<form action=""  onsubmit="return handleforgetvalidation()" method="post">

 <fieldset>
        <legend>CHANGE PASSWORD</legend>

<label for="crPass">Current Password:</label>
 <input type="password" name="crPass" id="crPass" placeholder="Enter current password"/>
 <p id="crPassErr" style="color:red;"> </p>

 <label for="newPass">New Password:</label>

 <input type="password" name="newPass" id="newPass" placeholder="Enter New password"/> <br>
  <p id="newPassErr" style="color:red;"> </p>

 <label for="renewPass">Retype New Password:</label>

 <input type="password" name="renewPass" id="renewPass" placeholder="Enter renewPass password"/> <br>
  <p id="renewPassErr" style="color:red;"> </p>
<hr>
 <input type="submit" value="Submit"/>

 </fieldset>
</form>

<?php 
$crpass = isset($_POST["crPass"]) ? $_POST["crPass"] : "";
$nwpassword = isset($_POST["newPass"]) ? $_POST["newPass"] : "";
$renwpassword = isset($_POST["renewPass"]) ? $_POST["renewPass"] : "";

if($crpass !="" && $nwpassword !="" && $renwpassword !=""){
echo ' You password changed Successfully</p>';
}else{
    echo"....";
}
?>

    <script src="../controller/JS/forgetpass.js"></script>
</body>
</html>