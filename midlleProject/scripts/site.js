// JavaScript Document

// JavaScript Document

// Responsive Menu - Dropdown
const body = document.querySelector("body");
const btnMenu = document.querySelector(".btn-menu");
const nav = document.querySelector("header nav");

// Below code for preventing nav from animating on
// browser re-size modified from code found at
// this stackoverflow question and answer:
//
// https://goo.gl/6s3pAZ

btnMenu.addEventListener("click", openMenu);

function openMenu() {
  body.classList.toggle("show");
}

// Media Query Event Listener
// - This is used to remove the "activated"
// class from the navigation when the user
// resizes the browser

// Prevents the focus state from activating
btnMenu.addEventListener("mousedown", function(e) {
  e.preventDefault();
});
