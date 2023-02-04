
let user=JSON.parse( localStorage.getItem("newuser"));


document.getElementById("passw").addEventListener("submit",passfun)

  function passfun(){
    event.preventDefault();
    var pass=document.getElementById("passname").value;
    user.password=pass;
     
     localStorage.setItem("newuser", JSON.stringify(user));
     alert("Password set successfully")
    window.location.href="../Menu/account.html"
   
  }
  

  function countcharcter(){
    var news = document.getElementById("passname").value;
    var ct= document.getElementById("count")
    ct.textContent=news.length;
    upper();
   }
   
   function upper(){
     var count=0;
     var up= document.getElementById("passname").value;
     var cts=document.getElementById("upper")
     for(let i=0; i<up.length; i++){
         if(up[i]==up[i].toUpperCase()){
            count++;
         }
     }
     cts.textContent=count
    
   }
  const passwordInput = document.querySelector("#passname")
  const eye = document.querySelector('#togglePassword')
  
  eye.addEventListener("click", function(){
    // this.toggle("fa-eye fa-eye-slash")
      // this.classList.toggle("eyeicon" ,"fa-eye fa-eye-slash")
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)
      passwordInput.setAttribute("class" , "ey")
     
          this.classList.add( "fa-regular");
          this.classList.add("fa-eye");
        }
      
     
   
  )

    var saveemail=JSON.parse(localStorage.getItem("email"))||[];
      var sav=document.getElementById("savemail")
      sav.append(saveemail);