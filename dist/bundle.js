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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scss.scss */ \"./src/styles/scss.scss\");\n\r\n\r\n\r\nfunction tarifHashLoading() {\r\n    let loc = window.location.hash;\r\n    if(loc) {\r\n        loc = loc.replace(/#/g, '');\r\n        changeTarifList(document.querySelector(`a[data-category=\"${loc}\"]`));\r\n    }\r\n}\r\n\r\nfunction changeTarifList(selector) {\r\n\r\n    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');\r\n    const tarifCards = document.querySelectorAll('.tarif__list--card');\r\n\r\n    tarifSelectors.forEach(elem => {\r\n        if (elem.classList.contains('checked-member')) {\r\n            elem.classList.remove('checked-member');\r\n            elem.firstElementChild.classList.remove('checked--after');\r\n        }\r\n    });\r\n    selector.classList.add('checked-member');\r\n    selector.firstElementChild.classList.add('checked--after');\r\n    tarifCards.forEach(card => {\r\n        if (card.dataset.category.indexOf(selector.dataset.category) != -1\r\n            && card.classList.contains('hide')) {\r\n                card.classList.remove('hide')\r\n        } else if (card.dataset.category.indexOf(selector.dataset.category) == -1 && !card.classList.contains('hide')) {\r\n            card.classList.add('hide');\r\n        }\r\n    });\r\n}\r\n\r\nfunction tarifList() {\r\n    \r\n    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');\r\n    \r\n\r\n    tarifSelectors.forEach(selector => {\r\n        selector.addEventListener('click', () => {\r\n            changeTarifList(selector);\r\n        });\r\n    });\r\n}\r\n\r\nfunction modal(btnSelector, modalSelector, windowSelector) {\r\n    const btns = document.querySelectorAll(btnSelector);\r\n    const modal = document.querySelector(modalSelector);\r\n    const modalWindow = document.querySelector(windowSelector);\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            modal.style.height = window.getComputedStyle(document.body).height;\r\n            modal.classList.remove('hide');\r\n            modalWindow.style.top = `${e.pageY - e.clientY + 100}px`\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal){\r\n            close();\r\n        }\r\n    });\r\n\r\n    function close() {\r\n        modal.classList.add('hide');\r\n    }\r\n}\r\n\r\nfunction showChannels(category, basic) {\r\n    const channels = document.querySelectorAll('.channels__list--member');\r\n    \r\n    channels.forEach(channel => {\r\n        if (!channel.classList.contains('hide')) {\r\n            channel.classList.add('hide');\r\n        }\r\n        if (basic) {\r\n            if (channel.dataset.category === category) {\r\n                channel.classList.remove('hide');\r\n            }\r\n        } else {\r\n            if (channel.dataset.category === category && channel.dataset.pack != 'basic') {\r\n                channel.classList.remove('hide');\r\n            } \r\n        }\r\n    })\r\n}\r\n\r\nfunction channelsList () {\r\n    const select = document.querySelector('.channels__select');\r\n    const packButton = document.querySelectorAll('.channels__packs--member');\r\n    let basic = false;\r\n\r\n    select.addEventListener('change', () => {\r\n        showChannels(select.value, basic);\r\n    });\r\n\r\n    packButton.forEach(pack => {\r\n        pack.addEventListener('click', () => {\r\n            packButton.forEach(elem => {\r\n                elem.classList.remove('checked-member');\r\n                elem.firstElementChild.classList.remove('checked--after');\r\n            });\r\n            pack.classList.add('checked-member');\r\n            pack.firstElementChild.classList.add('checked--after');\r\n            if (pack.dataset.pack === 'basic') {\r\n                basic = true;\r\n                showChannels(select.value, basic);\r\n            } else {\r\n                basic = false;\r\n                showChannels(select.value, basic);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\ntarifList();\r\nmodal('.card__button', '#form', '#modal__window');\r\nmodal('.channels-tag', '#channels', '#modal__channels');\r\ntarifHashLoading();\r\nchannelsList();\n\n//# sourceURL=webpack://mtsmgts/./src/index.js?");

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