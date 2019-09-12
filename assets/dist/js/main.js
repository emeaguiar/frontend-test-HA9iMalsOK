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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-unused-vars */


var _bio = __webpack_require__(/*! ./components/bio */ 2);

var _bio2 = _interopRequireDefault(_bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles author card components
 */
var AuthorCard = function () {
	/**
  * Save component references
  */
	function AuthorCard() {
		_classCallCheck(this, AuthorCard);

		this.bio = new _bio2.default('#bio');
	}

	_createClass(AuthorCard, [{
		key: 'init',
		value: function init() {
			if (this.bio) {
				this.bio.collapse();
			}
		}
	}]);

	return AuthorCard;
}();

var authorCard = new AuthorCard();

authorCard.init();

/***/ }),
/* 1 */,
/* 2 */
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _accordion = __webpack_require__(/*! ./accordion */ 3);

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Controls bio collapsed or expanded status
 */
var Bio = function (_Accordion) {
	_inherits(Bio, _Accordion);

	/**
  * Init
  * Save elements in cache
  * @param {string} selector Bio element css unique selector
  */
	function Bio(selector) {
		_classCallCheck(this, Bio);

		var _this = _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).call(this, selector, selector + ' ~ .more'));

		_this.collapsedClass = 'bio__collapsed';
		_this.triggerCollapsedClass = 'more__collapsed';
		return _this;
	}

	return Bio;
}(_accordion2.default);

exports.default = Bio;

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./components/accordion.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Controls element collapsed or expanded status
 */
var Accordion = function () {
	/**
  * Init
  * Save elements in cache
  * @param {string} selector Element css unique selector
  * @param {string} trigger Elemento to toggle accordion
  */
	function Accordion(selector, trigger) {
		var _this = this;

		_classCallCheck(this, Accordion);

		this.element = window.document.querySelector(selector);
		this.trigger = window.document.querySelector(trigger);

		this.collapsedClass = 'accordion__collapsed';
		this.triggerCollapsedClass = 'trigger__collapsed';

		if (this.trigger) {
			this.trigger.addEventListener('click', function () {
				return _this.toggle();
			});
		}
	}

	/**
  * Expand or collapse based on current status
  */


	_createClass(Accordion, [{
		key: 'toggle',
		value: function toggle() {
			var element = this.element,
			    collapsedClass = this.collapsedClass;


			if (!element) {
				return;
			}

			if (element.classList.contains(collapsedClass)) {
				this.expand();
			} else {
				this.collapse();
			}
		}

		/**
   * Close and add icon
   */

	}, {
		key: 'collapse',
		value: function collapse() {
			var element = this.element,
			    trigger = this.trigger,
			    collapsedClass = this.collapsedClass,
			    triggerCollapsedClass = this.triggerCollapsedClass;


			if (!element) {
				return;
			}

			element.classList.add(collapsedClass);
			element.setAttribute('aria-expanded', 'false');

			if (trigger) {
				trigger.classList.remove(triggerCollapsedClass);
			}
		}

		/**
   * Open and remove icon
   */

	}, {
		key: 'expand',
		value: function expand() {
			var element = this.element,
			    trigger = this.trigger,
			    collapsedClass = this.collapsedClass,
			    triggerCollapsedClass = this.triggerCollapsedClass;


			if (!element) {
				return;
			}

			element.classList.remove(collapsedClass);
			element.setAttribute('aria-expanded', 'true');

			if (trigger) {
				trigger.classList.add(triggerCollapsedClass);
			}
		}
	}]);

	return Accordion;
}();

