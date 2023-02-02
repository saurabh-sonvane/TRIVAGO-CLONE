var array=JSON.parse(localStorage.getItem("items"))||[]
  function login2(){
    var email=document.getElementById("emailid").value;
    console.log(email);
  
   //eid.textContent=email;
    
   localStorage.setItem("email",JSON.stringify(email))
   var a=array.filter(function(elem){
    return elem.email==email
   })
   console.log(a);
   if(a==true){
    return window.location.href="./login2.html"
   }else{
     return window.location.href="./login3.html"
   }


    }

    var email=JSON.parse(localStorage.getItem("email"))
    
    var eid=document.getElementById("eid")
    eid.innerHTML=email;
     
     console.log(email);
    
   
    function submit(){
        var pass=document.getElementById("password").value;
        console.log(pass);
        let data={
            email:email,
            pass:pass,
        }
        console.log(data);
        array.push(data);
        localStorage.setItem("items",JSON.stringify(array))
         var items=JSON.parse(localStorage.getItem("items"));
         console.log(items);
         window.location.href="./login3.html"
    }