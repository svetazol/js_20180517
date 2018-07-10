/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/block.js":
/*!*************************!*\
  !*** ./blocks/block.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\nclass Block {\n\n    get name() {\n        throw new Error('Invalid component name');\n    }\n\n    constructor() {\n        this.el = document.createElement(this.name);\n    }\n\n    /**\n     * Вставка элемента на старинцу\n     * @param {Element} root - родительский элемент\n     */\n    append(root) {\n        root.appendChild(this.el);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./blocks/block.js?");

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\n\nclass Button extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get name() {\n        return 'button';\n    }\n\n    /**\n     * Кнопка\n     * @param {Object} obj\n     * @param {string} obj.text - текст кнопки\n     * @param {string} [obj.type]\n     */\n    constructor({ text, type = 'button' }) {\n        super();\n\n        this.el.textContent = text;\n        this.el.classList.toggle('button');\n        this.el.type = type;\n    }\n}\n\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\n\nclass Input extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get name () {\n        return 'input';\n    }\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.placeholder - текст кнопки,\n     * @param {string} [obj.type] - тип инпута (по умолчанию text)\n     */\n    constructor({ placeholder, type = 'text', value='' }) {\n        super();\n\n        this.el.classList.toggle('input', true);\n        this.el.type  = type;\n        this.el.placeholder = placeholder;\n        this.el.value = value;\n    }\n\n}\n\n\n//# sourceURL=webpack:///./blocks/input/input.js?");

/***/ }),

/***/ "./blocks/list/list.js":
/*!*****************************!*\
  !*** ./blocks/list/list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\n\nclass List extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get name () {\n        return 'ul';\n    }\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.list - массив с элементами списка\n     */\n    constructor({ list }) {\n        super();\n\n        this.el.classList.toggle('list', true);\n        this.el.innerHTML = list.map(item => {\n            return `<li class='list__item'>${item}</li>`\n        }).join('');\n    }\n\n}\n\n\n//# sourceURL=webpack:///./blocks/list/list.js?");

/***/ }),

/***/ "./blocks/messages/messages.js":
/*!*************************************!*\
  !*** ./blocks/messages/messages.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Message; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\n\nclass Message extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get name () {\n        return 'p';\n    }\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.message - текст сообщения\n     */\n    constructor({ message }) {\n        super();\n\n        this.el.classList.toggle('message', true);\n        this.el.innerText = message;\n    }\n\n}\n\n\n//# sourceURL=webpack:///./blocks/messages/messages.js?");

/***/ }),

/***/ "./blocks/textarea/textarea.js":
/*!*************************************!*\
  !*** ./blocks/textarea/textarea.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Textarea; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\n\nclass Textarea extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get name () {\n        return 'textarea';\n    }\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} bj.placeholder - текст поля\n     */\n    constructor({ placeholder }) {\n        super();\n\n        this.el.classList.toggle('textarea', true);\n        this.el.placeholder = placeholder;\n    }\n\n}\n\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/button/button */ \"./blocks/button/button.js\");\n/* harmony import */ var _blocks_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/input/input */ \"./blocks/input/input.js\");\n/* harmony import */ var _blocks_list_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/list/list */ \"./blocks/list/list.js\");\n/* harmony import */ var _blocks_textarea_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/textarea/textarea */ \"./blocks/textarea/textarea.js\");\n/* harmony import */ var _blocks_messages_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/messages/messages */ \"./blocks/messages/messages.js\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n\n    let button = new _blocks_button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        text: 'Тестовая кнопка'\n    });\n\n    let input = new _blocks_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        placeholder: 'Тестовый инпут'\n    });\n\n    let list = new _blocks_list_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        list: ['первый', 'второй', 'третий']\n    });\n\n    let textarea = new _blocks_textarea_textarea__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        placeholder: 'Введите текст'\n    });\n\n    let message = new _blocks_messages_messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n        message: 'Какое-то сообщение'\n    });\n\n    button.append(document.body);\n    input.append(document.body);\n    textarea.append(document.body);\n    list.append(document.body);\n    message.append(document.body);\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });