
function formvalidation(e){
const NameValue=document.getElementById("namef").value
const passwordValue=document.getElementById("password").value
const myForm=document.getElementById("myform")
e.preventDefault(); 

            if (!NameValue || NameValue == "") {
                const ErrorElement = document.getElementById("nameErr");
                ErrorElement.innerHTML = "Name is required";
            } else {
                const ErrorElement = document.getElementById("nameErr");
                ErrorElement.innerHTML = "";
            }
                        if (!passwordValue || passwordValue == "") {
                const ErrorElement = document.getElementById("passwordErr");
                ErrorElement.innerHTML = "Password is required";
            } else {
                const ErrorElement = document.getElementById("passwordErr");
                ErrorElement.innerHTML = "";
            }

}