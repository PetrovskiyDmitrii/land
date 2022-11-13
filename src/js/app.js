const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu__header img');
const mMenu = document.querySelector('.burger-menu');

const openMenu = () => {
  burger.classList.toggle('active');
  mMenu.classList.toggle('active');
}

burger.addEventListener('click', openMenu)
burgerMenu.addEventListener('click', openMenu)