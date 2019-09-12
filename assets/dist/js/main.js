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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjM5MWYzYzZhMWFkOGMzYWYwN2MiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQXV0aG9yQ2FyZCIsImJpbyIsIkJpbyIsInN0b3JpZXMiLCJTdG9yaWVzIiwidGFibGV0V2lkdGgiLCJjb2xsYXBzZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQmlvIiwibWF0Y2hlcyIsImV4cGFuZCIsImF1dGhvckNhcmQiLCJpbml0Iiwic2VsZWN0b3IiLCJjb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJDb2xsYXBzZWRDbGFzcyIsIkFjY29yZGlvbiIsInRyaWdnZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7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LE9BQUwsRUFBZTtBQUNkQSxZQUFRTSxTQUFSLENBQWtCSSxNQUFsQixDQUEwQloscUJBQTFCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzJCQUdTO0FBQUEsT0FFUEcsT0FGTyxHQU1KLElBTkksQ0FFUEEsT0FGTztBQUFBLE9BR1BELE9BSE8sR0FNSixJQU5JLENBR1BBLE9BSE87QUFBQSxPQUlQSCxjQUpPLEdBTUosSUFOSSxDQUlQQSxjQUpPO0FBQUEsT0FLUEMscUJBTE8sR0FNSixJQU5JLENBS1BBLHFCQUxPOzs7QUFRUixPQUFLLENBQUVHLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFREEsV0FBUUssU0FBUixDQUFrQkksTUFBbEIsQ0FBMEJiLGNBQTFCO0FBQ0FJLFdBQVFRLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsTUFBdkM7O0FBRUEsT0FBS1QsT0FBTCxFQUFlO0FBQ2RBLFlBQVFNLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXVCVixxQkFBdkI7QUFDQTtBQUNEOzs7Ozs7a0JBaEZtQkMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCZixPOzs7QUFDcEI7Ozs7QUFJQSxrQkFBYVksUUFBYixFQUF3QjtBQUFBOztBQUFBLGdIQUNoQkEsUUFEZ0IsRUFDTixtQkFETTs7QUFHdkIsUUFBS0MsY0FBTCxHQUFzQiw2QkFBdEI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2Qiw0QkFBN0I7QUFKdUI7QUFLdkI7OztFQVZtQ0MsbUI7O2tCQUFoQmYsTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjM5MWYzYzZhMWFkOGMzYWYwN2MiLCJpbXBvcnQgQmlvIGZyb20gJy4vY29tcG9uZW50cy9iaW8nO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9jb21wb25lbnRzL3N0b3JpZXMnO1xuXG4vKipcbiAqIEhhbmRsZXMgYXV0aG9yIGNhcmQgY29tcG9uZW50c1xuICovXG5jbGFzcyBBdXRob3JDYXJkIHtcblx0LyoqXG5cdCAqIFNhdmUgY29tcG9uZW50IHJlZmVyZW5jZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmlvID0gbmV3IEJpbyggJyNiaW8nICk7XG5cdFx0dGhpcy5zdG9yaWVzID0gbmV3IFN0b3JpZXMoICcjc3Rvcmllc19fZHJvcGRvd24nICk7XG5cdFx0dGhpcy50YWJsZXRXaWR0aCA9IDc2Nztcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IGNvbXBvbmVudHNcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYgKCB0aGlzLnN0b3JpZXMgKSB7XG5cdFx0XHR0aGlzLnN0b3JpZXMuY29sbGFwc2UoKTtcblx0XHR9XG5cblx0XHR3aW5kb3cubWF0Y2hNZWRpYSggYChtYXgtd2lkdGg6ICR7IHRoaXMudGFibGV0V2lkdGggfXB4KWAgKVxuXHRcdFx0LmFkZExpc3RlbmVyKCAoIGV2ZW50ICkgPT4gdGhpcy50b2dnbGVCaW8oIGV2ZW50ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUdXJuIEJpbyBvbiBvciBvZmYgZGVwZW5kaW5nIG9uIG1lZGlhIHF1ZXJ5XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUcmlnZ2VyZWQgTWF0Y2htZWRpYSBvYmplY3Rcblx0ICovXG5cdHRvZ2dsZUJpbyggZXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmJpbyAmJiBldmVudC5tYXRjaGVzICkge1xuXHRcdFx0dGhpcy5iaW8uY29sbGFwc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5iaW8uZXhwYW5kKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGF1dGhvckNhcmQgPSBuZXcgQXV0aG9yQ2FyZCgpO1xuXG5hdXRob3JDYXJkLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBDb250cm9scyBiaW8gY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW8gZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgQmlvIGVsZW1lbnQgY3NzIHVuaXF1ZSBzZWxlY3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yICkge1xuXHRcdHN1cGVyKCBzZWxlY3RvciwgYCR7IHNlbGVjdG9yIH0gfiAubW9yZWAgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnYmlvX19jb2xsYXBzZWQnO1xuXHRcdHRoaXMudHJpZ2dlckNvbGxhcHNlZENsYXNzID0gJ21vcmVfX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIiwiLyoqXG4gKiBDb250cm9scyBlbGVtZW50IGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXRcblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgRWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIEVsZW1lbnRvIHRvIHRvZ2dsZSBhY2NvcmRpb25cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciwgdHJpZ2dlciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdHJpZ2dlciApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdhY2NvcmRpb25fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAndHJpZ2dlcl9fY29sbGFwc2VkJztcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50LCBjb2xsYXBzZWRDbGFzcyB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNvbGxhcHNlZENsYXNzICkgKSB7XG5cdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGFuZCBhZGQgaWNvblxuXHQgKi9cblx0Y29sbGFwc2UoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIGFuZCByZW1vdmUgaWNvblxuXHQgKi9cblx0ZXhwYW5kKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHR0cmlnZ2VyLFxuXHRcdFx0Y29sbGFwc2VkQ2xhc3MsXG5cdFx0XHR0cmlnZ2VyQ29sbGFwc2VkQ2xhc3MsXG5cdFx0fSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGNvbGxhcHNlZENsYXNzICk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBIYW5kbGVzIHN0b3JpZXMgbm90aWZpY2F0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yaWVzIGV4dGVuZHMgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXQgcGFyZW50IGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBTdG9yaWVzIHVuaXF1ZSBlbGVtZW50XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCAnI3N0b3JpZXNfX3RyaWdnZXInICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ3N0b3JpZXNfX2Ryb3Bkb3duX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fdHJpZ2dlcl9jb2xsYXBzZWQnO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwic291cmNlUm9vdCI6IiJ9