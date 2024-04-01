let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".header__menu-list");
let links = document.querySelectorAll('.header__menu-link')
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
for (let link of links) {
    link.addEventListener(`click`, closeMenu);
}
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}