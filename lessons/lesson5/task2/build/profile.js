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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/profile/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/*! exports provided: fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\nasync function fetchUser(userId) {\r\n    const response = await fetch(`https://api.github.com/users/${userId}`);\r\n    if (!response.ok) {\r\n        throw new Error('Failed to get user data');\r\n    }\r\n    return await response.json();\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPO0FBQ1AsaUVBQWlFLE9BQU87QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wcm9maWxlL2dhdGV3YXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXJJZCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgdXNlciBkYXRhJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"./src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"./src/profile/printProfile.js\");\n\r\n\r\n\r\nObject(_gateway__WEBPACK_IMPORTED_MODULE_0__[\"fetchUser\"])('github')\r\n    .then(({ name, location }) => Object(_printProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        name,\r\n        location,\r\n    }));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9pbmRleC5qcz9hNjkyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJOztBQUUxQywwREFBUztBQUNULFlBQVksaUJBQWlCLEtBQUssNkRBQVk7QUFDOUM7QUFDQTtBQUNBLEtBQUsiLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gJy4vZ2F0ZXdheSc7XHJcbmltcG9ydCBwcmludFByb2ZpbGUgZnJvbSAnLi9wcmludFByb2ZpbGUnO1xyXG5cclxuZmV0Y2hVc2VyKCdnaXRodWInKVxyXG4gICAgLnRoZW4oKHsgbmFtZSwgbG9jYXRpb24gfSkgPT4gcHJpbnRQcm9maWxlKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgfSkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ }),

/***/ "./src/profile/printProfile.js":
/*!*************************************!*\
  !*** ./src/profile/printProfile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileData => {\r\n    const { name, location } = profileData;\r\n    console.log(`${name} from ${location}`);   \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanM/YjIzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2YsV0FBVyxpQkFBaUI7QUFDNUIsbUJBQW1CLEtBQUssUUFBUSxTQUFTLEc7QUFDekMsQ0FBQyIsImZpbGUiOiIuL3NyYy9wcm9maWxlL3ByaW50UHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHByb2ZpbGVEYXRhID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgbG9jYXRpb24gfSA9IHByb2ZpbGVEYXRhO1xyXG4gICAgY29uc29sZS5sb2coYCR7bmFtZX0gZnJvbSAke2xvY2F0aW9ufWApOyAgIFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/printProfile.js\n");

/***/ })

/******/ });