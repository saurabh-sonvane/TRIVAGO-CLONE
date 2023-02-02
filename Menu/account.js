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

var data=fname;
var data1=lname;

    console.log(data);
obj1=data;
obj3=data1;
 localStorage.setItem("fname", JSON.stringify(obj1))
 localStorage.setItem("lname", JSON.stringify(obj3))
 alert("Your changes has been saved")


}

document.getElementById("Passwordinformation")
var obj2=JSON.parse(localStorage.getItem("passwo")) ||[];
function uppass(){
    // event.preventDefault();
var oldpass=document.getElementById("oldpass").value;
var  newpass=document.getElementById("newpass").value;

if(oldpass.length==0 || newpass.length==0){
    alert("please fill the required field")
    return 
}
 if(fname.length<10 || lname.length<10){
    alert("please fill more the 3 characters")
    return
 }

var data={oldpass, newpass};
console.log(data);
obj2.push(data);
 localStorage.setItem("passwo", JSON.stringify(obj2))
 alert("Your changes has been saved")
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