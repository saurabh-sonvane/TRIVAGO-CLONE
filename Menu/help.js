
window.onload = function () {
  document.getElementById("helpsettings").style.color = "black"
  document.getElementById("accountSettingsdiv2").style.backgroundColor = "#f3f4f5"
  document.getElementById("pagevisit2").style.backgroundColor = "black"
  document.getElementById("pagevisit2").style.border = "3px solid black"
  document.getElementById("pagevisit2").style.height = "18px"


}

document.getElementById("selectoption").addEventListener("change", selec);
var container = document.getElementById("writing");
function selec() {
  var arr1 = document.getElementById("selectoption").value;
  if (arr1 == "opt1") {
    container.textContent = "Remember! trivago is a price comparison website, bookings are not made directly with us. To find out more, click here I have nott received my booking confirmation In some cases, it may take up to 72 hours for the booking site to send the booking confirmation.Has it been longer since you have booked ? Is your trip coming up soon ? Its always best to speak to the booking site directly"


  } else if (arr1 == "opt2") {
    container.textContent = "Something went wrong? Need your money back? Need an invoice or a receipt for your records? We recommend contacting the booking site used to secure the reservation. If you would like to contact the booking site, most contact information can be found at the bottom of your booking confirmation. Alternatively, booking sites will have a contact page, where you will find all contact details including direct phone numbers to the booking site's support center.";
  } else if (arr1 == "opt3") {
    container.textContent = "To cancel or change your booking, it's always best to speak to the booking site directly. Since the booking site is responsible for your reservation, they would be able to help you! Most contact information can be found at the bottom of your booking confirmation. Alternatively, booking sites will have a contact page, where you will likely find all contact details including direct phone numbers to the booking site's support center."
  } else if (arr1 == "opt4") {
    container.textContent = "Remember! trivago is a price comparison website, bookings are not made directly with us";
  }
}