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
  const textDiv = document.getElementById("textDiv");
  const title = document.createElement("h1");
  title.id = "socials";
  title.textContent = "SOCIALS";
  const li = document.createElement("ul");
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
  textDiv.appendChild(title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0U7QUFDRTtBQUNQO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVE7QUFDVixFQUFFLG9EQUFJO0FBQ04sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1YsRUFBRSxvREFBTztBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWLEVBQUUsc0RBQVM7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc29jaWFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckRpdigpIHtcclxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpdlwiKTtcclxuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgYWRkTmFtZSgpO1xyXG4gIGhpc3RvcnkoKTtcclxuICBhZGRIb3VycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROYW1lKCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgZWxlbWVudC5pZCA9IFwidGl0bGVcIjtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJDaGFuJ3MgQ2hpY2tlblwiO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpc3RvcnkoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZWxlbWVudC5pZCA9IFwiaGlzdG9yeVwiO1xyXG4gIGVsZW1lbnQuaW5uZXJUZXh0ID1cclxuICAgIFwiRXN0YWJsaXNoZWQgaW4gMjAwNSwgQ2hhbidzIENoaWNrZW4gaXMgd2lkZWx5IGtub3duIGFzIHRoZSBncmVhdGVzdCBjaGlja2VuIGluIHRoZSBlbnRpcmUgd29ybGQuXCI7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSG91cnMoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZWxlbWVudC5pZCA9IFwiaG91cnNcIjtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJIT1VSUzogTW9uLVNhdCAxMDowMEFNIC0gODowMFBNXCI7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNZW51KCkge1xyXG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHREaXZcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUuaWQgPSBcInRpdGxlXCI7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlbGVtZW50LmlkID0gXCJtZW51XCI7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkNoaWNrZW4gTWFyc2FsYSBcIiArIFwiTmFzaHZpbGxlIEhvdCBDaGlja2VuIFwiICsgXCJTb3kgU2F1Y2UgQ2hpY2tlblwiO1xyXG5cclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFNvY2lhbCgpIHtcclxuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0RGl2XCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLmlkID0gXCJzb2NpYWxzXCI7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlNPQ0lBTFNcIjtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBpZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGNvbnN0IGlnVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW5zdGFncmFtXCIpO1xyXG4gIGlnLmFwcGVuZENoaWxkKGlnVGV4dCk7XHJcbiAgaWcudGl0bGUgPSBcImluc3RhZ3JhbVwiO1xyXG4gIGlnLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcmVhbG5pY2tjaGFuL1wiO1xyXG4gIGxpLmFwcGVuZENoaWxkKGlnKTtcclxuICBjb25zdCBmYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGNvbnN0IGZiVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRmFjZWJvb2tcIik7XHJcbiAgZmIuYXBwZW5kQ2hpbGQoZmJUZXh0KTtcclxuICBmYi50aXRsZSA9IFwiRmFjZWJvb2tcIjtcclxuICBmYi5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2lya29iZWJyeWFudFwiO1xyXG4gIGxpLmFwcGVuZENoaWxkKGZiKTtcclxuICBjb25zdCB0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGNvbnN0IHR0dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGlrIHRva1wiKTtcclxuICB0dC5hcHBlbmRDaGlsZCh0dHRleHQpO1xyXG4gIHR0LnRpdGxlID0gXCJ0aWt0b2tcIjtcclxuICB0dC5ocmVmID0gXCJodHRwczovL3d3dy50aWt0b2suY29tL0BjaGFudGFzdDFjXCI7XHJcbiAgbGkuYXBwZW5kQ2hpbGQodHQpO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQobGkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFkZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgY2xlYXJEaXYgZnJvbSBcIi4vY2xlYXIuanNcIjtcclxuaW1wb3J0IGFkZFNvY2lhbCBmcm9tIFwiLi9zb2NpYWwuanNcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbmNvbnN0IGhvbWVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5ob21lYnRuLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xyXG5ob21lYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJEaXYoKTtcclxuICBob21lKCk7XHJcbn0pO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVidG4pO1xyXG5cclxuY29uc3QgbWVudWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1lbnVidG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbm1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckRpdigpO1xyXG4gIGFkZE1lbnUoKTtcclxufSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudWJ0bik7XHJcblxyXG5jb25zdCBzb2NpYWxidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5zb2NpYWxidG4uaW5uZXJUZXh0ID0gXCJTb2NpYWxzXCI7XHJcbnNvY2lhbGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyRGl2KCk7XHJcbiAgYWRkU29jaWFsKCk7XHJcbn0pO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHNvY2lhbGJ0bik7XHJcbmNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50ZXh0RGl2LmlkID0gXCJ0ZXh0RGl2XCI7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbmhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9