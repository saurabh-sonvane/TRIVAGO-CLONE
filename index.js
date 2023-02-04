function onloadHomePage(){
// localStorage.setItem("currentUser","sa");
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log(d.getMonth());
    document.querySelector(".checkIn").innerHTML=day+", "+d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear();

document.querySelector(".part3").addEventListener("click",showGetInfoDiv);


let numberOfAdults=localStorage.getItem("adults_number")||1;
let numberOfChildrens=localStorage.getItem("childrens_number")||0;
let numberOfRooms=localStorage.getItem("rooms_number")||1;
let totalGuest=Number(numberOfAdults)+Number(numberOfChildrens);
localStorage.setItem("totalGuest",totalGuest);
document.querySelector(".guests").innerHTML=totalGuest;
document.querySelector(".rooms").innerHTML=numberOfRooms;


// recent data part
var tt=JSON.parse(localStorage.getItem("currentuser"))||"";
if(tt!=""){
    document.querySelector(".userName").innerHTML=tt.name;
}

 var arrr=JSON.parse(localStorage.getItem("Hotel"))||[];
 if(arrr.length>=2){
    document.querySelector("._ctyname1").innerHTML=arrr[arrr.length-2].hotelName;
    document.querySelector("#_date1").textContent="04-02-2023"
    document.querySelector("._rooom1").textContent="1";
    document.querySelector("._guest1").textContent="1";

    document.querySelector("._ctyname2").textContent=arrr[arrr.length-1].hotelName;
    document.querySelector("#_date2").textContent="04-02-2023"
    document.querySelector("._rooom2").textContent="1";
    document.querySelector("._guest1").textContent="1";
 }else if(arrr.length===1){
    document.querySelector("._ctyname1").textContent=arrr[arrr.length-1].hotelName;
    document.querySelector("#_date1").textContent="04-02-2023"
    document.querySelector("._rooom1").textContent="1";
    document.querySelector("._guest1").textContent="1";
 }

}


// microphone
const button = document.querySelector('.mic');
const textInput = document.querySelector('.search');

button.addEventListener('click', () => {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = event => {
    textInput.value = event.results[0][0].transcript;
  };
  recognition.start();
});



let getInfoDIvClk=0;
function showGetInfoDiv(){
    getInfoDIvClk++;
    if(getInfoDIvClk%2==1){
        document.querySelector(".guestInfoDiv").style="  display: block; position: absolute;top: 58%;  left: 55%; width: 20%; border-radius: 15px;padding: 20px 15px; display: flex; flex-direction: column;gap: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; z-index: 3;background: white;";
    }
    else{
        document.querySelector(".guestInfoDiv").style="  display: none;";
    }
}

document.querySelector(".part4_submit").addEventListener("click",submitFunc);
function submitFunc(){
    let checkInValue=document.querySelector(".calen1").value;
    let checkOutValue=document.querySelector(".calen2").value;
    let searchQuerry=document.querySelector(".searchQuerry").value;
if(checkInValue && checkOutValue && searchQuerry){
    localStorage.setItem("checkInDate",checkInValue);
    localStorage.setItem("checkOutDate",checkOutValue);
    localStorage.setItem("searchQuerry",searchQuerry);
    window.open("./search.html");
}
else if(!searchQuerry){
    alert("Enter Location ! 😀");
}
else if(!checkOutValue){
    alert("please select checkout date 😀")
}
else {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let checkInValue=d.getFullYear()+"-"+months[d.getMonth()]+"-"+d.getDate();
    console.log(checkInValue);
    localStorage.setItem("checkInDate",checkInValue);
    localStorage.setItem("searchQuerry",searchQuerry);
    let checkOutValue=document.querySelector(".calen2").value;
    localStorage.setItem("checkOutDate",checkOutValue);
    window.open("./search.html");
}
// set adultNo. childrenNo and roomNo as 1 , 0 , 1 by default 

}

document.querySelector(".applyBtn").addEventListener("click",setUserDetails);
function setUserDetails(){
    let adultsNumber=document.querySelector(".input_adults").value;
   localStorage.setItem("adults_number",adultsNumber);
    let childrensNumber=document.querySelector(".input_childrens").value;
   localStorage.setItem("childrens_number",childrensNumber);
    let roomsNumber=document.querySelector(".input_rooms").value;
   localStorage.setItem("rooms_number",roomsNumber);
   let numberOfAdults=localStorage.getItem("adults_number")||1;
let numberOfChildrens=localStorage.getItem("childrens_number")||0;
let numberOfRooms=localStorage.getItem("rooms_number")||1;
let totalGuest=Number(numberOfAdults)+Number(numberOfChildrens);
localStorage.setItem("totalGuest",totalGuest);

document.querySelector(".guests").innerHTML=totalGuest;
document.querySelector(".rooms").innerHTML=numberOfRooms;

document.querySelector(".guestInfoDiv").style="display:none;";
}

