// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters =/[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }



document.getElementById("passw").addEventListener("submit",passfun)

var array=JSON.parse(localStorage.getItem("password"))||[]
  function passfun(){
    event.preventDefault();
    var pass=document.getElementById("passname").value;
     array.push(pass);
     localStorage.setItem("password", JSON.stringify(array));
     console.log("data");
    window.location.href="./project.html"
   
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