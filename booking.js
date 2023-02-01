
import { navbar } from "./modules/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let url = "http://localhost:3000/hotels/50";

window.onload = async function() {
    let response = await fetch(url);
    let json = await response.json();
    display(json);
}

function display(data) {
    let container = document.querySelector("#head");
    let image = document.createElement("img");
    image.src = data.hotelThumbnail;
    image.className = "slide";
    image.id = "headImage";
    container.append(image);
    let imageArray = data.Photos;
    let i = 0;
    setInterval(function() {
        if(i == imageArray.length) {
            i = 0;
        }
        container.innerHTML = "";
        let image1 = document.createElement("img");
        image1.src = imageArray[i];
        image1.className = "slide";
        image1.id = "headImage";
        container.append(image1);
        i++;
    }, 3000);
    

    let name = document.querySelector("#name");
    name.textContent = data.hotelName;

    let description = document.querySelector("#desc");
    description.textContent = (data.descriptionOfHotel).substring(0, 188) + " ...";

    let rating = document.querySelector("#rating");
    rating.textContent = data.rating.overall;

    let allReviews = document.querySelector("#all");
    let review = Number.parseInt(data.review);
    let tag = "";
    if(review > 1000) {
        tag = "Excellent";
    } else {
        tag = "Good"
    }

    allReviews.textContent = `(${review} Reviews) . ${tag}`;
}

document.querySelector("#otpButton").addEventListener("click", function clicker() {
    let otpElem = document.querySelector("#otp");
    let emailElem = document.querySelector("#emailVerify");
    otpElem.style.display = "grid";
    emailElem.style.opacity = "50%";
    document.querySelector("#otpButton").removeEventListener("click", clicker);
});

document.querySelector("#otpVerify").onclick = function() {
    let name = document.querySelector("#userName").value;
    let phone = document.querySelector("#userPhone").value;
    let email = document.querySelector("#userEmail").value;
    let otp = document.querySelector("#otpValue").value;
    document.querySelector("#heading").innerHTML = ` <i style = "color:green" class="fa-solid fa-circle-check"></i> Your Details`;

    document.querySelector("#ext").innerHTML = getDetails(name,email,phone);
    document.querySelector("#paymentDetails").style.opacity = "100%";
}

function getDetails(name,email,phone) {
    return `<div id="yourDetails">
    <div> Name: ${name} </div>
    <div style="border:1px solid black;"> </div>
    <div> Email: ${email} </div>
    <div style="border:1px solid black;"> </div>
    <div> Phone No: ${phone} </div>
    </div>`;
}