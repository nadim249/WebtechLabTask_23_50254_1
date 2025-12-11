
function handleregvalidation() {

  const fname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
  const uname = document.getElementById("username").value;
  const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;



  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const isValidEmail = emailPattern.test(email);

    const usNamepattern = /^[A-Za-z0-9._-]+$/;
  const isValidusername = usNamepattern.test(uname);

  const passpattern=/^(?=.*[@#$%]).+$/;
  const isValidpass = passpattern.test(password);


  let hasFnameErr = true;
  let hasEmaillErr=true;
  let hasUsNameErr =true;
  let hasPasswordErr = true;
  let hascPasswordErr=true;

  if (!fname) {
    document.getElementById("fnameErr").innerHTML = "Name field is required";
    hasFnameErr = true;
  } else {
    document.getElementById("fnameErr").innerHTML = "";
    hasFnameErr = false;
  }

   if (!email) {
    document.getElementById("emailErr").innerHTML = "email field is required";
    hasEmaillErr = true;
  }else if (!isValidEmail) {
    document.getElementById("usNameErr").innerHTML = "email is not valid";
    hasEmaillErr=true;
  }  else {
    document.getElementById("emailErr").innerHTML = "";
    hasEmaillErr = false;
  }


   if (!uname) {
    document.getElementById("usNameErr").innerHTML = "user Name field is required";
    hasUsNameErr = true;
  }else if (uname.length < 5) {
    document.getElementById("usNameErr").innerHTML =
      "Username can not be less than 5 char";
    hasUsNameErr = true;
  }else if (!isValidusername) {
    document.getElementById("usNameErr").innerHTML = "username is not valid";
    hasUsNameErr=true;
  } else {
    document.getElementById("usNameErr").innerHTML = "";
    hasUsNameErr = false;
  }



  if (!password) {
    document.getElementById("passErr").innerHTML =
      "Passeword field is required";
    hasPasswordErr = true;
  }else if (password.length < 6) {
    document.getElementById("passErr").innerHTML =
      "password can not be less than 6 char";
    hasPasswordErr = true;
  } else if (!isValidpass) {
    document.getElementById("passErr").innerHTML = "pass is not valid,must contain special char";
    hasPasswordErr=true;
  }else {
    document.getElementById("passErr").innerHTML = "";
    hasPasswordErr = false;
  }
  
    if (!cpassword) {
    document.getElementById("cpassErr").innerHTML =
      "confirm Passeword field is required";
    hascPasswordErr = true;
  } else if(password !== cpassword){
    document.getElementById("cpassErr").innerHTML =
      "Re type password must be same as New password";
    hascPasswordErr = true;
  }else {
    document.getElementById("cpassErr").innerHTML = "";
    hascPasswordErr = false;
  }

  if (hasUsNameErr || hasPasswordErr) {
    return false;
  } else {
    return true;
  }
}