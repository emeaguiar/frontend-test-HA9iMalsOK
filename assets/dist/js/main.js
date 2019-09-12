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
		this.tabletWidth = 768;
	}

	_createClass(AuthorCard, [{
		key: 'init',
		value: function init() {
			if (this.bio && this.isMobile()) {
				this.bio.collapse();
			}

			if (this.stories) {
				this.stories.collapse();
			}
		}
	}, {
		key: 'isMobile',
		value: function isMobile() {
			return window.outerWidth < this.tabletWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY0ZDQ0ODg2ZDQ2MzY4MThlZWIiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQXV0aG9yQ2FyZCIsImJpbyIsIkJpbyIsInN0b3JpZXMiLCJTdG9yaWVzIiwidGFibGV0V2lkdGgiLCJpc01vYmlsZSIsImNvbGxhcHNlIiwid2luZG93Iiwib3V0ZXJXaWR0aCIsImF1dGhvckNhcmQiLCJpbml0Iiwic2VsZWN0b3IiLCJjb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJDb2xsYXBzZWRDbGFzcyIsIkFjY29yZGlvbiIsInRyaWdnZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZXhwYW5kIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztxakJDN0RBOzs7QUFDQTs7OztB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LEdBTUosSUFOSSxDQUlQQSxjQUpPO0FBQUEsT0FLUEMscUJBTE8sR0FNSixJQU5JLENBS1BBLHFCQUxPOzs7QUFRUixPQUFLLENBQUVHLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFREEsV0FBUUssU0FBUixDQUFrQkssTUFBbEIsQ0FBMEJkLGNBQTFCO0FBQ0FJLFdBQVFTLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsTUFBdkM7O0FBRUEsT0FBS1YsT0FBTCxFQUFlO0FBQ2RBLFlBQVFNLFNBQVIsQ0FBa0JHLEdBQWxCLENBQXVCWCxxQkFBdkI7QUFDQTtBQUNEOzs7Ozs7a0JBaEZtQkMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCWCxPOzs7QUFDcEI7Ozs7QUFJQSxrQkFBYVEsUUFBYixFQUF3QjtBQUFBOztBQUFBLGdIQUNoQkEsUUFEZ0IsRUFDTixtQkFETTs7QUFHdkIsUUFBS0MsY0FBTCxHQUFzQiw2QkFBdEI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2Qiw0QkFBN0I7QUFKdUI7QUFLdkI7OztFQVZtQ0MsbUI7O2tCQUFoQlgsTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTY0ZDQ0ODg2ZDQ2MzY4MThlZWIiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IEJpbyBmcm9tICcuL2NvbXBvbmVudHMvYmlvJztcbmltcG9ydCBTdG9yaWVzIGZyb20gJy4vY29tcG9uZW50cy9zdG9yaWVzJztcblxuLyoqXG4gKiBIYW5kbGVzIGF1dGhvciBjYXJkIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgQXV0aG9yQ2FyZCB7XG5cdC8qKlxuXHQgKiBTYXZlIGNvbXBvbmVudCByZWZlcmVuY2VzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJpbyA9IG5ldyBCaW8oICcjYmlvJyApO1xuXHRcdHRoaXMuc3RvcmllcyA9IG5ldyBTdG9yaWVzKCAnI3N0b3JpZXNfX2Ryb3Bkb3duJyApO1xuXHRcdHRoaXMudGFibGV0V2lkdGggPSA3Njg7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGlmICggdGhpcy5iaW8gJiYgdGhpcy5pc01vYmlsZSgpICkge1xuXHRcdFx0dGhpcy5iaW8uY29sbGFwc2UoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuc3RvcmllcyApIHtcblx0XHRcdHRoaXMuc3Rvcmllcy5jb2xsYXBzZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzTW9iaWxlKCkge1xuXHRcdHJldHVybiB3aW5kb3cub3V0ZXJXaWR0aCA8IHRoaXMudGFibGV0V2lkdGg7XG5cdH1cbn1cblxuY29uc3QgYXV0aG9yQ2FyZCA9IG5ldyBBdXRob3JDYXJkKCk7XG5cbmF1dGhvckNhcmQuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4vKipcbiAqIENvbnRyb2xzIGJpbyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbyBleHRlbmRzIEFjY29yZGlvbiB7XG5cdC8qKlxuXHQgKiBJbml0IHBhcmVudCBjbGFzc1xuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBCaW8gZWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCBgJHsgc2VsZWN0b3IgfSB+IC5tb3JlYCApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdiaW9fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnbW9yZV9fY29sbGFwc2VkJztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9iaW8uanMiLCIvKipcbiAqIENvbnRyb2xzIGVsZW1lbnQgY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdFxuXHQgKiBTYXZlIGVsZW1lbnRzIGluIGNhY2hlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBFbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXIgRWxlbWVudG8gdG8gdG9nZ2xlIGFjY29yZGlvblxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yLCB0cmlnZ2VyICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuXHRcdHRoaXMudHJpZ2dlciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0cmlnZ2VyICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ2FjY29yZGlvbl9fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICd0cmlnZ2VyX19jb2xsYXBzZWQnO1xuXG5cdFx0aWYgKCB0aGlzLnRyaWdnZXIgKSB7XG5cdFx0XHR0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGUoKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBhbmQgb3IgY29sbGFwc2UgYmFzZWQgb24gY3VycmVudCBzdGF0dXNcblx0ICovXG5cdHRvZ2dsZSgpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQsIGNvbGxhcHNlZENsYXNzIH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY29sbGFwc2VkQ2xhc3MgKSApIHtcblx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sbGFwc2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgYW5kIGFkZCBpY29uXG5cdCAqL1xuXHRjb2xsYXBzZSgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0dHJpZ2dlcixcblx0XHRcdGNvbGxhcHNlZENsYXNzLFxuXHRcdFx0dHJpZ2dlckNvbGxhcHNlZENsYXNzLFxuXHRcdH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBjb2xsYXBzZWRDbGFzcyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW4gYW5kIHJlbW92ZSBpY29uXG5cdCAqL1xuXHRleHBhbmQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCggdHJpZ2dlckNvbGxhcHNlZENsYXNzICk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4vKipcbiAqIEhhbmRsZXMgc3RvcmllcyBub3RpZmljYXRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFN0b3JpZXMgdW5pcXVlIGVsZW1lbnRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHRzdXBlciggc2VsZWN0b3IsICcjc3Rvcmllc19fdHJpZ2dlcicgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fZHJvcGRvd25fY29sbGFwc2VkJztcblx0XHR0aGlzLnRyaWdnZXJDb2xsYXBzZWRDbGFzcyA9ICdzdG9yaWVzX190cmlnZ2VyX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3Rvcmllcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=