let menuBtn = document.querySelector(".nav-toggler");
let nav = document.querySelector("nav");

let langPanelClose = document.querySelector(".close-lang-panel");
let langOverlay = document.querySelector(".lang-overlay");
let langIcon = document.querySelector(".lang-icon");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  subMenu.classList.remove("active");
});

let subBtn = document.querySelector(".mega-menu-btn");
let subMenu = document.querySelector(".mega-menu");

subBtn.addEventListener("click", () => {
  subMenu.classList.toggle("active");
  langPanel.classList.remove("active");
  let icon = subBtn.querySelector("i");
  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.add("fa-chevron-down");
    icon.classList.remove("fa-chevron-up");
  }
});

console.log(/index/.test(location.href));
if (/index/.test(location.href)) {
  let currentDate = new Date().getTime();
  let nextTarget = currentDate + 86420000;
  setInterval(() => {
    let dateNow = new Date().getTime();
    let diff = nextTarget - dateNow;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days
      .toString()
      .padStart(2, "0");
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
}

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
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var http = new XMLHttpRequest();
    http.open("HEAD", link.href, false);
    http.send();
    if (http.status != 404) {
      window.open(link.href, "_self");
    } else {
      window.open("../404.html", "_self");
    }
  });
});

langIcon.addEventListener("click", () => {
  subMenu.classList.remove("active");
  nav.classList.remove("active");
  langOverlay.classList.toggle("active");
});

langPanelClose.addEventListener("click", () => {
  langOverlay.classList.toggle("active");
});
