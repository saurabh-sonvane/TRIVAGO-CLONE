class User{
  constructor(email,password,name){
    this.email=email;
    this.password=password;
    this.name=name;
  }
}


document.querySelector("#forgot").addEventListener("submit", fop);
var userbase = JSON.parse(localStorage.getItem("userbase")) ||[];

function fop() {
  event.preventDefault();
  var newpassname = document.getElementById("newpassname").value;
  var conpassname = document.getElementById("conpassname").value;
  if(newpassname!=conpassname){
    alert(" confirm password does not match")
    return
  }
  
  var currentuser=JSON.parse(localStorage.getItem("currentuser")) ||[];
  for(let i=0; i<userbase.length; i++){
    if(userbase[i].email==currentuser.email){
      userbase[i].password=newpassname;
      localStorage.setItem("userbase", JSON.stringify(userbase));
      alert("new password set successfully");
      window.location.href="./email.html"
      return
    }
  }
   
  }

  function countcharcter(){
   var news = document.getElementById("newpassname").value;
   var ct= document.getElementById("count")
   ct.textContent=news.length;
   upper();
  }
  
  function upper(){
    var count=0;
    var up= document.getElementById("newpassname").value;
    var cts=document.getElementById("upper")
    for(let i=0; i<up.length; i++){
        if(up[i]==up[i].toUpperCase()){
           count++;
        }
    }
    cts.textContent=count
   
  }
  const passwordInput = document.querySelector("#newpassname")
  const eye = document.querySelector('#togglePassword')
  
  eye.addEventListener("click", function(){
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)
      passwordInput.setAttribute("class" , "ey")
     
          this.classList.add( "fa-regular");
          this.classList.add("fa-eye");
        }
  )

  const passwordInput1 = document.querySelector("#conpassname")
  const eye1 = document.querySelector('#togglePassword1')
  
  eye1.addEventListener("click", function(){
      const type1 = passwordInput1.getAttribute("type") === "password" ? "text" : "password"
      passwordInput1.setAttribute("type", type1)
      passwordInput1.setAttribute("class" , "ey")
     
          this.classList.add( "fa-regular");
          this.classList.add("fa-eye");
        }
  )