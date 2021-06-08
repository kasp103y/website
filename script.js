const navMenu = document.querySelector(".nav_menu");
const burger = document.querySelector(".hamburger");
const link = document.querySelector(".nav_link");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("SidenVises");
}

burger.addEventListener("click", mobil);

function mobil() {
  burger.classList.toggle("open");
  navMenu.classList.toggle("open");

  link.addEventListener("click", closeMenu);
}

function closeMenu() {
  burger.classList.remove("open");
  navMenu.classList.remove("open");
}
