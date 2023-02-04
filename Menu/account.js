// var user=JSON.parse(localStorage.getItem("newuser")) ||{};
 var arr=JSON.parse(localStorage.getItem("userbase")) ||[];
document.getElementById("personalInformation")
 var obj1=JSON.parse(localStorage.getItem("fname")) || "";
 var obj3=JSON.parse(localStorage.getItem("lname")) || "";

function upinfo(){
    // event.preventDefault();
var fname=document.getElementById("fname").value;
var  lname=document.getElementById("lname").value;

if(fname.length==0 || lname.length==0){
    alert("please fill the required field")
    return 
}
 if(fname.length<4 || lname.length<4){
    alert("please fill more the 3 characters")
    return
 }

 let user=JSON.parse( localStorage.getItem("newuser"));
user.name=fname;
arr.push(user)
console.log(user, arr)
  
 localStorage.setItem("userbase", JSON.stringify(arr));
 localStorage.setItem("currentuser", JSON.stringify(user));
 localStorage.setItem("newuser","");

 alert("Your changes has been saved")
 

}

let currentuser=JSON.parse(localStorage.getItem("currentuser"))

document.getElementById("Passwordinformation")
var obj2=JSON.parse(localStorage.getItem("passwo")) ||[];
function uppass(){
    // event.preventDefault();
    var oldpass=document.getElementById("oldpass").value;
    var  newpass=document.getElementById("newpass").value;

    for(let i=0; i<arr.length; i++){
        if(arr[i].email==currentuser.email && arr[i].password==oldpass){
            arr[i].password=newpass;
            currentuser.password=newpass;
            alert("Your changes has been saved")
            break;
        }
    }
    localStorage.setItem("currentuser" , JSON.stringify(currentuser));
 localStorage.setItem("userbase", JSON.stringify(arr))
 
}

const passwordInput = document.querySelector("#newpass")
const eye = document.querySelector("#eyes")

eye.addEventListener("click", function(){
    // this.classList.toggle("eyeicon")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })

  window.onload=function(){
    document.getElementById("accountSettings").style.color="black"
    document.getElementById("accountSettingsdiv").style.backgroundColor="#f3f4f5"
    document.getElementById("pagevisit").style.backgroundColor="black"
    document.getElementById("pagevisit").style.border="3px solid black"
    document.getElementById("pagevisit").style.height="18px"
   
   
  }

  function countcharcter(){
    var news = document.getElementById("newpass").value;
    var ct= document.getElementById("count")
    ct.textContent=news.length;
    upper();
   }
   
   function upper(){
     var count=0;
     var up= document.getElementById("newpass").value;
     var cts=document.getElementById("upper")
     for(let i=0; i<up.length; i++){
         if(up[i]==up[i].toUpperCase()){
            count++;
         }
     }
     cts.textContent=count
    
   }