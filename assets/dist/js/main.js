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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjg1YmIxMTg3OWVmMjI2YjAwNWYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiQXV0aG9yQ2FyZCIsImJpbyIsIkJpbyIsInN0b3JpZXMiLCJTdG9yaWVzIiwidGFibGV0V2lkdGgiLCJtYXRjaE1lZGlhIiwid2luZG93IiwiY29sbGFwc2UiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQmlvIiwibWF0Y2hlcyIsImV4cGFuZCIsImF1dGhvckNhcmQiLCJpbml0Iiwic2VsZWN0b3IiLCJjb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJDb2xsYXBzZWRDbGFzcyIsIkFjY29yZGlvbiIsInRyaWdnZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7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QXZCO0FBQ0FJLFdBQVFRLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsT0FBdkM7O0FBRUEsT0FBS1QsT0FBTCxFQUFlO0FBQ2RBLFlBQVFNLFNBQVIsQ0FBa0JJLE1BQWxCLENBQTBCWixxQkFBMUI7QUFDQTtBQUNEOztBQUVEOzs7Ozs7MkJBR1M7QUFBQSxPQUVQRyxPQUZPLEdBTUosSUFOSSxDQUVQQSxPQUZPO0FBQUEsT0FHUEQsT0FITyxHQU1KLElBTkksQ0FHUEEsT0FITztBQUFBLE9BSVBILGNBSk8sR0FNSixJQU5JLENBSVBBLGNBSk87QUFBQSxPQUtQQyxxQkFMTyxHQU1KLElBTkksQ0FLUEEscUJBTE87OztBQVFSLE9BQUssQ0FBRUcsT0FBUCxFQUFpQjtBQUNoQjtBQUNBOztBQUVEQSxXQUFRSyxTQUFSLENBQWtCSSxNQUFsQixDQUEwQmIsY0FBMUI7QUFDQUksV0FBUVEsWUFBUixDQUFzQixlQUF0QixFQUF1QyxNQUF2Qzs7QUFFQSxPQUFLVCxPQUFMLEVBQWU7QUFDZEEsWUFBUU0sU0FBUixDQUFrQkUsR0FBbEIsQ0FBdUJWLHFCQUF2QjtBQUNBO0FBQ0Q7Ozs7OztrQkFoRm1CQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJmLE87OztBQUNwQjs7OztBQUlBLGtCQUFhWSxRQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0hBQ2hCQSxRQURnQixFQUNOLG1CQURNOztBQUd2QixRQUFLQyxjQUFMLEdBQXNCLDZCQUF0QjtBQUNBLFFBQUtDLHFCQUFMLEdBQTZCLDRCQUE3QjtBQUp1QjtBQUt2Qjs7O0VBVm1DQyxtQjs7a0JBQWhCZixPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiODViYjExODc5ZWYyMjZiMDA1ZiIsImltcG9ydCBCaW8gZnJvbSAnLi9jb21wb25lbnRzL2Jpbyc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL2NvbXBvbmVudHMvc3Rvcmllcyc7XG5cbi8qKlxuICogSGFuZGxlcyBhdXRob3IgY2FyZCBjb21wb25lbnRzXG4gKi9cbmNsYXNzIEF1dGhvckNhcmQge1xuXHQvKipcblx0ICogU2F2ZSBjb21wb25lbnQgcmVmZXJlbmNlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblx0XHR0aGlzLnN0b3JpZXMgPSBuZXcgU3RvcmllcyggJyNzdG9yaWVzX19kcm9wZG93bicgKTtcblx0XHR0aGlzLnRhYmxldFdpZHRoID0gNzY3O1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgY29tcG9uZW50c1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoIGAobWF4LXdpZHRoOiAkeyB0aGlzLnRhYmxldFdpZHRoIH1weClgICk7XG5cblx0XHRpZiAoIHRoaXMuc3RvcmllcyApIHtcblx0XHRcdHRoaXMuc3Rvcmllcy5jb2xsYXBzZSgpO1xuXHRcdH1cblxuXHRcdG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoICggZXZlbnQgKSA9PiB0aGlzLnRvZ2dsZUJpbyggZXZlbnQgKSApO1xuXG5cdFx0dGhpcy50b2dnbGVCaW8oIG1hdGNoTWVkaWEgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUdXJuIEJpbyBvbiBvciBvZmYgZGVwZW5kaW5nIG9uIG1lZGlhIHF1ZXJ5XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUcmlnZ2VyZWQgTWF0Y2htZWRpYSBvYmplY3Rcblx0ICovXG5cdHRvZ2dsZUJpbyggZXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmJpbyAmJiBldmVudC5tYXRjaGVzICkge1xuXHRcdFx0dGhpcy5iaW8uY29sbGFwc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5iaW8uZXhwYW5kKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGF1dGhvckNhcmQgPSBuZXcgQXV0aG9yQ2FyZCgpO1xuXG5hdXRob3JDYXJkLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBDb250cm9scyBiaW8gY29sbGFwc2VkIG9yIGV4cGFuZGVkIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW8gZXh0ZW5kcyBBY2NvcmRpb24ge1xuXHQvKipcblx0ICogSW5pdCBwYXJlbnQgY2xhc3Ncblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgQmlvIGVsZW1lbnQgY3NzIHVuaXF1ZSBzZWxlY3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yICkge1xuXHRcdHN1cGVyKCBzZWxlY3RvciwgYCR7IHNlbGVjdG9yIH0gfiAubW9yZWAgKTtcblxuXHRcdHRoaXMuY29sbGFwc2VkQ2xhc3MgPSAnYmlvX19jb2xsYXBzZWQnO1xuXHRcdHRoaXMudHJpZ2dlckNvbGxhcHNlZENsYXNzID0gJ21vcmVfX2NvbGxhcHNlZCc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIiwiLyoqXG4gKiBDb250cm9scyBlbGVtZW50IGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXRcblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgRWxlbWVudCBjc3MgdW5pcXVlIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIEVsZW1lbnRvIHRvIHRvZ2dsZSBhY2NvcmRpb25cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciwgdHJpZ2dlciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdHJpZ2dlciApO1xuXG5cdFx0dGhpcy5jb2xsYXBzZWRDbGFzcyA9ICdhY2NvcmRpb25fX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAndHJpZ2dlcl9fY29sbGFwc2VkJztcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50LCBjb2xsYXBzZWRDbGFzcyB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNvbGxhcHNlZENsYXNzICkgKSB7XG5cdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGFuZCBhZGQgaWNvblxuXHQgKi9cblx0Y29sbGFwc2UoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRjb2xsYXBzZWRDbGFzcyxcblx0XHRcdHRyaWdnZXJDb2xsYXBzZWRDbGFzcyxcblx0XHR9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggY29sbGFwc2VkQ2xhc3MgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIGFuZCByZW1vdmUgaWNvblxuXHQgKi9cblx0ZXhwYW5kKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHR0cmlnZ2VyLFxuXHRcdFx0Y29sbGFwc2VkQ2xhc3MsXG5cdFx0XHR0cmlnZ2VyQ29sbGFwc2VkQ2xhc3MsXG5cdFx0fSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGNvbGxhcHNlZENsYXNzICk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRpZiAoIHRyaWdnZXIgKSB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoIHRyaWdnZXJDb2xsYXBzZWRDbGFzcyApO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuLyoqXG4gKiBIYW5kbGVzIHN0b3JpZXMgbm90aWZpY2F0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yaWVzIGV4dGVuZHMgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEluaXQgcGFyZW50IGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBTdG9yaWVzIHVuaXF1ZSBlbGVtZW50XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc2VsZWN0b3IgKSB7XG5cdFx0c3VwZXIoIHNlbGVjdG9yLCAnI3N0b3JpZXNfX3RyaWdnZXInICk7XG5cblx0XHR0aGlzLmNvbGxhcHNlZENsYXNzID0gJ3N0b3JpZXNfX2Ryb3Bkb3duX2NvbGxhcHNlZCc7XG5cdFx0dGhpcy50cmlnZ2VyQ29sbGFwc2VkQ2xhc3MgPSAnc3Rvcmllc19fdHJpZ2dlcl9jb2xsYXBzZWQnO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwic291cmNlUm9vdCI6IiJ9