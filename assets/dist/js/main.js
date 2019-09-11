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

var AuthorCard = function () {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Controls bio collapsed or expanded status
 */
var Bio = function () {
	/**
  * Init
  * Save elements in cache
  * @param {string} selector Bio element css unique selector
  */
	function Bio(selector) {
		var _this = this;

		_classCallCheck(this, Bio);

		this.element = window.document.querySelector(selector);
		this.trigger = window.document.querySelector(selector + ' ~ .more');

		if (this.trigger) {
			this.trigger.addEventListener('click', function () {
				return _this.toggleBio();
			});
		}
	}

	/**
  * Expand or collapse based on current status
  */


	_createClass(Bio, [{
		key: 'toggleBio',
		value: function toggleBio() {
			var element = this.element;


			if (!element) {
				return;
			}

			if (element.classList.contains('bio__collapsed')) {
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
			    trigger = this.trigger;


			if (!element) {
				return;
			}

			element.classList.add('bio__collapsed');
			element.setAttribute('aria-expanded', 'false');

			if (trigger) {
				trigger.classList.remove('more__collapsed');
			}
		}

		/**
   * Open and remove icon
   */

	}, {
		key: 'expand',
		value: function expand() {
			var element = this.element,
			    trigger = this.trigger;


			if (!element) {
				return;
			}

			element.classList.remove('bio__collapsed');
			element.setAttribute('aria-expanded', 'true');

			if (trigger) {
				trigger.classList.add('more__collapsed');
			}
		}
	}]);

	return Bio;
}();

exports.default = Bio;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQwNGNlYWQ2ZmVmNDJiMTNlYWIiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyJdLCJuYW1lcyI6WyJBdXRob3JDYXJkIiwiYmlvIiwiQmlvIiwiY29sbGFwc2UiLCJhdXRob3JDYXJkIiwiaW5pdCIsInNlbGVjdG9yIiwiZWxlbWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQmlvIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJleHBhbmQiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O3FqQkM3REE7OztBQUNBOzs7Ozs7OztJQUVNQSxVO0FBQ0wsdUJBQWM7QUFBQTs7QUFDYixPQUFLQyxHQUFMLEdBQVcsSUFBSUMsYUFBSixDQUFTLE1BQVQsQ0FBWDtBQUNBOzs7O3lCQUVNO0FBQ04sT0FBSyxLQUFLRCxHQUFWLEVBQWdCO0FBQ2YsU0FBS0EsR0FBTCxDQUFTRSxRQUFUO0FBQ0E7QUFDRDs7Ozs7O0FBR0YsSUFBTUMsYUFBYSxJQUFJSixVQUFKLEVBQW5COztBQUVBSSxXQUFXQyxJQUFYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7SUFHcUJILEc7QUFDcEI7Ozs7O0FBS0EsY0FBYUksUUFBYixFQUF3QjtBQUFBOztBQUFBOztBQUN2QixPQUFLQyxPQUFMLEdBQWVDLE9BQU9DLFFBQVAsQ0FBZ0JDLGFBQWhCLENBQStCSixRQUEvQixDQUFmO0FBQ0EsT0FBS0ssT0FBTCxHQUFlSCxPQUFPQyxRQUFQLENBQWdCQyxhQUFoQixDQUFtQ0osUUFBbkMsY0FBZjs7QUFFQSxNQUFLLEtBQUtLLE9BQVYsRUFBb0I7QUFDbkIsUUFBS0EsT0FBTCxDQUFhQyxnQkFBYixDQUErQixPQUEvQixFQUF3QztBQUFBLFdBQU0sTUFBS0MsU0FBTCxFQUFOO0FBQUEsSUFBeEM7QUFDQTtBQUNEOztBQUVEOzs7Ozs7OzhCQUdZO0FBQUEsT0FDSE4sT0FERyxHQUNTLElBRFQsQ0FDSEEsT0FERzs7O0FBR1gsT0FBSyxDQUFFQSxPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsT0FBS0EsUUFBUU8sU0FBUixDQUFrQkMsUUFBbEIsQ0FBNEIsZ0JBQTVCLENBQUwsRUFBc0Q7QUFDckQsU0FBS0MsTUFBTDtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUtiLFFBQUw7QUFDQTtBQUNEOztBQUVEOzs7Ozs7NkJBR1c7QUFBQSxPQUNGSSxPQURFLEdBQ21CLElBRG5CLENBQ0ZBLE9BREU7QUFBQSxPQUNPSSxPQURQLEdBQ21CLElBRG5CLENBQ09BLE9BRFA7OztBQUdWLE9BQUssQ0FBRUosT0FBUCxFQUFpQjtBQUNoQjtBQUNBOztBQUVEQSxXQUFRTyxTQUFSLENBQWtCRyxHQUFsQixDQUF1QixnQkFBdkI7QUFDQVYsV0FBUVcsWUFBUixDQUFzQixlQUF0QixFQUF1QyxPQUF2Qzs7QUFFQSxPQUFLUCxPQUFMLEVBQWU7QUFDZEEsWUFBUUcsU0FBUixDQUFrQkssTUFBbEIsQ0FBMEIsaUJBQTFCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzJCQUdTO0FBQUEsT0FDQVosT0FEQSxHQUNxQixJQURyQixDQUNBQSxPQURBO0FBQUEsT0FDU0ksT0FEVCxHQUNxQixJQURyQixDQUNTQSxPQURUOzs7QUFHUixPQUFLLENBQUVKLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFREEsV0FBUU8sU0FBUixDQUFrQkssTUFBbEIsQ0FBMEIsZ0JBQTFCO0FBQ0FaLFdBQVFXLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsTUFBdkM7O0FBRUEsT0FBS1AsT0FBTCxFQUFlO0FBQ2RBLFlBQVFHLFNBQVIsQ0FBa0JHLEdBQWxCLENBQXVCLGlCQUF2QjtBQUNBO0FBQ0Q7Ozs7OztrQkFsRW1CZixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZDA0Y2VhZDZmZWY0MmIxM2VhYiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgQmlvIGZyb20gJy4vY29tcG9uZW50cy9iaW8nO1xuXG5jbGFzcyBBdXRob3JDYXJkIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0aWYgKCB0aGlzLmJpbyApIHtcblx0XHRcdHRoaXMuYmlvLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGF1dGhvckNhcmQgPSBuZXcgQXV0aG9yQ2FyZCgpO1xuXG5hdXRob3JDYXJkLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCIvKipcbiAqIENvbnRyb2xzIGJpbyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbyB7XG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqIFNhdmUgZWxlbWVudHMgaW4gY2FjaGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIEJpbyBlbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYCR7IHNlbGVjdG9yIH0gfiAubW9yZWAgKTtcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlQmlvKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGVCaW8oKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2Jpb19fY29sbGFwc2VkJyApICkge1xuXHRcdFx0dGhpcy5leHBhbmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSBhbmQgYWRkIGljb25cblx0ICovXG5cdGNvbGxhcHNlKCkge1xuXHRcdGNvbnN0IHsgZWxlbWVudCwgdHJpZ2dlciB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2Jpb19fY29sbGFwc2VkJyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSggJ21vcmVfX2NvbGxhcHNlZCcgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT3BlbiBhbmQgcmVtb3ZlIGljb25cblx0ICovXG5cdGV4cGFuZCgpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQsIHRyaWdnZXIgfSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdiaW9fX2NvbGxhcHNlZCcgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCggJ21vcmVfX2NvbGxhcHNlZCcgKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==