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

var _stories = __webpack_require__(/*! ./components/stories */ 4);

var _stories2 = _interopRequireDefault(_stories);

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
		this.stories = new _stories2.default('#stories__dropdown');
		this.tabletWidth = 767;
	}

	_createClass(AuthorCard, [{
		key: 'init',
		value: function init() {
			var _this = this;

			if (this.stories) {
				this.stories.collapse();
			}

			window.matchMedia('(max-width: ' + this.tabletWidth + 'px)').addListener(function (event) {
				return _this.toggleBio(event);
			});
		}
	}, {
		key: 'toggleBio',
		value: function toggleBio(event) {
			if (this.bio && event.matches) {
				this.bio.collapse();
			} else {
				this.bio.expand();
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
  * Init parent class
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

/***/ }),
/* 4 */
/*!*******************************!*\
  !*** ./components/stories.js ***!
  \*******************************/
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
 * Handles stories notifications
 */
var Stories = function (_Accordion) {
	_inherits(Stories, _Accordion);

	/**
  * Init parent class
  * @param {string} selector Stories unique element
  */
	function Stories(selector) {
		_classCallCheck(this, Stories);

		var _this = _possibleConstructorReturn(this, (Stories.__proto__ || Object.getPrototypeOf(Stories)).call(this, selector, '#stories__trigger'));

		_this.collapsedClass = 'stories__dropdown_collapsed';
		_this.triggerCollapsedClass = 'stories__trigger_collapsed';
		return _this;
	}

	return Stories;
}(_accordion2.default);

exports.default = Stories;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThhOWVlZjBhOTE1NWYzMzQ1MGQiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQXV0aG9yQ2FyZCIsImJpbyIsIkJpbyIsInN0b3JpZXMiLCJTdG9yaWVzIiwidGFibGV0V2lkdGgiLCJjb2xsYXBzZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQmlvIiwibWF0Y2hlcyIsImV4cGFuZCIsImF1dGhvckNhcmQiLCJpbml0Iiwic2VsZWN0b3IiLCJjb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJDb2xsYXBzZWRDbGFzcyIsIkFjY29yZGlvbiIsInRyaWdnZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7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QWU7QUFDZEEsWUFBUU0sU0FBUixDQUFrQkksTUFBbEIsQ0FBMEJaLHFCQUExQjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHUztBQUFBLE9BRVBHLE9BRk8sR0FNSixJQU5JLENBRVBBLE9BRk87QUFBQSxPQUdQRCxPQUhPLEdBTUosSUFOSSxDQUdQQSxPQUhPO0FBQUEsT0FJUEgsY0FKTyxHQU1KLElBTkksQ0FJUEEsY0FKTztBQUFBLE9BS1BDLHFCQUxPLEdBTUosSUFOSSxDQUtQQSxxQkFMTzs7O0FBUVIsT0FBSyxDQUFFRyxPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRURBLFdBQVFLLFNBQVIsQ0FBa0JJLE1BQWxCLENBQTBCYixjQUExQjtBQUNBSSxXQUFRUSxZQUFSLENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDOztBQUVBLE9BQUtULE9BQUwsRUFBZTtBQUNkQSxZQUFRTSxTQUFSLENBQWtCRSxHQUFsQixDQUF1QlYscUJBQXZCO0FBQ0E7QUFDRDs7Ozs7O2tCQWhGbUJDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQmYsTzs7O0FBQ3BCOzs7O0FBSUEsa0JBQWFZLFFBQWIsRUFBd0I7QUFBQTs7QUFBQSxnSEFDaEJBLFFBRGdCLEVBQ04sbUJBRE07O0FBR3ZCLFFBQUtDLGNBQUwsR0FBc0IsNkJBQXRCO0FBQ0EsUUFBS0MscUJBQUwsR0FBNkIsNEJBQTdCO0FBSnVCO0FBS3ZCOzs7RUFWbUNDLG1COztrQkFBaEJmLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE4YTllZWYwYTkxNTVmMzM0NTBkIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBCaW8gZnJvbSAnLi9jb21wb25lbnRzL2Jpbyc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL2NvbXBvbmVudHMvc3Rvcmllcyc7XG5cbi8qKlxuICogSGFuZGxlcyBhdXRob3IgY2FyZCBjb21wb25lbnRzXG4gKi9cbmNsYXNzIEF1dGhvckNhcmQge1xuXHQvKipcblx0ICogU2F2ZSBjb21wb25lbnQgcmVmZXJlbmNlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblx0XHR0aGlzLnN0b3JpZXMgPSBuZXcgU3RvcmllcyggJyNzdG9yaWVzX19kcm9wZG93bicgKTtcblx0XHR0aGlzLnRhYmxldFdpZHRoID0gNzY3O1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRpZiAoIHRoaXMuc3RvcmllcyApIHtcblx0XHRcdHRoaXMuc3Rvcmllcy5jb2xsYXBzZSgpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5tYXRjaE1lZGlhKCBgKG1heC13aWR0aDogJHsgdGhpcy50YWJsZXRXaWR0aCB9cHgpYCApLmFkZExpc3RlbmVyKCAoIGV2ZW50ICkgPT4gdGhpcy50b2dnbGVCaW8oIGV2ZW50ICkgKTtcblx0fVxuXG5cdHRvZ2dsZUJpbyggZXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmJpbyAmJiBldmVudC5tYXRjaGVzICkge1xuXHRcdFx0dGhpcy5iaW8uY29sbGFwc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5iaW8uZXhwYW5kKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGF1dGhvckNhcmQgPSBuZXcgQXV0aG9yQ2FyZCgpO1xuXG5hdXRob3JDYXJkLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBDb250cm9scyBiaW8gY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW8gZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgQmlvIGVsZW1lbnQgY3NzIHVuaXF1ZSBzZWxlY3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yICkge1xuXHRcdHN1cGVyKCBzZWxlY3RvciwgYCR7IHNlbGVjdG9yIH0gfiAubW9yZWAgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnYmlvX19jb2xsYXBzZWQnO1xuXHRcdHRoaXMudHJpZ2dlckNvbGxhcHNlZENsYXNzID0gJ21vcmVfX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIiwiLyoqXG4gKiBDb250cm9scyBlbGVtZW50IGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXRcblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgRWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIEVsZW1lbnRvIHRvIHRvZ2dsZSBhY2NvcmRpb25cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciwgdHJpZ2dlciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdHJpZ2dlciApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdhY2NvcmRpb25fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAndHJpZ2dlcl9fY29sbGFwc2VkJztcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50LCBjb2xsYXBzZWRDbGFzcyB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNvbGxhcHNlZENsYXNzICkgKSB7XG5cdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGFuZCBhZGQgaWNvblxuXHQgKi9cblx0Y29sbGFwc2UoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIGFuZCByZW1vdmUgaWNvblxuXHQgKi9cblx0ZXhwYW5kKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHR0cmlnZ2VyLFxuXHRcdFx0Y29sbGFwc2VkQ2xhc3MsXG5cdFx0XHR0cmlnZ2VyQ29sbGFwc2VkQ2xhc3MsXG5cdFx0fSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGNvbGxhcHNlZENsYXNzICk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBIYW5kbGVzIHN0b3JpZXMgbm90aWZpY2F0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yaWVzIGV4dGVuZHMgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXQgcGFyZW50IGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBTdG9yaWVzIHVuaXF1ZSBlbGVtZW50XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCAnI3N0b3JpZXNfX3RyaWdnZXInICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ3N0b3JpZXNfX2Ryb3Bkb3duX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fdHJpZ2dlcl9jb2xsYXBzZWQnO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwic291cmNlUm9vdCI6IiJ9