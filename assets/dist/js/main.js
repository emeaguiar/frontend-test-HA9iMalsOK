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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bio = __webpack_require__(/*! ./components/bio */ 2);

var _bio2 = _interopRequireDefault(_bio);

var _stories = __webpack_require__(/*! ./components/stories */ 3);

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

			var matchMedia = window.matchMedia('(max-width: ' + this.tabletWidth + 'px)');

			if (this.stories) {
				this.stories.collapse();
			}

			matchMedia.addListener(function (event) {
				return _this.toggleBio(event);
			});

			this.toggleBio(matchMedia);
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

var _accordion = __webpack_require__(/*! ./accordion */ 0);

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

var _accordion = __webpack_require__(/*! ./accordion */ 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWU0OWE1N2JjMzgyM2ZhMmRkMDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwic2VsZWN0b3IiLCJ0cmlnZ2VyIiwiZWxlbWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbGxhcHNlZENsYXNzIiwidHJpZ2dlckNvbGxhcHNlZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZXhwYW5kIiwiY29sbGFwc2UiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJBdXRob3JDYXJkIiwiYmlvIiwiQmlvIiwic3RvcmllcyIsIlN0b3JpZXMiLCJ0YWJsZXRXaWR0aCIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQmlvIiwibWF0Y2hlcyIsImF1dGhvckNhcmQiLCJpbml0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7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V0FBYSxNQUFLQyxTQUFMLENBQWdCRCxLQUFoQixDQUFiO0FBQUEsSUFBeEI7O0FBRUEsUUFBS0MsU0FBTCxDQUFnQkgsVUFBaEI7QUFDQTs7QUFFRDs7Ozs7Ozs0QkFJV0UsSyxFQUFRO0FBQ2xCLE9BQUssS0FBS1AsR0FBTCxJQUFZTyxNQUFNRSxPQUF2QixFQUFpQztBQUNoQyxTQUFLVCxHQUFMLENBQVNMLFFBQVQ7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLSyxHQUFMLENBQVNOLE1BQVQ7QUFDQTtBQUNEOzs7Ozs7QUFHRixJQUFNZ0IsYUFBYSxJQUFJWCxVQUFKLEVBQW5COztBQUVBVyxXQUFXQyxJQUFYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQlYsRzs7O0FBQ3BCOzs7OztBQUtBLGNBQWFuQixRQUFiLEVBQXdCO0FBQUE7O0FBQUEsd0dBQ2hCQSxRQURnQixFQUNGQSxRQURFOztBQUd2QixRQUFLTSxjQUFMLEdBQXNCLGdCQUF0QjtBQUNBLFFBQUtDLHFCQUFMLEdBQTZCLGlCQUE3QjtBQUp1QjtBQUt2Qjs7O0VBWCtCUixtQjs7a0JBQVpvQixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJFLE87OztBQUNwQjs7OztBQUlBLGtCQUFhckIsUUFBYixFQUF3QjtBQUFBOztBQUFBLGdIQUNoQkEsUUFEZ0IsRUFDTixtQkFETTs7QUFHdkIsUUFBS00sY0FBTCxHQUFzQiw2QkFBdEI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2Qiw0QkFBN0I7QUFKdUI7QUFLdkI7OztFQVZtQ1IsbUI7O2tCQUFoQnNCLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVlNDlhNTdiYzM4MjNmYTJkZDA4IiwiLyoqXG4gKiBDb250cm9scyBlbGVtZW50IGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXRcblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgRWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIEVsZW1lbnRvIHRvIHRvZ2dsZSBhY2NvcmRpb25cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciwgdHJpZ2dlciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdHJpZ2dlciApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdhY2NvcmRpb25fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAndHJpZ2dlcl9fY29sbGFwc2VkJztcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50LCBjb2xsYXBzZWRDbGFzcyB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNvbGxhcHNlZENsYXNzICkgKSB7XG5cdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGFuZCBhZGQgaWNvblxuXHQgKi9cblx0Y29sbGFwc2UoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIGFuZCByZW1vdmUgaWNvblxuXHQgKi9cblx0ZXhwYW5kKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHR0cmlnZ2VyLFxuXHRcdFx0Y29sbGFwc2VkQ2xhc3MsXG5cdFx0XHR0cmlnZ2VyQ29sbGFwc2VkQ2xhc3MsXG5cdFx0fSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGNvbGxhcHNlZENsYXNzICk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJpbXBvcnQgQmlvIGZyb20gJy4vY29tcG9uZW50cy9iaW8nO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9jb21wb25lbnRzL3N0b3JpZXMnO1xuXG4vKipcbiAqIEhhbmRsZXMgYXV0aG9yIGNhcmQgY29tcG9uZW50c1xuICovXG5jbGFzcyBBdXRob3JDYXJkIHtcblx0LyoqXG5cdCAqIFNhdmUgY29tcG9uZW50IHJlZmVyZW5jZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmlvID0gbmV3IEJpbyggJyNiaW8nICk7XG5cdFx0dGhpcy5zdG9yaWVzID0gbmV3IFN0b3JpZXMoICcjc3Rvcmllc19fZHJvcGRvd24nICk7XG5cdFx0dGhpcy50YWJsZXRXaWR0aCA9IDc2Nztcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IGNvbXBvbmVudHNcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCBgKG1heC13aWR0aDogJHsgdGhpcy50YWJsZXRXaWR0aCB9cHgpYCApO1xuXG5cdFx0aWYgKCB0aGlzLnN0b3JpZXMgKSB7XG5cdFx0XHR0aGlzLnN0b3JpZXMuY29sbGFwc2UoKTtcblx0XHR9XG5cblx0XHRtYXRjaE1lZGlhLmFkZExpc3RlbmVyKCAoIGV2ZW50ICkgPT4gdGhpcy50b2dnbGVCaW8oIGV2ZW50ICkgKTtcblxuXHRcdHRoaXMudG9nZ2xlQmlvKCBtYXRjaE1lZGlhICk7XG5cdH1cblxuXHQvKipcblx0ICogVHVybiBCaW8gb24gb3Igb2ZmIGRlcGVuZGluZyBvbiBtZWRpYSBxdWVyeVxuXHQgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVHJpZ2dlcmVkIE1hdGNobWVkaWEgb2JqZWN0XG5cdCAqL1xuXHR0b2dnbGVCaW8oIGV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5iaW8gJiYgZXZlbnQubWF0Y2hlcyApIHtcblx0XHRcdHRoaXMuYmlvLmNvbGxhcHNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYmlvLmV4cGFuZCgpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBhdXRob3JDYXJkID0gbmV3IEF1dGhvckNhcmQoKTtcblxuYXV0aG9yQ2FyZC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLmpzIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL2FjY29yZGlvbic7XG5cbi8qKlxuICogQ29udHJvbHMgYmlvIGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlvIGV4dGVuZHMgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXQgcGFyZW50IGNsYXNzXG5cdCAqIFNhdmUgZWxlbWVudHMgaW4gY2FjaGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIEJpbyBlbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHRzdXBlciggc2VsZWN0b3IsIGAkeyBzZWxlY3RvciB9IH4gLm1vcmVgICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ2Jpb19fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICdtb3JlX19jb2xsYXBzZWQnO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Jpby5qcyIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4vKipcbiAqIEhhbmRsZXMgc3RvcmllcyBub3RpZmljYXRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFN0b3JpZXMgdW5pcXVlIGVsZW1lbnRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHRzdXBlciggc2VsZWN0b3IsICcjc3Rvcmllc19fdHJpZ2dlcicgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fZHJvcGRvd25fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICdzdG9yaWVzX190cmlnZ2VyX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3Rvcmllcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=