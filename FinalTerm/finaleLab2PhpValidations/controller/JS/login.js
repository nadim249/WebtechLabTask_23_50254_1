
function handleValidation() {

  const usname = document.getElementById("usName").value;
  const password = document.getElementById("pass").value;

  const usNamepattern = /^[A-Za-z0-9._-]+$/;
  const isValidusername = usNamepattern.test(usname);

  const passpattern=/^(?=.*[@#$%]).+$/;
  const isValidpass = passpattern.test(password);


  let hasUsNameErr = true;
  let hasPasswordErr = true;

  if (!usname) {
    document.getElementById("usNameErr").innerHTML = "User name field is required";
    hasUsNameErr = true;
  } else if (usname.length < 2) {
    document.getElementById("usNameErr").innerHTML =
      "Username can not be less than 2 char";
    hasUsNameErr = true;
  }else if (!isValidusername) {
    document.getElementById("usNameErr").innerHTML = "USer name is not valid";
    hasUsNameErr=true;
  } else {
    document.getElementById("usNameErr").innerHTML = "";
    hasUsNameErr = false;
  }

  if (!password) {
    document.getElementById("passErr").innerHTML =
      "Passeword field is required";
    hasPasswordErr = true;
  } else if (password.length < 8) {
    document.getElementById("passErr").innerHTML =
      "Password can not be less than 8 char";
    hasPasswordErr = true;
  } else if (!isValidpass) {
    document.getElementById("passErr").innerHTML = "pass is not valid,must contain special char";
    hasPasswordErr=true;
  }else {
    document.getElementById("passErr").innerHTML = "";
    hasPasswordErr = false;
  }

  if (hasUsNameErr || hasPasswordErr) {
    return false;
  } else {
    return true;
  }
}