document.querySelector(".resetBtn").addEventListener("click",resetUserDetails);

function resetUserDetails(){
    document.querySelector(".input_adults").value=1;
    localStorage.setItem("adults_number",1);
    document.querySelector(".input_childrens").value=0;
    localStorage.setItem("childrens_number",0);
    document.querySelector(".input_rooms").value=1;
    localStorage.setItem("rooms_number",1);
    localStorage.setItem("totalGuest",1);


    document.querySelector(".guests").innerHTML=1;
document.querySelector(".rooms").innerHTML=1;
}

document.querySelector(".inc_adults").addEventListener("click",increseAdult);
document.querySelector(".dec_adults").addEventListener("click",decreaseAdult);

function increseAdult(){
let x=Number(document.querySelector(".input_adults").value);
document.querySelector(".input_adults").value=x+1;
}

function decreaseAdult(){
    let x=Number(document.querySelector(".input_adults").value);
    if(x>1){
        document.querySelector(".input_adults").value=x-1;
    }
}



document.querySelector(".inc_childrens").addEventListener("click",increseChildren);
document.querySelector(".dec_childrens").addEventListener("click",decreaseChildren);

function increseChildren(){
    let x=Number(document.querySelector(".input_childrens").value);
  document.querySelector(".input_childrens").value=x+1;

}

function decreaseChildren(){
    let x=Number(document.querySelector(".input_childrens").value);
    console.log(x);
    if(x>0){
        document.querySelector(".input_childrens").value=x-1;       
    }
}

document.querySelector(".inc_rooms").addEventListener("click",increseRoom);
document.querySelector(".dec_rooms").addEventListener("click",decreaseRoom);

function increseRoom(){
    let x=Number(document.querySelector(".input_rooms").value);
  document.querySelector(".input_rooms").value=x+1;
}

function decreaseRoom(){
    let x=Number(document.querySelector(".input_rooms").value);
    if(x>1){
        document.querySelector(".input_rooms").value=x-1;
    }

}


// if(Number(document.querySelector(".input_adults").value)>6){
//     alert("You can Book Maximum 6 rooms from a single account 😄 !")
//     return;
// }

document.querySelector(".myFav_text").addEventListener("click",gotoMyFavPage);
function gotoMyFavPage(){
    window.location.href="./favourites/favourites.html";
}

document.querySelector(".nav_login").addEventListener("click",gotoLoginPage);
function gotoLoginPage(){
    window.location.href="../Login/email.html";
}

document.querySelector(".account_settings").addEventListener("click",gotoAccount);
function gotoAccount(){
    window.location.href="./Menu/account.html";
}


document.querySelector(".nav_login").addEventListener("click",gotoLoginPage);
function gotoLoginPage(){
    window.location.href="../Login/email.html";
}
document.querySelector(".recently_viewed").addEventListener("click",gotoRecent);
function gotoRecent(){
    window.location.href="../Menu/recently.html";
}
document.querySelector(".help_support").addEventListener("click",gotoHelp);
function gotoHelp(){
    window.location.href="../Menu/help.html";
}


document.querySelector(".clearInput").addEventListener("click",clearInputFunc);
function clearInputFunc(){
    document.querySelector(".searchQuerry").value="";
}



document.getElementById("mum").addEventListener("click",function(){
    localStorage.setItem("searchQuerry","mumbai");
    localStorage.setItem("checkInDate","2023-02-4");
    localStorage.setItem("checkOutDate","2023-02-05");
    window.open("./search.html");
})

document.getElementById("ben").addEventListener("click",function(){
    localStorage.setItem("searchQuerry","bengaluru");
    localStorage.setItem("checkInDate","2023-02-4");
    localStorage.setItem("checkOutDate","2023-02-05");
    window.open("./search.html");
})

document.getElementById("goa").addEventListener("click",function(){
    localStorage.setItem("searchQuerry","goa");
    localStorage.setItem("checkInDate","2023-02-4");
    localStorage.setItem("checkOutDate","2023-02-05");
    window.open("./search.html");
})

document.getElementById("jai").addEventListener("click",function(){
    localStorage.setItem("searchQuerry","jaipur");
    localStorage.setItem("checkInDate","2023-02-4");
    localStorage.setItem("checkOutDate","2023-02-05");
    window.open("./search.html");
})

document.getElementById("pun").addEventListener("click",function(){
    localStorage.setItem("searchQuerry","pune"); 
    localStorage.setItem("checkInDate","2023-02-4");
    localStorage.setItem("checkOutDate","2023-02-05");
    window.open("./search.html");
})

