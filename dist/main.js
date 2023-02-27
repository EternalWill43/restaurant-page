/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearDiv)
/* harmony export */ });
function clearDiv() {
  let element = document.getElementById("textDiv");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  addName();
  history();
  addHours();
}

function addName() {
  const element = document.createElement("h1");
  element.id = "title";
  element.textContent = "Chan's Chicken";
  textDiv.appendChild(element);
}

function history() {
  const element = document.createElement("div");
  element.id = "history";
  element.innerText =
    "Established in 2005, Chan's Chicken is widely known as the greatest chicken in the entire world.";
  textDiv.appendChild(element);
}

function addHours() {
  const element = document.createElement("div");
  element.id = "hours";
  element.textContent = "HOURS: Mon-Sat 10:00AM - 8:00PM";
  textDiv.appendChild(element);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMenu)
/* harmony export */ });
function addMenu() {
  const textDiv = document.getElementById("textDiv");
  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "MENU";
  const element = document.createElement("div");
  element.id = "menu";
  element.textContent =
    "Chicken Marsala " + "Nashville Hot Chicken " + "Soy Sauce Chicken";

  textDiv.appendChild(title);
  textDiv.appendChild(element);
}


/***/ }),

/***/ "./src/social.js":
/*!***********************!*\
  !*** ./src/social.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSocial)
/* harmony export */ });
function addSocial() {
  let textDiv = document.getElementById("textDiv");
  let li = document.createElement("ul");
  const ig = document.createElement("a");
  const igText = document.createTextNode("Instagram");
  ig.appendChild(igText);
  ig.title = "instagram";
  ig.href = "https://www.instagram.com/therealnickchan/";
  li.appendChild(ig);
  const fb = document.createElement("a");
  const fbText = document.createTextNode("Facebook");
  fb.appendChild(fbText);
  fb.title = "Facebook";
  fb.href = "https://www.facebook.com/sirkobebryant";
  li.appendChild(fb);
  const tt = document.createElement("a");
  const tttext = document.createTextNode("Tik tok");
  tt.appendChild(tttext);
  tt.title = "tiktok";
  tt.href = "https://www.tiktok.com/@chantast1c";
  li.appendChild(tt);
  textDiv.appendChild(li);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear.js */ "./src/clear.js");
/* harmony import */ var _social_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.js */ "./src/social.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





const content = document.getElementById("content");

const homebtn = document.createElement("button");
homebtn.innerText = "Home";
homebtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
content.appendChild(homebtn);

const menubtn = document.createElement("button");
menubtn.innerText = "Menu";
menubtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
content.appendChild(menubtn);

const socialbtn = document.createElement("button");
socialbtn.innerText = "Socials";
socialbtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_social_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
content.appendChild(socialbtn);
const textDiv = document.createElement("div");
textDiv.id = "textDiv";
content.appendChild(textDiv);
(0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNFO0FBQ0U7QUFDUDtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1YsRUFBRSxvREFBSTtBQUNOLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWLEVBQUUsb0RBQU87QUFDVCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVE7QUFDVixFQUFFLHNEQUFTO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NvY2lhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJEaXYoKSB7XHJcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHREaXZcIik7XHJcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gIGFkZE5hbWUoKTtcclxuICBoaXN0b3J5KCk7XHJcbiAgYWRkSG91cnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmFtZSgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGVsZW1lbnQuaWQgPSBcInRpdGxlXCI7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiQ2hhbidzIENoaWNrZW5cIjtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaXN0b3J5KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVsZW1lbnQuaWQgPSBcImhpc3RvcnlcIjtcclxuICBlbGVtZW50LmlubmVyVGV4dCA9XHJcbiAgICBcIkVzdGFibGlzaGVkIGluIDIwMDUsIENoYW4ncyBDaGlja2VuIGlzIHdpZGVseSBrbm93biBhcyB0aGUgZ3JlYXRlc3QgY2hpY2tlbiBpbiB0aGUgZW50aXJlIHdvcmxkLlwiO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEhvdXJzKCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVsZW1lbnQuaWQgPSBcImhvdXJzXCI7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiSE9VUlM6IE1vbi1TYXQgMTA6MDBBTSAtIDg6MDBQTVwiO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0RGl2XCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLmlkID0gXCJ0aXRsZVwiO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZWxlbWVudC5pZCA9IFwibWVudVwiO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJDaGlja2VuIE1hcnNhbGEgXCIgKyBcIk5hc2h2aWxsZSBIb3QgQ2hpY2tlbiBcIiArIFwiU295IFNhdWNlIENoaWNrZW5cIjtcclxuXHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTb2NpYWwoKSB7XHJcbiAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHREaXZcIik7XHJcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IGlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgY29uc3QgaWdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJbnN0YWdyYW1cIik7XHJcbiAgaWcuYXBwZW5kQ2hpbGQoaWdUZXh0KTtcclxuICBpZy50aXRsZSA9IFwiaW5zdGFncmFtXCI7XHJcbiAgaWcuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVyZWFsbmlja2NoYW4vXCI7XHJcbiAgbGkuYXBwZW5kQ2hpbGQoaWcpO1xyXG4gIGNvbnN0IGZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgY29uc3QgZmJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGYWNlYm9va1wiKTtcclxuICBmYi5hcHBlbmRDaGlsZChmYlRleHQpO1xyXG4gIGZiLnRpdGxlID0gXCJGYWNlYm9va1wiO1xyXG4gIGZiLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaXJrb2JlYnJ5YW50XCI7XHJcbiAgbGkuYXBwZW5kQ2hpbGQoZmIpO1xyXG4gIGNvbnN0IHR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgY29uc3QgdHR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaWsgdG9rXCIpO1xyXG4gIHR0LmFwcGVuZENoaWxkKHR0dGV4dCk7XHJcbiAgdHQudGl0bGUgPSBcInRpa3Rva1wiO1xyXG4gIHR0LmhyZWYgPSBcImh0dHBzOi8vd3d3LnRpa3Rvay5jb20vQGNoYW50YXN0MWNcIjtcclxuICBsaS5hcHBlbmRDaGlsZCh0dCk7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChsaSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBjbGVhckRpdiBmcm9tIFwiLi9jbGVhci5qc1wiO1xyXG5pbXBvcnQgYWRkU29jaWFsIGZyb20gXCIuL3NvY2lhbC5qc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuY29uc3QgaG9tZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmhvbWVidG4uaW5uZXJUZXh0ID0gXCJIb21lXCI7XHJcbmhvbWVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckRpdigpO1xyXG4gIGhvbWUoKTtcclxufSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZWJ0bik7XHJcblxyXG5jb25zdCBtZW51YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxubWVudWJ0bi5pbm5lclRleHQgPSBcIk1lbnVcIjtcclxubWVudWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyRGl2KCk7XHJcbiAgYWRkTWVudSgpO1xyXG59KTtcclxuY29udGVudC5hcHBlbmRDaGlsZChtZW51YnRuKTtcclxuXHJcbmNvbnN0IHNvY2lhbGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbnNvY2lhbGJ0bi5pbm5lclRleHQgPSBcIlNvY2lhbHNcIjtcclxuc29jaWFsYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJEaXYoKTtcclxuICBhZGRTb2NpYWwoKTtcclxufSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc29jaWFsYnRuKTtcclxuY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRleHREaXYuaWQgPSBcInRleHREaXZcIjtcclxuY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuaG9tZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=