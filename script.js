// MOBILE MENU

const toggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

toggle.onclick = () => {

navLinks.classList.toggle("active");

};

// DARK MODE TOGGLE

const darkToggle =
document.getElementById("darkToggle");

darkToggle.onclick = () => {

document.body.classList.toggle("dark");

// SAVE THEME

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

darkToggle.textContent="☀️";

}

else{

localStorage.setItem("theme","light");

darkToggle.textContent="🌙";

}

};

// LOAD SAVED THEME

window.onload = () => {

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

darkToggle.textContent="☀️";

}

};

// TYPING EFFECT

const text = [

"ICT Specialist",
"Network Administrator",
"Cybersecurity Expert",
"Software Developer"

];

let index = 0;
let charIndex = 0;

function type(){

if(charIndex < text[index].length){

document.querySelector(".typing")
.textContent +=
text[index].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex > 0){

document.querySelector(".typing")
.textContent =
text[index].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}

else{

index++;

if(index >= text.length)
index=0;

setTimeout(type,500);

}

}

document.addEventListener(
"DOMContentLoaded",
type
);

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});

// CONTACT FORM ALERT

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

});