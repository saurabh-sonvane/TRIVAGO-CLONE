



document.getElementById("passw").addEventListener("submit",passfun)

var array=JSON.parse(localStorage.getItem("userbase")) ||[];
  function passfun(){
    event.preventDefault();
    var pass=document.getElementById("passname").value;
    for(let i=0; i<array.length; i++){
      if(array[i].password==pass){
        alert("login successfull")
        window.location.href="./project.html"
        localStorage.setItem("currentuser", JSON.stringify(array[i]));
        
        return
      }
    }
    alert("wrong password")
   
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

    var saveemail=JSON.parse(localStorage.getItem("currentuser"))||[];
      var sav=document.getElementById("savemail")
      sav.append(saveemail.email);

      