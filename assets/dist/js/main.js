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


var _bio = __webpack_require__(/*! ./components/bio */ 2);

var _bio2 = _interopRequireDefault(_bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	// eslint-disable-next-line no-console
	console.log('A foo walks into a bar, takes a look around and says "Hello World!"');

	var bio = new _bio2.default('#bio');

	bio.collapse();
})(); /* eslint-disable no-unused-vars */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk2YzA1MjY2MTA3ZjM0ZDgwYzUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYmlvIiwiQmlvIiwiY29sbGFwc2UiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUJpbyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZXhwYW5kIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTs7Ozs7O0FBRUUsYUFBVztBQUNaO0FBQ0FBLFNBQVFDLEdBQVIsQ0FBYSxxRUFBYjs7QUFFQSxLQUFNQyxNQUFNLElBQUlDLGFBQUosQ0FBUyxNQUFULENBQVo7O0FBRUFELEtBQUlFLFFBQUo7QUFDQSxDQVBDLEdBQUYsQyxDQUhBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7SUFHcUJELEc7QUFDcEI7Ozs7O0FBS0EsY0FBYUUsUUFBYixFQUF3QjtBQUFBOztBQUFBOztBQUN2QixPQUFLQyxPQUFMLEdBQWVDLE9BQU9DLFFBQVAsQ0FBZ0JDLGFBQWhCLENBQStCSixRQUEvQixDQUFmO0FBQ0EsT0FBS0ssT0FBTCxHQUFlSCxPQUFPQyxRQUFQLENBQWdCQyxhQUFoQixDQUFtQ0osUUFBbkMsY0FBZjs7QUFFQSxNQUFLLEtBQUtLLE9BQVYsRUFBb0I7QUFDbkIsUUFBS0EsT0FBTCxDQUFhQyxnQkFBYixDQUErQixPQUEvQixFQUF3QztBQUFBLFdBQU0sTUFBS0MsU0FBTCxFQUFOO0FBQUEsSUFBeEM7QUFDQTtBQUNEOztBQUVEOzs7Ozs7OzhCQUdZO0FBQUEsT0FDSE4sT0FERyxHQUNTLElBRFQsQ0FDSEEsT0FERzs7O0FBR1gsT0FBSyxDQUFFQSxPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsT0FBS0EsUUFBUU8sU0FBUixDQUFrQkMsUUFBbEIsQ0FBNEIsZ0JBQTVCLENBQUwsRUFBc0Q7QUFDckQsU0FBS0MsTUFBTDtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUtYLFFBQUw7QUFDQTtBQUNEOztBQUVEOzs7Ozs7NkJBR1c7QUFBQSxPQUNGRSxPQURFLEdBQ21CLElBRG5CLENBQ0ZBLE9BREU7QUFBQSxPQUNPSSxPQURQLEdBQ21CLElBRG5CLENBQ09BLE9BRFA7OztBQUdWLE9BQUssQ0FBRUosT0FBUCxFQUFpQjtBQUNoQjtBQUNBOztBQUVEQSxXQUFRTyxTQUFSLENBQWtCRyxHQUFsQixDQUF1QixnQkFBdkI7QUFDQVYsV0FBUVcsWUFBUixDQUFzQixlQUF0QixFQUF1QyxPQUF2Qzs7QUFFQSxPQUFLUCxPQUFMLEVBQWU7QUFDZEEsWUFBUUcsU0FBUixDQUFrQkssTUFBbEIsQ0FBMEIsaUJBQTFCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzJCQUdTO0FBQUEsT0FDQVosT0FEQSxHQUNxQixJQURyQixDQUNBQSxPQURBO0FBQUEsT0FDU0ksT0FEVCxHQUNxQixJQURyQixDQUNTQSxPQURUOzs7QUFHUixPQUFLLENBQUVKLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFREEsV0FBUU8sU0FBUixDQUFrQkssTUFBbEIsQ0FBMEIsZ0JBQTFCO0FBQ0FaLFdBQVFXLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsTUFBdkM7O0FBRUEsT0FBS1AsT0FBTCxFQUFlO0FBQ2RBLFlBQVFHLFNBQVIsQ0FBa0JHLEdBQWxCLENBQXVCLGlCQUF2QjtBQUNBO0FBQ0Q7Ozs7OztrQkFsRW1CYixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OTZjMDUyNjYxMDdmMzRkODBjNSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgQmlvIGZyb20gJy4vY29tcG9uZW50cy9iaW8nO1xuXG4oIGZ1bmN0aW9uKCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRjb25zb2xlLmxvZyggJ0EgZm9vIHdhbGtzIGludG8gYSBiYXIsIHRha2VzIGEgbG9vayBhcm91bmQgYW5kIHNheXMgXCJIZWxsbyBXb3JsZCFcIicgKTtcblxuXHRjb25zdCBiaW8gPSBuZXcgQmlvKCAnI2JpbycgKTtcblxuXHRiaW8uY29sbGFwc2UoKTtcbn0oKSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsIi8qKlxuICogQ29udHJvbHMgYmlvIGNvbGxhcHNlZCBvciBleHBhbmRlZCBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlvIHtcblx0LyoqXG5cdCAqIEluaXRcblx0ICogU2F2ZSBlbGVtZW50cyBpbiBjYWNoZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgQmlvIGVsZW1lbnQgY3NzIHVuaXF1ZSBzZWxlY3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHNlbGVjdG9yICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuXHRcdHRoaXMudHJpZ2dlciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBgJHsgc2VsZWN0b3IgfSB+IC5tb3JlYCApO1xuXG5cdFx0aWYgKCB0aGlzLnRyaWdnZXIgKSB7XG5cdFx0XHR0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVCaW8oKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBhbmQgb3IgY29sbGFwc2UgYmFzZWQgb24gY3VycmVudCBzdGF0dXNcblx0ICovXG5cdHRvZ2dsZUJpbygpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnYmlvX19jb2xsYXBzZWQnICkgKSB7XG5cdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGFuZCBhZGQgaWNvblxuXHQgKi9cblx0Y29sbGFwc2UoKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50LCB0cmlnZ2VyIH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYmlvX19jb2xsYXBzZWQnICk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXG5cdFx0aWYgKCB0cmlnZ2VyICkge1xuXHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCAnbW9yZV9fY29sbGFwc2VkJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIGFuZCByZW1vdmUgaWNvblxuXHQgKi9cblx0ZXhwYW5kKCkge1xuXHRcdGNvbnN0IHsgZWxlbWVudCwgdHJpZ2dlciB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2Jpb19fY29sbGFwc2VkJyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xuXG5cdFx0aWYgKCB0cmlnZ2VyICkge1xuXHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QuYWRkKCAnbW9yZV9fY29sbGFwc2VkJyApO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9iaW8uanMiXSwic291cmNlUm9vdCI6IiJ9