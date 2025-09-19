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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: cpp, java, react, cTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cpp", function() { return cpp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "java", function() { return java; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "react", function() { return react; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cTeacher", function() { return cTeacher; });
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");



// export constants as required by the assignment
var cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__["default"]();
var java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__["default"]();
var react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__["default"]();
var cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
// C++ subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return "Here is the list of requirements for Cpp";
    };
    Cpp.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher || !teacher.experienceTeachingC) {
            return "No available teacher";
        }
        return "Available Teacher: " + teacher.firstName;
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Cpp);


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Java.prototype.getRequirements = function () {
        return "Here is the list of requirements for Java";
    };
    Java.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher || !teacher.experienceTeachingJava) {
            return "No available teacher";
        }
        return "Available Teacher: " + teacher.firstName;
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Java);


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return "Here is the list of requirements for React";
    };
    React.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher || !teacher.experienceTeachingReact) {
            return "No available teacher";
        }
        return "Available Teacher: " + teacher.firstName;
    };
    return React;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (React);


/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Base Subject class.
 * Holds the teacher reference and exposes setTeacher/getter.
 */
var Subject = /** @class */ (function () {
    function Subject() {
        this._teacher = null;
    }
    Subject.prototype.setTeacher = function (teacher) {
        this._teacher = teacher;
    };
    Object.defineProperty(Subject.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
/* harmony default export */ __webpack_exports__["default"] = (Subject);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9DcHAudHMiLCJ3ZWJwYWNrOi8vLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9SZWFjdC50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9TdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNFO0FBQ0U7QUFHckMsaURBQWlEO0FBQzFDLElBQU0sR0FBRyxHQUFHLElBQUkscURBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksc0RBQUksRUFBRSxDQUFDO0FBQ3hCLElB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QUFBOzs7R0FHRztBQUNIO0lBQUE7UUFDWSxhQUFRLEdBQW1CLElBQUksQ0FBQztJQVM1QyxDQUFDO0lBUFEsNEJBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFXLDRCQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IENwcCBmcm9tIFwiLi9zdWJqZWN0cy9DcHBcIjtcclxuaW1wb3J0IEphdmEgZnJvbSBcIi4vc3ViamVjdHMvSmF2YVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4vc3ViamVjdHMvUmVhY3RcIjtcclxuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL3N1YmplY3RzL1RlYWNoZXJcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdGFudHMgYXMgcmVxdWlyZWQgYnkgdGhlIGFzc2lnbm1lbnRcclxuZXhwb3J0IGNvbnN0IGNwcCA9IG5ldyBDcHAoKTtcclxuZXhwb3J0IGNvbnN0IGphdmEgPSBuZXcgSmF2YSgpO1xyXG5leHBvcnQgY29uc3QgcmVhY3QgPSBuZXcgUmVhY3QoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjVGVhY2hlcjogVGVhY2hlciA9IHtcclxuICBmaXJzdE5hbWU6IFwiSm9oblwiLFxyXG4gIGxhc3ROYW1lOiBcIkRvZVwiLFxyXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwLFxyXG59O1xyXG5cclxuLy8gQysrIHN1YmplY3RcclxuY29uc29sZS5sb2coXCJDKytcIik7XHJcbmNwcC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcclxuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcclxuY29uc29sZS5sb2coY3BwLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XHJcblxyXG4vLyBKYXZhIHN1YmplY3RcclxuY29uc29sZS5sb2coXCJKYXZhXCIpO1xyXG5qYXZhLnNldFRlYWNoZXIoY1RlYWNoZXIpO1xyXG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcclxuY29uc29sZS5sb2coamF2YS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xyXG5cclxuLy8gUmVhY3Qgc3ViamVjdFxyXG5jb25zb2xlLmxvZyhcIlJlYWN0XCIpO1xyXG5yZWFjdC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcclxuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpO1xyXG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xyXG4iLCJpbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcHAgZXh0ZW5kcyBTdWJqZWN0IHtcclxuICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBDcHBcIjtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XHJcbiAgICBpZiAoIXRlYWNoZXIgfHwgIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQykge1xyXG4gICAgICByZXR1cm4gXCJObyBhdmFpbGFibGUgdGVhY2hlclwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0ZWFjaGVyLmZpcnN0TmFtZX1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhIGV4dGVuZHMgU3ViamVjdCB7XHJcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgSmF2YVwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGVhY2hlciA9IHRoaXMudGVhY2hlcjtcclxuICAgIGlmICghdGVhY2hlciB8fCAhdGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhKSB7XHJcbiAgICAgIHJldHVybiBcIk5vIGF2YWlsYWJsZSB0ZWFjaGVyXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RlYWNoZXIuZmlyc3ROYW1lfWA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdWJqZWN0IGZyb20gXCIuL1N1YmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdCB7XHJcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3RcIjtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XHJcbiAgICBpZiAoIXRlYWNoZXIgfHwgIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QpIHtcclxuICAgICAgcmV0dXJuIFwiTm8gYXZhaWxhYmxlIHRlYWNoZXJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGVhY2hlci5maXJzdE5hbWV9YDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL1RlYWNoZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIFN1YmplY3QgY2xhc3MuXHJcbiAqIEhvbGRzIHRoZSB0ZWFjaGVyIHJlZmVyZW5jZSBhbmQgZXhwb3NlcyBzZXRUZWFjaGVyL2dldHRlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YmplY3Qge1xyXG4gIHByb3RlY3RlZCBfdGVhY2hlcjogVGVhY2hlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc2V0VGVhY2hlcih0ZWFjaGVyOiBUZWFjaGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl90ZWFjaGVyID0gdGVhY2hlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGVhY2hlcigpOiBUZWFjaGVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVhY2hlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==