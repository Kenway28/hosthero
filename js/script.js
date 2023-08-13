let menuBtn = document.querySelector(".nav-toggler");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-arrow-up");
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
// let nextTarget = currentDate + 554400000;
let nextTarget = currentDate + 86420000;
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

let upBtn = document.querySelector(".go-up-btn");

window.onscroll = function (params) {
  if (window.scrollY >= 1000) {
    upBtn.classList.remove("hide");
  } else {
    upBtn.classList.add("hide");
  }
};

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




/*** page not found in any link  */
let links = Array.from(document.querySelectorAll("a"));
links.forEach(link => {
  link.addEventListener("click", (e) => {
  e.preventDefault();
  var http = new XMLHttpRequest();
  http.open("HEAD", link.href, false);
  http.send();
  if (http.status != 404) {
    window.open(link.href, "_self")
  } else {
    window.open("../404.html", "_self")
  }
});
});