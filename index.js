function onloadHomePage(){

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log(d.getMonth());
    document.querySelector(".checkIn").innerHTML=day+", "+d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear();

document.querySelector(".part3").addEventListener("click",showGetInfoDiv);

}
let getInfoDIvClk=0;
function showGetInfoDiv(){
    getInfoDIvClk++;
    if(getInfoDIvClk%2==1){
        document.querySelector(".guestInfoDiv").style="  display: block; position: absolute;top: 58%;  left: 55%; width: 300px; border-radius: 15px;padding: 20px 15px; display: flex; flex-direction: column;gap: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; z-index: 3;background: white;";
    }
    else{
        document.querySelector(".guestInfoDiv").style="  display: none;";
    }
}

document.querySelector(".part4_submit").addEventListener("click",submitFunc);
function submitFunc(){
    let checkInValue=document.querySelector(".calen1").value;
    let checkOutValue=document.querySelector(".calen2").value;
if(checkInValue && checkOutValue){
    localStorage.setItem("checkInDate",checkInValue);
    localStorage.setItem("checkOutDate",checkOutValue);
}

else if(!checkOutValue){
    alert("please select checkout date 😀")
}
else {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let checkInValue=d.getFullYear()+"-"+months[d.getMonth()]+"-"+d.getDate();
    console.log(checkInValue);
    localStorage.setItem("checkInDate",checkInValue);
    let checkOutValue=document.querySelector(".calen2").value;
    localStorage.setItem("checkOutDate",checkOutValue);
}
// set adultNo. childrenNo and roomNo as 1 , 0 , 1 by default 
}

document.querySelector(".applyBtn").addEventListener("click",setUserDetails);
    console.log(ad);
function setUserDetails(){
    let adultsNumber=document.querySelector(".input_adults").value;
   localStorage.setItem("adults_number",adultsNumber);
    let childrensNumber=document.querySelector(".input_childrens").value;
   localStorage.setItem("childrens_number",childrensNumber);
    let roomsNumber=document.querySelector(".input_rooms").value;
   localStorage.setItem("rooms_number",roomsNumber);

}

document.querySelector(".resetBtn").addEventListener("click",resetUserDetails);

function resetUserDetails(){
    document.querySelector(".input_adults").value=1;
    localStorage.setItem("adults_number",1);
    document.querySelector(".input_childrens").value=0;
    localStorage.setItem("childrens_number",0);
    document.querySelector(".input_rooms").value=1;
    localStorage.setItem("rooms_number",1);
}