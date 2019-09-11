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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzI5MDNjZGJiNWFiMjgyODdjZWMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jpby5qcyJdLCJuYW1lcyI6WyJiaW8iLCJCaW8iLCJjb2xsYXBzZSIsInNlbGVjdG9yIiwiZWxlbWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQmlvIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJleHBhbmQiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOzs7Ozs7QUFFRSxhQUFXO0FBQ1osS0FBTUEsTUFBTSxJQUFJQyxhQUFKLENBQVMsTUFBVCxDQUFaOztBQUVBRCxLQUFJRSxRQUFKO0FBQ0EsQ0FKQyxHQUFGLEMsQ0FIQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7O0lBR3FCRCxHO0FBQ3BCOzs7OztBQUtBLGNBQWFFLFFBQWIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDdkIsT0FBS0MsT0FBTCxHQUFlQyxPQUFPQyxRQUFQLENBQWdCQyxhQUFoQixDQUErQkosUUFBL0IsQ0FBZjtBQUNBLE9BQUtLLE9BQUwsR0FBZUgsT0FBT0MsUUFBUCxDQUFnQkMsYUFBaEIsQ0FBbUNKLFFBQW5DLGNBQWY7O0FBRUEsTUFBSyxLQUFLSyxPQUFWLEVBQW9CO0FBQ25CLFFBQUtBLE9BQUwsQ0FBYUMsZ0JBQWIsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxXQUFNLE1BQUtDLFNBQUwsRUFBTjtBQUFBLElBQXhDO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFHWTtBQUFBLE9BQ0hOLE9BREcsR0FDUyxJQURULENBQ0hBLE9BREc7OztBQUdYLE9BQUssQ0FBRUEsT0FBUCxFQUFpQjtBQUNoQjtBQUNBOztBQUVELE9BQUtBLFFBQVFPLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTRCLGdCQUE1QixDQUFMLEVBQXNEO0FBQ3JELFNBQUtDLE1BQUw7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLWCxRQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzZCQUdXO0FBQUEsT0FDRkUsT0FERSxHQUNtQixJQURuQixDQUNGQSxPQURFO0FBQUEsT0FDT0ksT0FEUCxHQUNtQixJQURuQixDQUNPQSxPQURQOzs7QUFHVixPQUFLLENBQUVKLE9BQVAsRUFBaUI7QUFDaEI7QUFDQTs7QUFFREEsV0FBUU8sU0FBUixDQUFrQkcsR0FBbEIsQ0FBdUIsZ0JBQXZCO0FBQ0FWLFdBQVFXLFlBQVIsQ0FBc0IsZUFBdEIsRUFBdUMsT0FBdkM7O0FBRUEsT0FBS1AsT0FBTCxFQUFlO0FBQ2RBLFlBQVFHLFNBQVIsQ0FBa0JLLE1BQWxCLENBQTBCLGlCQUExQjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHUztBQUFBLE9BQ0FaLE9BREEsR0FDcUIsSUFEckIsQ0FDQUEsT0FEQTtBQUFBLE9BQ1NJLE9BRFQsR0FDcUIsSUFEckIsQ0FDU0EsT0FEVDs7O0FBR1IsT0FBSyxDQUFFSixPQUFQLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRURBLFdBQVFPLFNBQVIsQ0FBa0JLLE1BQWxCLENBQTBCLGdCQUExQjtBQUNBWixXQUFRVyxZQUFSLENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDOztBQUVBLE9BQUtQLE9BQUwsRUFBZTtBQUNkQSxZQUFRRyxTQUFSLENBQWtCRyxHQUFsQixDQUF1QixpQkFBdkI7QUFDQTtBQUNEOzs7Ozs7a0JBbEVtQmIsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzI5MDNjZGJiNWFiMjgyODdjZWMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IEJpbyBmcm9tICcuL2NvbXBvbmVudHMvYmlvJztcblxuKCBmdW5jdGlvbigpIHtcblx0Y29uc3QgYmlvID0gbmV3IEJpbyggJyNiaW8nICk7XG5cblx0YmlvLmNvbGxhcHNlKCk7XG59KCkgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCIvKipcbiAqIENvbnRyb2xzIGJpbyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbyB7XG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqIFNhdmUgZWxlbWVudHMgaW4gY2FjaGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIEJpbyBlbGVtZW50IGNzcyB1bmlxdWUgc2VsZWN0b3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzZWxlY3RvciApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblx0XHR0aGlzLnRyaWdnZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYCR7IHNlbGVjdG9yIH0gfiAubW9yZWAgKTtcblxuXHRcdGlmICggdGhpcy50cmlnZ2VyICkge1xuXHRcdFx0dGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlQmlvKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kIG9yIGNvbGxhcHNlIGJhc2VkIG9uIGN1cnJlbnQgc3RhdHVzXG5cdCAqL1xuXHR0b2dnbGVCaW8oKSB7XG5cdFx0Y29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2Jpb19fY29sbGFwc2VkJyApICkge1xuXHRcdFx0dGhpcy5leHBhbmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSBhbmQgYWRkIGljb25cblx0ICovXG5cdGNvbGxhcHNlKCkge1xuXHRcdGNvbnN0IHsgZWxlbWVudCwgdHJpZ2dlciB9ID0gdGhpcztcblxuXHRcdGlmICggISBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2Jpb19fY29sbGFwc2VkJyApO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSggJ21vcmVfX2NvbGxhcHNlZCcgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT3BlbiBhbmQgcmVtb3ZlIGljb25cblx0ICovXG5cdGV4cGFuZCgpIHtcblx0XHRjb25zdCB7IGVsZW1lbnQsIHRyaWdnZXIgfSA9IHRoaXM7XG5cblx0XHRpZiAoICEgZWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdiaW9fX2NvbGxhcHNlZCcgKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblxuXHRcdGlmICggdHJpZ2dlciApIHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCggJ21vcmVfX2NvbGxhcHNlZCcgKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==