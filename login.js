  function login2(){
    var email=document.getElementById("emailid").value;
    console.log(email);
    localStorage.setItem("email",JSON.stringify(email))
    window.location.href="./login2.html"
    }
    var email=JSON.parse(localStorage.getItem("email"))
    console.log(email);