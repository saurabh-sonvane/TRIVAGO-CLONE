
window.onload=function(){
    document.getElementById("helpsettings").style.color="black"
    document.getElementById("accountSettingsdiv2").style.backgroundColor="#f3f4f5"
    document.getElementById("pagevisit2").style.backgroundColor="black"
    document.getElementById("pagevisit2").style.border="3px solid black"
    document.getElementById("pagevisit2").style.height="18px"
   
   
  }

  document.getElementById("selectoption").addEventListener("change", selec);
  var container=document.getElementById("writing");
  function selec(){
   var arr1= document.getElementById("selectoption").value;
      if(arr1=="opt1"){
        container.textContent="eeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
      }else if(arr1=="opt2"){
        container.textContent="fffffffffffffffffff";
      }else if(arr1=="opt3"){
        container.textContent="iiiiiiiiiiiiiiiiiii";
      }else if(arr1=="opt4"){
        container.textContent="uuuuuuuuuuuuuuuu";
      }
  }