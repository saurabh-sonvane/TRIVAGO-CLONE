
document.getElementById("fillemail").addEventListener("submit", emailfun)

var array=JSON.parse(localStorage.getItem("email"))|| [];
  function emailfun(){
    event.preventDefault();
    var email=document.getElementById("emailname").value;
     array.push(email);
     localStorage.setItem("email", JSON.stringify(array));
     console.log("data");
    window.location.href="./pass.html"
   
  }


    