
class User{
  constructor(email,password,name){
    this.email=email;
    this.password=password;
    this.name=name;
  }
}


document.getElementById("fillemail").addEventListener("submit", emailfun)

var array=JSON.parse(localStorage.getItem("userbase"))|| [];
  function emailfun(){
    event.preventDefault();
    // console.log(array);
    var email=document.getElementById("emailname").value;
    for(let i=0; i<array.length; i++){
   
      if(array[i].email==email){
        let user=new User(email,"","");
        localStorage.setItem("currentuser", JSON.stringify(user));
        window.location.href="./pass.html"
        console.log(array[i]);
        console.log("200")
        return
      }
    }
  

    let user=new User(email,"","");
    localStorage.setItem("newuser", JSON.stringify(user));
    window.location.href="./log.html"
    console.log("404");
  }
 


    