const navbarList = document.querySelector('.navbar-list');
const burgerMenu = document.querySelector('.menu-burger');

burgerMenu.addEventListener('click', () => {
   navbarList.classList.toggle('navbar-list__active');
   burgerMenu.classList.toggle('active')
});