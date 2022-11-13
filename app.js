/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function() {

eval("const burger = document.querySelector('.burger');\nconst burgerMenu = document.querySelector('.burger-menu__header img');\nconst mMenu = document.querySelector('.burger-menu');\n\nconst openMenu = () => {\n  burger.classList.toggle('active');\n  mMenu.classList.toggle('active');\n}\n\nburger.addEventListener('click', openMenu)\nburgerMenu.addEventListener('click', openMenu)\n\nconst playButton = document.querySelector('.video-custom-button');\nconst video = document.getElementById('video');\n\nplayButton.addEventListener('click', () => {\n  if (video.paused == true) {\n    video.play();\n    // playButton.innerHTML = \"Pause\";\n  } else {\n    video.pause();\n    // playButton.innerHTML = \"Play\";\n  }\n});\n\n//# sourceURL=webpack://ae/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;