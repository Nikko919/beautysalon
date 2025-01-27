const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu-list')

burger.addEventListener('click', mobailMenu);

function mobailMenu() {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav__menu-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
}