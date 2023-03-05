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

  const menulist = document.createElement("ul");
  menulist.id = "menulist";

  const marsala = document.createElement("div");
  const mpic = document.createElement("img");
  mpic.src = "images/chicken-marsala.jpg";
  marsala.appendChild(mpic);
  marsala.id = "marsala";
  const mdesc = document.createElement("div");
  mdesc.innerText =
    "Chicken Marsala is an Italian-American dish of golden pan-fried chicken cutlets and mushrooms in a rich Marsala wine sauce.";
  marsala.appendChild(mdesc);

  const nashville = document.createElement("div");
  const npic = document.createElement("img");
  npic.src = "images/nashville-hot.jpg";
  nashville.appendChild(npic);
  nashville.id = "nashville";
  const ndesc = document.createElement("div");
  ndesc.innerText =
    "Mouthwateringly, ultra-crispy, fiery fried chicken with a cayenne-infused glaze";
  nashville.appendChild(ndesc);

  const soysauce = document.createElement("div");
  const spic = document.createElement("img");
  spic.src = "images/Soy-Sauce-Chicken.jpg";
  soysauce.appendChild(spic);
  soysauce.id = "soy-sauce";
  const sdesc = document.createElement("div");
  sdesc.innerText =
    "Soy sauce chicken or “see yao gai” is a classic jom liu traditionally made by braising a whole chicken in a braising liquid that includes soy sauce (obviously) and other aromatics. The result is a beautiful whole chicken with glistening, dark brown skin.";
  soysauce.appendChild(sdesc);

  menulist.appendChild(marsala);
  menulist.appendChild(nashville);
  menulist.appendChild(soysauce);
  element.appendChild(menulist);
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
const buttonbar = document.createElement("div");
buttonbar.id = "buttonbar";

const homebtn = document.createElement("button");
homebtn.innerText = "Home";
homebtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
buttonbar.appendChild(homebtn);

const menubtn = document.createElement("button");
menubtn.innerText = "Menu";
menubtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
buttonbar.appendChild(menubtn);

