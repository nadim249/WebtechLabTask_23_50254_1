
function formvalidation(){
const NameValue=document.getElementById("fname").value
const passwordValue=document.getElementById("femail").value
const virtual=document.getElementById("virtual-r")
const inperson=document.getElementById("inperson-r")


            if ( NameValue == "") {
                const ErrorElement = document.getElementById("nameErr");
                ErrorElement.innerHTML = "Name is required";
            } else {
                const ErrorElement = document.getElementById("nameErr");
                ErrorElement.innerHTML = ""
            }
                if (passwordValue == "") {
                const ErrorElement = document.getElementById("emailErr");
                ErrorElement.innerHTML = "Email is required";
            } else {
                const ErrorElement = document.getElementById("emailErr");
                ErrorElement.innerHTML = "";
            }

            if(!virtual.checked && !inperson.checked){
                const ErrorElement = document.getElementById("typeerr");
                ErrorElement.innerHTML = "type is required";
            }else {
                const ErrorElement = document.getElementById("typeerr");
                ErrorElement.innerHTML = "";
            }
        }

        function showAnalytics(){
            const btn_anlysis =document.getElementById("btn-anl")
            if(btn_anlysis.innerHTML=="Show Event Analytics"){
              document.getElementById("info-div").style.display = "block";
              btn_anlysis.innerHTML="Hide Event Analytics"
            }else{
            document.getElementById("info-div").style.display = "none";
              btn_anlysis.innerHTML="Show Event Analytics"
            }
        }
