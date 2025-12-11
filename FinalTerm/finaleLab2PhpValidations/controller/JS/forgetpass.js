
function handleforgetvalidation() {

  const crPassword = document.getElementById("crPass").value;
  const newPassword = document.getElementById("newPass").value;
  const renewPassword=document.getElementById("renewPass").value;

  const passpattern=/^(?=.*[@#$%]).+$/;
  const isValidpass = passpattern.test(newPassword);

  let hascrPasswordErr = true;
  let hasnewPasswordErr=true;
  let hasRenewPasswordErr=true;

   if (!crPassword) {
    document.getElementById("crPassErr").innerHTML =
      "Current Passeword field is required";
    hascrPasswordErr = true;
  }else if(crPassword === newPassword){
    document.getElementById("newPassErr").innerHTML =
      "New Passeword can't be same as Current pass";
    hasnewPasswordErr = true;
  }else {
    document.getElementById("crPassErr").innerHTML = "";
    hascrPasswordErr = false;
  }

     if (!renewPassword) {
    document.getElementById("renewPassErr").innerHTML =
      "Re type pass is Passeword field is required";
    hasRenewPasswordErr = true;
  }
  else if(newPassword !== renewPassword){
    document.getElementById("renewPassErr").innerHTML =
      "Re type password must be same as New password";
    hasRenewPasswordErr = true;
  }
else {
    document.getElementById("renewPassErr").innerHTML = "";
    hasRenewPasswordErr = false;
  }

  if (!newPassword) {
    document.getElementById("newPassErr").innerHTML =
      "New Passeword field is required";
    hasnewPasswordErr = true;
  } else if (newPassword.length < 8) {
    document.getElementById("newPassErr").innerHTML =
      "Password can not be less than 8 char";
    hasnewPasswordErr = true;
  } else if (!isValidpass) {
    document.getElementById("newPassErr").innerHTML = "pass is not valid,must contain special char";
  }else {
    document.getElementById("newPassErr").innerHTML = "";
    hasnewPasswordErr = false;
  }

  

  if (hascrPasswordErr || hasnewPasswordErr || hasRenewPasswordErr) {
    return false;
  } else {
    return true;
  }
}