const socialbtn = document.createElement("button");
socialbtn.innerText = "Socials";
socialbtn.addEventListener("click", () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_social_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
buttonbar.appendChild(socialbtn);
const textDiv = document.createElement("div");
textDiv.id = "textDiv";
content.appendChild(buttonbar);
content.appendChild(textDiv);
(0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDRTtBQUNFO0FBQ1A7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVE7QUFDVixFQUFFLG9EQUFJO0FBQ04sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1YsRUFBRSxvREFBTztBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWLEVBQUUsc0RBQVM7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zb2NpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyRGl2KCkge1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0RGl2XCIpO1xyXG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcclxuICBhZGROYW1lKCk7XHJcbiAgaGlzdG9yeSgpO1xyXG4gIGFkZEhvdXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5hbWUoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBlbGVtZW50LmlkID0gXCJ0aXRsZVwiO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkNoYW4ncyBDaGlja2VuXCI7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlzdG9yeSgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlbGVtZW50LmlkID0gXCJoaXN0b3J5XCI7XHJcbiAgZWxlbWVudC5pbm5lclRleHQgPVxyXG4gICAgXCJFc3RhYmxpc2hlZCBpbiAyMDA1LCBDaGFuJ3MgQ2hpY2tlbiBpcyB3aWRlbHkga25vd24gYXMgdGhlIGdyZWF0ZXN0IGNoaWNrZW4gaW4gdGhlIGVudGlyZSB3b3JsZC5cIjtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIb3VycygpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlbGVtZW50LmlkID0gXCJob3Vyc1wiO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkhPVVJTOiBNb24tU2F0IDEwOjAwQU0gLSA4OjAwUE1cIjtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1lbnUoKSB7XHJcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpdlwiKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVsZW1lbnQuaWQgPSBcIm1lbnVcIjtcclxuXHJcbiAgY29uc3QgbWVudWxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgbWVudWxpc3QuaWQgPSBcIm1lbnVsaXN0XCI7XHJcblxyXG4gIGNvbnN0IG1hcnNhbGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG1waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1waWMuc3JjID0gXCJpbWFnZXMvY2hpY2tlbi1tYXJzYWxhLmpwZ1wiO1xyXG4gIG1hcnNhbGEuYXBwZW5kQ2hpbGQobXBpYyk7XHJcbiAgbWFyc2FsYS5pZCA9IFwibWFyc2FsYVwiO1xyXG4gIGNvbnN0IG1kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZGVzYy5pbm5lclRleHQgPVxyXG4gICAgXCJDaGlja2VuIE1hcnNhbGEgaXMgYW4gSXRhbGlhbi1BbWVyaWNhbiBkaXNoIG9mIGdvbGRlbiBwYW4tZnJpZWQgY2hpY2tlbiBjdXRsZXRzIGFuZCBtdXNocm9vbXMgaW4gYSByaWNoIE1hcnNhbGEgd2luZSBzYXVjZS5cIjtcclxuICBtYXJzYWxhLmFwcGVuZENoaWxkKG1kZXNjKTtcclxuXHJcbiAgY29uc3QgbmFzaHZpbGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBucGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBucGljLnNyYyA9IFwiaW1hZ2VzL25hc2h2aWxsZS1ob3QuanBnXCI7XHJcbiAgbmFzaHZpbGxlLmFwcGVuZENoaWxkKG5waWMpO1xyXG4gIG5hc2h2aWxsZS5pZCA9IFwibmFzaHZpbGxlXCI7XHJcbiAgY29uc3QgbmRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5kZXNjLmlubmVyVGV4dCA9XHJcbiAgICBcIk1vdXRod2F0ZXJpbmdseSwgdWx0cmEtY3Jpc3B5LCBmaWVyeSBmcmllZCBjaGlja2VuIHdpdGggYSBjYXllbm5lLWluZnVzZWQgZ2xhemVcIjtcclxuICBuYXNodmlsbGUuYXBwZW5kQ2hpbGQobmRlc2MpO1xyXG5cclxuICBjb25zdCBzb3lzYXVjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc3BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc3BpYy5zcmMgPSBcImltYWdlcy9Tb3ktU2F1Y2UtQ2hpY2tlbi5qcGdcIjtcclxuICBzb3lzYXVjZS5hcHBlbmRDaGlsZChzcGljKTtcclxuICBzb3lzYXVjZS5pZCA9IFwic295LXNhdWNlXCI7XHJcbiAgY29uc3Qgc2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNkZXNjLmlubmVyVGV4dCA9XHJcbiAgICBcIlNveSBzYXVjZSBjaGlja2VuIG9yIOKAnHNlZSB5YW8gZ2Fp4oCdIGlzIGEgY2xhc3NpYyBqb20gbGl1IHRyYWRpdGlvbmFsbHkgbWFkZSBieSBicmFpc2luZyBhIHdob2xlIGNoaWNrZW4gaW4gYSBicmFpc2luZyBsaXF1aWQgdGhhdCBpbmNsdWRlcyBzb3kgc2F1Y2UgKG9idmlvdXNseSkgYW5kIG90aGVyIGFyb21hdGljcy4gVGhlIHJlc3VsdCBpcyBhIGJlYXV0aWZ1bCB3aG9sZSBjaGlja2VuIHdpdGggZ2xpc3RlbmluZywgZGFyayBicm93biBza2luLlwiO1xyXG4gIHNveXNhdWNlLmFwcGVuZENoaWxkKHNkZXNjKTtcclxuXHJcbiAgbWVudWxpc3QuYXBwZW5kQ2hpbGQobWFyc2FsYSk7XHJcbiAgbWVudWxpc3QuYXBwZW5kQ2hpbGQobmFzaHZpbGxlKTtcclxuICBtZW51bGlzdC5hcHBlbmRDaGlsZChzb3lzYXVjZSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51bGlzdCk7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTb2NpYWwoKSB7XHJcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dERpdlwiKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS5pZCA9IFwic29jaWFsc1wiO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJTT0NJQUxTXCI7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBjb25zdCBpZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkluc3RhZ3JhbVwiKTtcclxuICBpZy5hcHBlbmRDaGlsZChpZ1RleHQpO1xyXG4gIGlnLnRpdGxlID0gXCJpbnN0YWdyYW1cIjtcclxuICBpZy5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxuaWNrY2hhbi9cIjtcclxuICBsaS5hcHBlbmRDaGlsZChpZyk7XHJcbiAgY29uc3QgZmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBjb25zdCBmYlRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZhY2Vib29rXCIpO1xyXG4gIGZiLmFwcGVuZENoaWxkKGZiVGV4dCk7XHJcbiAgZmIudGl0bGUgPSBcIkZhY2Vib29rXCI7XHJcbiAgZmIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NpcmtvYmVicnlhbnRcIjtcclxuICBsaS5hcHBlbmRDaGlsZChmYik7XHJcbiAgY29uc3QgdHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBjb25zdCB0dHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRpayB0b2tcIik7XHJcbiAgdHQuYXBwZW5kQ2hpbGQodHR0ZXh0KTtcclxuICB0dC50aXRsZSA9IFwidGlrdG9rXCI7XHJcbiAgdHQuaHJlZiA9IFwiaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AY2hhbnRhc3QxY1wiO1xyXG4gIGxpLmFwcGVuZENoaWxkKHR0KTtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IGNsZWFyRGl2IGZyb20gXCIuL2NsZWFyLmpzXCI7XHJcbmltcG9ydCBhZGRTb2NpYWwgZnJvbSBcIi4vc29jaWFsLmpzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IGJ1dHRvbmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmJ1dHRvbmJhci5pZCA9IFwiYnV0dG9uYmFyXCI7XHJcblxyXG5jb25zdCBob21lYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuaG9tZWJ0bi5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuaG9tZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyRGl2KCk7XHJcbiAgaG9tZSgpO1xyXG59KTtcclxuYnV0dG9uYmFyLmFwcGVuZENoaWxkKGhvbWVidG4pO1xyXG5cclxuY29uc3QgbWVudWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1lbnVidG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbm1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckRpdigpO1xyXG4gIGFkZE1lbnUoKTtcclxufSk7XHJcbmJ1dHRvbmJhci5hcHBlbmRDaGlsZChtZW51YnRuKTtcclxuXHJcbmNvbnN0IHNvY2lhbGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbnNvY2lhbGJ0bi5pbm5lclRleHQgPSBcIlNvY2lhbHNcIjtcclxuc29jaWFsYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJEaXYoKTtcclxuICBhZGRTb2NpYWwoKTtcclxufSk7XHJcbmJ1dHRvbmJhci5hcHBlbmRDaGlsZChzb2NpYWxidG4pO1xyXG5jb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudGV4dERpdi5pZCA9IFwidGV4dERpdlwiO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbmJhcik7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbmhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9