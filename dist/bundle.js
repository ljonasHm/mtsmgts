/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/scss.scss":
/*!******************************!*\
  !*** ./src/styles/scss.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mtsmgts/./src/styles/scss.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scss.scss */ \"./src/styles/scss.scss\");\n\r\n\r\n\r\nfunction tarifList() {\r\n    \r\n    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');\r\n    const tarifCards = document.querySelectorAll('.tarif__list--card');\r\n\r\n    tarifSelectors.forEach(selector => {\r\n        selector.addEventListener('click', () => {\r\n            tarifSelectors.forEach(elem => {\r\n                if (elem.classList.contains('checked-member')) {\r\n                    elem.classList.remove('checked-member');\r\n                    elem.firstElementChild.classList.remove('checked--after');\r\n                }\r\n            });\r\n            selector.classList.add('checked-member');\r\n            selector.firstElementChild.classList.add('checked--after');\r\n            tarifCards.forEach(card => {\r\n                if (card.dataset.category.indexOf(selector.dataset.category) != -1\r\n                    && card.classList.contains('hide')) {\r\n                        card.classList.remove('hide')\r\n                } else if (card.dataset.category.indexOf(selector.dataset.category) == -1 && !card.classList.contains('hide')) {\r\n                    card.classList.add('hide');\r\n                }\r\n            });\r\n        });\r\n    });\r\n}\r\n\r\nfunction modal() {\r\n    const btns = document.querySelectorAll('.card__button');\r\n    const modal = document.querySelector('.modal');\r\n    const modalWindow = document.querySelector('#modal__window');\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            modal.style.height = window.getComputedStyle(document.body).height;\r\n            modal.classList.remove('hide');\r\n            modalWindow.style.top = `${e.pageY - e.clientY + 100}px`\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal){\r\n            close();\r\n        }\r\n    });\r\n\r\n    function close() {\r\n        modal.classList.add('hide');\r\n    }\r\n}\r\n\r\ntarifList();\r\nmodal();\n\n//# sourceURL=webpack://mtsmgts/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;