document.querySelector("#forgot").addEventListener("submit", fop);
var old_data = JSON.parse(localStorage.getItem("currentUser")) ||[];

function fop() {
  event.preventDefault();
  var newpassname = document.getElementById("newpassname").value;
  var conpassname = document.getElementById("conpassname").value;
  
  old_data.push(conpassname);

  localStorage.setItem("currentUser", JSON.stringify(old_data));
  
    if ( newpassname === conpassname) {
    
      alert("new password set successfully");

    }else{
        alert("password does not match")
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
