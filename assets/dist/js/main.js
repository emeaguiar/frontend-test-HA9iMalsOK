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

	/**
  * Init components
  */


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

		/**
   * Turn Bio on or off depending on media query
   * @param {Object} event Triggered Matchmedia object
   */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk4ZThiMzYyM2I0ZGM3OWRjNzMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQXV0aG9yQ2FyZCIsImJpbyIsIkJpbyIsInN0b3JpZXMiLCJTdG9yaWVzIiwidGFibGV0V2lkdGgiLCJjb2xsYXBzZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQmlvIiwibWF0Y2hlcyIsImV4cGFuZCIsImF1dGhvckNhcmQiLCJpbml0Iiwic2VsZWN0b3IiLCJjb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJDb2xsYXBzZWRDbGFzcyIsIkFjY29yZGlvbiIsInRyaWdnZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7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QSxPQUFLVCxPQUFMLEVBQWU7QUFDZEEsWUFBUU0sU0FBUixDQUFrQkksTUFBbEIsQ0FBMEJaLHFCQUExQjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHUztBQUFBLE9BRVBHLE9BRk8sR0FNSixJQU5JLENBRVBBLE9BRk87QUFBQSxPQUdQRCxPQUhPLEdBTUosSUFOSSxDQUdQQSxPQUhPO0FBQUEsT0FJUEgsY0FKTyxHQU1KLElBTkksQ0FJUEEsY0FKTztBQUFBLE9BS1BDLHFCQUxPLEdBTUosSUFOSSxDQUtQQSxxQkFMTzs7O0FBUVIsT0FBSyxDQUFFRyxPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRURBLFdBQVFLLFNBQVIsQ0FBa0JJLE1BQWxCLENBQTBCYixjQUExQjtBQUNBSSxXQUFRUSxZQUFSLENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDOztBQUVBLE9BQUtULE9BQUwsRUFBZTtBQUNkQSxZQUFRTSxTQUFSLENBQWtCRSxHQUFsQixDQUF1QlYscUJBQXZCO0FBQ0E7QUFDRDs7Ozs7O2tCQWhGbUJDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQmYsTzs7O0FBQ3BCOzs7O0FBSUEsa0JBQWFZLFFBQWIsRUFBd0I7QUFBQTs7QUFBQSxnSEFDaEJBLFFBRGdCLEVBQ04sbUJBRE07O0FBR3ZCLFFBQUtDLGNBQUwsR0FBc0IsNkJBQXRCO0FBQ0EsUUFBS0MscUJBQUwsR0FBNkIsNEJBQTdCO0FBSnVCO0FBS3ZCOzs7RUFWbUNDLG1COztrQkFBaEJmLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM5OGU4YjM2MjNiNGRjNzlkYzczIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBCaW8gZnJvbSAnLi9jb21wb25lbnRzL2Jpbyc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL2NvbXBvbmVudHMvc3Rvcmllcyc7XG5cbi8qKlxuICogSGFuZGxlcyBhdXRob3IgY2FyZCBjb21wb25lbnRzXG4gKi9cbmNsYXNzIEF1dGhvckNhcmQge1xuXHQvKipcblx0ICogU2F2ZSBjb21wb25lbnQgcmVmZXJlbmNlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblx0XHR0aGlzLnN0b3JpZXMgPSBuZXcgU3RvcmllcyggJyNzdG9yaWVzX19kcm9wZG93bicgKTtcblx0XHR0aGlzLnRhYmxldFdpZHRoID0gNzY3O1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgY29tcG9uZW50c1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiAoIHRoaXMuc3RvcmllcyApIHtcblx0XHRcdHRoaXMuc3Rvcmllcy5jb2xsYXBzZSgpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5tYXRjaE1lZGlhKCBgKG1heC13aWR0aDogJHsgdGhpcy50YWJsZXRXaWR0aCB9cHgpYCApXG5cdFx0XHQuYWRkTGlzdGVuZXIoICggZXZlbnQgKSA9PiB0aGlzLnRvZ2dsZUJpbyggZXZlbnQgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFR1cm4gQmlvIG9uIG9yIG9mZiBkZXBlbmRpbmcgb24gbWVkaWEgcXVlcnlcblx0ICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRyaWdnZXJlZCBNYXRjaG1lZGlhIG9iamVjdFxuXHQgKi9cblx0dG9nZ2xlQmlvKCBldmVudCApIHtcblx0XHRpZiAoIHRoaXMuYmlvICYmIGV2ZW50Lm1hdGNoZXMgKSB7XG5cdFx0XHR0aGlzLmJpby5jb2xsYXBzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmJpby5leHBhbmQoKTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgYXV0aG9yQ2FyZCA9IG5ldyBBdXRob3JDYXJkKCk7XG5cbmF1dGhvckNhcmQuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4vKipcbiAqIENvbnRyb2xzIGJpbyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbyBleHRlbmRzIEFjY29yZGlvbiB7XG5cdC8qKlxuXHQgKiBJbml0IHBhcmVudCBjbGFzc1xuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBCaW8gZWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCBgJHsgc2VsZWN0b3IgfSB+IC5tb3JlYCApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdiaW9fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnbW9yZV9fY29sbGFwc2VkJztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9iaW8uanMiLCIvKipcbiAqIENvbnRyb2xzIGVsZW1lbnQgY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdFxuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBFbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXIgRWxlbWVudG8gdG8gdG9nZ2xlIGFjY29yZGlvblxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yLCB0cmlnZ2VyICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuXHRcdHRoaXMudHJpZ2dlciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0cmlnZ2VyICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ2FjY29yZGlvbl9fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICd0cmlnZ2VyX19jb2xsYXBzZWQnO1xuXG5cdFx0aWYgKCB0aGlzLnRyaWdnZXIgKSB7XG5cdFx0XHR0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGUoKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBhbmQgb3IgY29sbGFwc2UgYmFzZWQgb24gY3VycmVudCBzdGF0dXNcblx0ICovXG5cdHRvZ2dsZSgpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQsIGNvbGxhcHNlZENsYXNzIH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY29sbGFwc2VkQ2xhc3MgKSApIHtcblx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sbGFwc2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgYW5kIGFkZCBpY29uXG5cdCAqL1xuXHRjb2xsYXBzZSgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0dHJpZ2dlcixcblx0XHRcdGNvbGxhcHNlZENsYXNzLFxuXHRcdFx0dHJpZ2dlckNvbGxhcHNlZENsYXNzLFxuXHRcdH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBjb2xsYXBzZWRDbGFzcyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW4gYW5kIHJlbW92ZSBpY29uXG5cdCAqL1xuXHRleHBhbmQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4vKipcbiAqIEhhbmRsZXMgc3RvcmllcyBub3RpZmljYXRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFN0b3JpZXMgdW5pcXVlIGVsZW1lbnRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHRzdXBlciggc2VsZWN0b3IsICcjc3Rvcmllc19fdHJpZ2dlcicgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fZHJvcGRvd25fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICdzdG9yaWVzX190cmlnZ2VyX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3Rvcmllcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=