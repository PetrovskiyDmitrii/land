import intlTelInput from 'intl-tel-input';

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu__header img');
const mMenu = document.querySelector('.burger-menu');

const openMenu = () => {
  burger.classList.toggle('active');
  mMenu.classList.toggle('active');
}

burger.addEventListener('click', openMenu)
burgerMenu.addEventListener('click', openMenu)

const playButton = document.querySelector('.video-custom-button');
const video = document.getElementById('video');

playButton.addEventListener('click', () => {
  if (video.paused == true) {
    video.play();
  } else {
    video.pause();
  }
});


// const input = document.querySelector("#phone");
// intlTelInput(input, {
//     // any initialisation options go here
//     utilsScript: "/node_modules/intl-tel-input/build/js/utils.js",
// });

const input = document.querySelectorAll("#phone");
input.forEach(item => {
  intlTelInput(item, {
      utilsScript: "/node_modules/intl-tel-input/build/js/utils.js",
    });
});
