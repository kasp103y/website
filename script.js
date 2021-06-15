const navMenu = document.querySelector(".nav_menu");
const burger = document.querySelector(".hamburger");

//window.addEventListener("load", sidenVises);
//function sidenVises() {
//  console.log("SidenVises");
//}

burger.addEventListener("click", mobil);

function mobil() {
  burger.classList.toggle("open");
  navMenu.classList.toggle("open");
}