exports.default = Accordion;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWYyYjMxNDMxNjM5MWVlNzBiNDciLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJBdXRob3JDYXJkIiwiYmlvIiwiQmlvIiwiY29sbGFwc2UiLCJhdXRob3JDYXJkIiwiaW5pdCIsInNlbGVjdG9yIiwiY29sbGFwc2VkQ2xhc3MiLCJ0cmlnZ2VyQ29sbGFwc2VkQ2xhc3MiLCJBY2NvcmRpb24iLCJ0cmlnZ2VyIiwiZWxlbWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImV4cGFuZCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7cWpCQzdEQTs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztJQUdNQSxVO0FBQ0w7OztBQUdBLHVCQUFjO0FBQUE7O0FBQ2IsT0FBS0MsR0FBTCxHQUFXLElBQUlDLGFBQUosQ0FBUyxNQUFULENBQVg7QUFDQTs7Ozt5QkFFTTtBQUNOLE9BQUssS0FBS0QsR0FBVixFQUFnQjtBQUNmLFNBQUtBLEdBQUwsQ0FBU0UsUUFBVDtBQUNBO0FBQ0Q7Ozs7OztBQUdGLElBQU1DLGFBQWEsSUFBSUosVUFBSixFQUFuQjs7QUFFQUksV0FBV0MsSUFBWCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCSCxHOzs7QUFDcEI7Ozs7O0FBS0EsY0FBYUksUUFBYixFQUF3QjtBQUFBOztBQUFBLHdHQUNoQkEsUUFEZ0IsRUFDRkEsUUFERTs7QUFHdkIsUUFBS0MsY0FBTCxHQUFzQixnQkFBdEI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2QixpQkFBN0I7QUFKdUI7QUFLdkI7OztFQVgrQkMsbUI7O2tCQUFaUCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7SUFHcUJPLFM7QUFDcEI7Ozs7OztBQU1BLG9CQUFhSCxRQUFiLEVBQXVCSSxPQUF2QixFQUFpQztBQUFBOztBQUFBOztBQUNoQyxPQUFLQyxPQUFMLEdBQWVDLE9BQU9DLFFBQVAsQ0FBZ0JDLGFBQWhCLENBQStCUixRQUEvQixDQUFmO0FBQ0EsT0FBS0ksT0FBTCxHQUFlRSxPQUFPQyxRQUFQLENBQWdCQyxhQUFoQixDQUErQkosT0FBL0IsQ0FBZjs7QUFFQSxPQUFLSCxjQUFMLEdBQXNCLHNCQUF0QjtBQUNBLE9BQUtDLHFCQUFMLEdBQTZCLG9CQUE3Qjs7QUFFQSxNQUFLLEtBQUtFLE9BQVYsRUFBb0I7QUFDbkIsUUFBS0EsT0FBTCxDQUFhSyxnQkFBYixDQUErQixPQUEvQixFQUF3QztBQUFBLFdBQU0sTUFBS0MsTUFBTCxFQUFOO0FBQUEsSUFBeEM7QUFDQTtBQUNEOztBQUVEOzs7Ozs7OzJCQUdTO0FBQUEsT0FDQUwsT0FEQSxHQUM0QixJQUQ1QixDQUNBQSxPQURBO0FBQUEsT0FDU0osY0FEVCxHQUM0QixJQUQ1QixDQUNTQSxjQURUOzs7QUFHUixPQUFLLENBQUVJLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxPQUFLQSxRQUFRTSxTQUFSLENBQWtCQyxRQUFsQixDQUE0QlgsY0FBNUIsQ0FBTCxFQUFvRDtBQUNuRCxTQUFLWSxNQUFMO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBS2hCLFFBQUw7QUFDQTtBQUNEOztBQUVEOzs7Ozs7NkJBR1c7QUFBQSxPQUVUUSxPQUZTLEdBTU4sSUFOTSxDQUVUQSxPQUZTO0FBQUEsT0FHVEQsT0FIUyxHQU1OLElBTk0sQ0FHVEEsT0FIUztBQUFBLE9BSVRILGNBSlMsR0FNTixJQU5NLENBSVRBLGNBSlM7QUFBQSxPQUtUQyxxQkFMUyxHQU1OLElBTk0sQ0FLVEEscUJBTFM7OztBQVFWLE9BQUssQ0FBRUcsT0FBUCxFQUFpQjtBQUNoQjtBQUNBOztBQUVEQSxXQUFRTSxTQUFSLENBQWtCRyxHQUFsQixDQUF1QmIsY0FBdkI7QUFDQUksV0FBUVUsWUFBUixDQUFzQixlQUF0QixFQUF1QyxPQUF2Qzs7QUFFQSxPQUFLWCxPQUFMLEVBQWU7QUFDZEEsWUFBUU8sU0FBUixDQUFrQkssTUFBbEIsQ0FBMEJkLHFCQUExQjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHUztBQUFBLE9BRVBHLE9BRk8sR0FNSixJQU5JLENBRVBBLE9BRk87QUFBQSxPQUdQRCxPQUhPLEdBTUosSUFOSSxDQUdQQSxPQUhPO0FBQUEsT0FJUEgsY0FKTyxHQU1KLElBTkksQ0FJUEEsY0FKTztBQUFBLE9BS1BDLHFCQUxPLEdBTUosSUFOSSxDQUtQQSxxQkFMTzs7O0FBUVIsT0FBSyxDQUFFRyxPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRURBLFdBQVFNLFNBQVIsQ0FBa0JLLE1BQWxCLENBQTBCZixjQUExQjtBQUNBSSxXQUFRVSxZQUFSLENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDOztBQUVBLE9BQUtYLE9BQUwsRUFBZTtBQUNkQSxZQUFRTyxTQUFSLENBQWtCRyxHQUFsQixDQUF1QloscUJBQXZCO0FBQ0E7QUFDRDs7Ozs7O2tCQWhGbUJDLFMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVmMmIzMTQzMTYzOTFlZTcwYjQ3IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBCaW8gZnJvbSAnLi9jb21wb25lbnRzL2Jpbyc7XG5cbi8qKlxuICogSGFuZGxlcyBhdXRob3IgY2FyZCBjb21wb25lbnRzXG4gKi9cbmNsYXNzIEF1dGhvckNhcmQge1xuXHQvKipcblx0ICogU2F2ZSBjb21wb25lbnQgcmVmZXJlbmNlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0aWYgKCB0aGlzLmJpbyApIHtcblx0XHRcdHRoaXMuYmlvLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGF1dGhvckNhcmQgPSBuZXcgQXV0aG9yQ2FyZCgpO1xuXG5hdXRob3JDYXJkLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBDb250cm9scyBiaW8gY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW8gZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdFxuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBCaW8gZWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCBgJHsgc2VsZWN0b3IgfSB+IC5tb3JlYCApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdiaW9fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnbW9yZV9fY29sbGFwc2VkJztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9iaW8uanMiLCIvKipcbiAqIENvbnRyb2xzIGVsZW1lbnQgY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdFxuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBFbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXIgRWxlbWVudG8gdG8gdG9nZ2xlIGFjY29yZGlvblxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yLCB0cmlnZ2VyICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuXHRcdHRoaXMudHJpZ2dlciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0cmlnZ2VyICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ2FjY29yZGlvbl9fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICd0cmlnZ2VyX19jb2xsYXBzZWQnO1xuXG5cdFx0aWYgKCB0aGlzLnRyaWdnZXIgKSB7XG5cdFx0XHR0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGUoKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBhbmQgb3IgY29sbGFwc2UgYmFzZWQgb24gY3VycmVudCBzdGF0dXNcblx0ICovXG5cdHRvZ2dsZSgpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQsIGNvbGxhcHNlZENsYXNzIH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY29sbGFwc2VkQ2xhc3MgKSApIHtcblx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sbGFwc2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgYW5kIGFkZCBpY29uXG5cdCAqL1xuXHRjb2xsYXBzZSgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0dHJpZ2dlcixcblx0XHRcdGNvbGxhcHNlZENsYXNzLFxuXHRcdFx0dHJpZ2dlckNvbGxhcHNlZENsYXNzLFxuXHRcdH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBjb2xsYXBzZWRDbGFzcyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW4gYW5kIHJlbW92ZSBpY29uXG5cdCAqL1xuXHRleHBhbmQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=