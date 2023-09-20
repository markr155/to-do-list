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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Add ToDos to main div\nfunction displayToDos(project) {\n    // Clear Main\n    main.textContent = '';\n    // Loop through To Do Array and display each item \n    project.todos.forEach((toDo, index) => {\n        const newToDo = document.createElement('div');\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'title'));\n        newToDo.appendChild(detailsButton());\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'dueDate'));\n        newToDo.appendChild(addPropertyToDisplay(toDo, 'priority'));\n        // Completed part of To Do\n        const toDoCompleted = document.createElement('div');\n        toDoCompleted.textContent = 'No';\n        newToDo.appendChild(toDoCompleted);\n        newToDo.classList.add('toDoItem');\n        newToDo.appendChild(toDoDelete());\n        // Set To Do index for deletion \n        newToDo.setAttribute('index', index);\n        main.appendChild(newToDo);\n    });\n    main.appendChild(newToDoButton());\n}\n\n// Returns the item property as a div\nfunction addPropertyToDisplay(item, property) {\n    const element = document.createElement('div');\n    element.classList.add(property);\n    element.textContent = item[property];\n    return element;\n};\n// Delete To Do button\nfunction toDoDelete(){\n    const deleteButton = document.createElement('button');\n    deleteButton.textContent = 'Delete';\n    deleteButton.classList.add('deleteToDoButton');\n    return deleteButton;\n};\n// Create New To Do button in main\nfunction newToDoButton() {\n    const button = document.createElement('button');\n    button.textContent = 'New To Do';\n    button.classList.add('newToDoButton');\n    button.addEventListener('click', () => {\n        newToDoDialog.showModal();\n    })\n    return button;\n};\n// Adds details button to To Do\nfunction detailsButton() {\n    const button = document.createElement('button');\n    button.textContent = 'Details';\n    button.classList.add('detailsButton');\n    return button;\n};\n// Project list display\nfunction displayProjects(projects) {\n    projectsList.textContent = '';\n    projectsList.appendChild(viewAllProjects());\n    projects.forEach((project, index) => {\n        const newProject = document.createElement('li');\n        newProject.classList.add('projectListItem');\n        newProject.textContent = project.title;\n        newProject.dataset.index = index;\n        projectsList.appendChild(newProject);\n    });\n};\n// Adds View all list item for project list\nfunction viewAllProjects() {\n    const listItem = document.createElement('li');\n    listItem.classList.add('projectListItem');\n    listItem.textContent = 'View All';\n    return listItem;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayToDos, displayProjects });\n\n//# sourceURL=webpack://to-do-list/./src/domChanges.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _domChanges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domChanges.js */ \"./src/domChanges.js\");\n\n\n\n// Deletes To Do functionality\nfunction deleteButtons() {\n    const deleteButtons = document.getElementsByClassName('deleteToDoButton');\n    for (let i = 0; i < deleteButtons.length; i++){\n        deleteButtons[i].addEventListener(('click'), (e) => {\n            _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.deleteToDo(e.currentTarget.parentElement.getAttribute('index'));\n            refreshDisplay();\n        })\n    };\n};\n// Refreshes display for ToDos and Projects\nfunction refreshDisplay() {\n    _domChanges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayToDos(_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.getActiveProject());\n    _domChanges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjects(_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.getProjectList());\n    deleteButtons();\n}\n//element declaration\nconst main = document.getElementById('main');\nconst newProjectButton = document.querySelector('.newProjectButton');\nconst newProjectDialog = document.getElementById('newProjectDialog');\nconst newToDoForm = document.getElementById('newToDoForm');\nconst newProjectForm = document.getElementById('newProjectForm');\nconst deleteProjectButton = document.querySelector('class', 'deleteProjectButton');\nconst addNewToDoButton = document.getElementById('submitNewToDoButton');\nconst addNewProjectButton = document.getElementById('submitNewProjectButton');\nconst projectDescription = document.getElementById('projectDescription');\nconst projectsList = document.getElementById('projectsList');\n\n// Show add project modal\nnewProjectButton.addEventListener('click', () => {\n    newProjectDialog.showModal();\n});\n\n// Adds new ToDo to Add new to do button\naddNewToDoButton.addEventListener('click', () => {\n    const newToDo = _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createToDo(\n        newToDoForm.title.value,\n        newToDoForm.description.value,\n        newToDoForm.dueDate.value,\n        newToDoForm.priority.value,\n        _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.getActiveProject()\n    );\n    // Refreshs display of current project for new To Do\n    refreshDisplay();\n});\n\n// Adds new project when new project submitted\naddNewProjectButton.addEventListener('click', () => {\n    const newProject = _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.createProject(\n        newProjectForm.title.value,\n        projectDescription.value\n    )\n    _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.addProject(newProject);\n    _domChanges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjects(_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.getProjectList());\n});\n\n_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaultData();\nrefreshDisplay();\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Set/Get Active project\nconst projects = (function projectList() {\n    const projectStorage = [];\n    let activeProject;\n    let activeProjectIndex;\n    return {\n        getActiveProject: function() {\n            return activeProject;\n        },\n        setActiveProject: function(project) {\n            activeProject = project;\n            activeProjectIndex = projectStorage.indexOf(project);\n        },\n        getProjectList: function() {\n            return projectStorage;\n        },\n        addProject: function(project) {\n            projectStorage.push(project);\n        },\n        createProject: function createProject(title, description){\n            const newProject = projectsFactory(title, description);\n            return newProject;\n        },\n        deleteToDo: function deleteToDo(todoIndex){\n            activeProject.deleteToDo(todoIndex);\n        },\n        deleteProject: function deleteProject(){\n            projectStorage.splice(activeProjectIndex, 1);\n            setActiveProject(projectStorage[0]);\n\n        }\n        \n    };\n})();\n// To Do Creator\nconst toDoFactory = (title, description, dueDate, priority) => {\n    return { title, description, dueDate, priority}\n};\n// Project Creator\nconst projectsFactory = (title, description) => {\n    const todos = [];\n    const addToProject = (newToDo) => {todos.push(newToDo)};\n    const deleteToDo = (index) => {todos.splice(index, 1)};\n    return { title, description, todos, addToProject, deleteToDo};\n};\n// Creates To Do and adds to project that is passed\nfunction createToDo(title, description, dueDate, priority, project) {\n    const newToDo = toDoFactory(title, description, dueDate, priority);\n    project.addToProject(newToDo);\n    return;\n};\n// Creates new project\n\n\n// Creates default data to do and adds to default project for initial load\nfunction defaultData() {\n    const project = projects.createProject('Default To Dos', 'Examples of ToDos');\n    projects.addProject(project);\n    projects.setActiveProject(project);\n    createToDo('Code', 'Finish to-do-list project', '2023-09-19', 'High', project);\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ defaultData, createToDo, projects });\n\n\n\n//# sourceURL=webpack://to-do-list/./src/todos.js?");

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