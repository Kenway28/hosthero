let menuBtn = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


let subBtn = document.querySelector(".sub-menu-btn");
let subMenu = document.querySelector(".sub-menu");

subBtn.addEventListener("click", () => {
  subMenu.classList.toggle("active");
  let icon = subBtn.querySelector("i");
  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.add("fa-chevron-down");
    icon.classList.remove("fa-chevron-up");
  }
});


let currentDate = new Date().getTime();
let nextTarget = currentDate + 554400000;
let count = document.querySelector(".counter");
let conter = setInterval(() => {
  let dateNow = new Date().getTime();
  let diff = nextTarget - dateNow;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days.toString().padStart(2, "0");
  document.querySelector(".hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");

  document.querySelector(".seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");
}, 1000);