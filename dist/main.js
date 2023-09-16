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

/***/ "./src/domChanges.js":
/*!***************************!*\
  !*** ./src/domChanges.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Add ToDo-s to main div\nfunction displayToDos(toDoArray) {\n    // Clear Main\n    main.textContent = '';\n    main.appendChild(mainHeader());\n    // Loop through To Do Array and display each item \n    toDoArray.forEach((toDo, index) => {\n        const newToDo = document.createElement('div');\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'title'));\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'description'));\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'dueDate'));\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'priority'));\n        const toDoCompleted = document.createElement('div');\n        toDoCompleted.textContent = 'No';\n        newToDo.appendChild(toDoCompleted);\n        newToDo.classList.add('toDoItem');\n        newToDo.setAttribute('index', index);\n        main.appendChild(newToDo);\n    });\n}\n\n// Returns the item property as a div\nfunction addPropertyToDisplay(item, property) {\n    const element = document.createElement('div');\n    element.classList.add(property);\n    element.textContent = item[property];\n    return element;\n}\n\n// Creates header in main div\nfunction mainHeader() {\n    const header = document.createElement('div');\n    const headerTitle = document.createElement('div');\n    headerTitle.textContent = 'Title';\n    const headerDescription = document.createElement('div');\n    headerDescription.textContent = 'Description';\n    const headerDueDate = document.createElement('div');\n    headerDueDate.textContent = 'Due Date';\n    const headerPriority = document.createElement('div');\n    headerPriority.textContent = 'Priority';\n    const headerCompleted = document.createElement('div');\n    headerCompleted.textContent = 'Completed';\n    header.appendChild(headerTitle);\n    header.appendChild(headerDescription);\n    header.appendChild(headerDueDate);\n    header.appendChild(headerPriority);\n    header.appendChild(headerCompleted);\n    return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToDos);\n\n//# sourceURL=webpack://to-do-list/./src/domChanges.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _domChanges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domChanges.js */ \"./src/domChanges.js\");\n\n\n\n//element declaration\nconst main = document.getElementById('main');\n\n(0,_domChanges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ToDo objects\n//     Title  \n//     Description\n//     DueDate\n//     Priority - Low Medium High\n//     Completed\nconst toDoFactory = (title, description, dueDate, priority) => {\n    return { title, description, dueDate, priority}\n};\n\n// Storing each ToDo\nconst toDoArray = [];\n\nfunction addToDo(todo){\n    toDoArray.push(todo);\n};\n\nfunction defaultData() {\n    const toDo1 = toDoFactory('Code', 'Finish to-do-list project', 'Next week', 'High');\n    addToDo(toDo1);\n    return toDoArray;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultData);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/todos.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;