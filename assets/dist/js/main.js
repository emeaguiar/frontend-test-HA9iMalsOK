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


var _componentTooltip = __webpack_require__(/*! @10up/component-tooltip */ 1);

var _componentTooltip2 = _interopRequireDefault(_componentTooltip);

var _bio = __webpack_require__(/*! ./components/bio */ 3);

var _bio2 = _interopRequireDefault(_bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
(function () {
	// eslint-disable-next-line no-console
	console.log('A foo walks into a bar, takes a look around and says "Hello World!"');

	var tooltipSelector = '.stories';

	var stories = new _componentTooltip2.default(tooltipSelector, function () {
		// eslint-disable-next-line no-console
		console.log('tooltip init');
	});

	var bio = new _bio2.default();

	bio.init();
})();

/***/ }),
/* 1 */
/*!**************************************************************************************!*\
  !*** /home/emeaguiar/xteam-test/node_modules/@10up/component-tooltip/src/tooltip.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/**
 * @module @10up/Tooltip
 *
 * @description
 *
 * An accessible tooltip component.
 *
 * @param {string} element Element selector for the tooltip container.
 * @param {Object} options Object of optional callbacks.
 */
class Tooltip {


	/**
	 * Initialize tooltips
	 *
	 * @param {string} element Element selector for the tooltip container.
	 * @param {Object} options Object of optional callbacks.
	 */
	constructor( element, options = {} ) {

		const defaults = {
			onCreate: null,
			onOpen: null,
			onClose: null,
		};

		// Tooltip Containers
		this.$tooltips = document.querySelectorAll( element );

		if ( ! element && 0 === this.$tooltips.length ) {
			console.error( '10up Tooltip: Target not found. A valid target (tooltip container) must be used.'  ); // eslint-disable-line
			return;
		}

		document.documentElement.classList.add( 'js' );

		// Settings
		this.settings = Object.assign( {}, defaults, options );

		// Bind internal methods
		this.manageBoundTrigger = evt => this.manageTrigger( evt );
		this.boundManageTT      = evt => this.manageTT( evt );
		this.boundManageEsc     = evt => this.manageEsc( evt );

		this.$tooltips.forEach( ( ttContainer ) => {
			this.setupTooltip( ttContainer );
		} );

		this.settings = Object.assign( {}, defaults, options );

		/**
		 * Called after the tooltip is initialized on page load.
		 * @callback onCreate
		 */
		if ( this.settings.onCreate && 'function' === typeof this.settings.onCreate ) {
			this.settings.onCreate.call();
		}
	}

	/**
	 * Initialize a given tooltip area.
	 *
	 * @param   {element} $ttContainer The tooltip containing element.
	 * @returns {void}
	 */
	setupTooltip( ttContainer ) {
		const ttToggleClass        = 'a11y-tip--toggle';
		const ttTriggerClass       = 'a11y-tip__trigger';
		const ttTriggerToggleClass = 'a11y-tip__trigger--toggle';
		const ttTrigger            = `.${  ttTriggerClass}`;
		const ttTheTip             = '.a11y-tip__help';
		let newButton;
		let originalTrigger;
		let getTipId;
		const focusableElements    = [
			'a',
			'button',
			'input',
			'textarea',
			'select',
		];

		// This will be needed for any components that don't have an ID set
		const count   = 1;
		const self    = ttContainer;
		const trigger = self.querySelector( ttTrigger );
		const tip     = self.querySelector( ttTheTip );

		// If a trigger is not an inherently focusable element, it'll need a
		// tabindex. But if it can be inherently focused, then don't set a tabindex.
		if ( ! focusableElements.includes( trigger.nodeName.toLowerCase() ) ) {
			trigger.setAttribute( 'tabindex', '0' );
		}

		// If a tip doesn't have an ID, then we need to generate one.
		if ( ! tip.getAttribute( 'id' ) ) {
			tip.setAttribute( 'id', `tool_tip_${  count}` );
		}

		// If a trigger doesn't have an aria-described by, then we need
		// to point it to the tip's ID.
		if ( ! trigger.getAttribute( 'aria-describedby' ) ) {
			trigger.setAttribute( 'aria-describedby', tip.getAttribute( 'id' ) );
		}

		// If the element after a tooltip trigger does not have
		// the role of tooltip set, then set it.
		if ( ! tip.getAttribute( 'role' ) ) {
			tip.setAttribute( 'role', 'tooltip' );
		}

		// If a tip container has ttToggleClass,
		// we need to make sure the trigger is a button.
		if ( self.classList.contains( ttToggleClass ) ) {

			originalTrigger = self.querySelector( ttTrigger ).innerHTML;
			originalTrigger = originalTrigger.replace( /^\s+|\s+$/g, '' );
			getTipId        = self.querySelector( ttTheTip ).getAttribute( 'id' );
			newButton       = document.createElement( 'button' );

			newButton.setAttribute( 'type', 'button' );
			newButton.classList.add( ttTriggerClass );
			newButton.classList.add( ttTriggerToggleClass );
			newButton.setAttribute( 'aria-describedby', getTipId );
			newButton.setAttribute( 'aria-expanded', 'false' );
			newButton.textContent = originalTrigger;

			self.removeChild( self.querySelector( ttTrigger ) );
			self.insertBefore( newButton, self.firstChild );

			// Set event listener for trigger click
			newButton.addEventListener( 'click', this.manageBoundTrigger );

		} // if self contains the toggleClass

		if ( false === self.classList.contains( ttToggleClass ) ) {
			// Set Listeners for callbacks to fire
			tip.addEventListener( 'transitionend', this.boundManageTT );
		}

		// Hide the tooltip on ESC because we have empathy and sometimes
		// you just don't want a tool tip all up in your face, right?
		// if a keyboard user doesn't want/need the tooltip anymore
		// allow them to hide it by pressing the ESC key.
		// once they move focus away from the element that had the
		// the tooltip, remove the hide-tip class so that the
		// tip can be accessed again on re-focus.
		trigger.addEventListener( 'keyup', this.boundManageEsc );
	}

	/**
	 * Listens for `transitionend`.
	 *
	 * @listens transitionend
	 * @param   {Object} e - The transitionend event object.
	 */
	manageTT( e ) {
		const {target} = e;

		if ( ! e.pseudoElement ) {

			if ( target.classList.contains( 'a11y-tip--hide' ) ) {
				target.classList.remove( 'a11y-tip--hide' );
			}

			if ( '0' === window.getComputedStyle( e.target ).opacity ) {

				/**
				 * Called when a tooltip is closed.
				 * @callback onClose
				 */
				if ( this.settings.onClose && 'function' === typeof this.settings.onClose ) {
					this.settings.onClose.call();
				}
			} else {

				/**
				 * Called when a tooltip is opened.
				 * @callback onOpen
				 */
				if ( this.settings.onOpen && 'function' === typeof this.settings.onOpen ) {
					this.settings.onOpen.call();
				}
			}
		}
	}

	/**
	 * Allows user to 'esc' out of a tooltip with keyup.
	 *
	 * @listens keyup
	 * @param   {Object} e The keyup event object.
	 */
	manageEsc( e ) {
		const {target} = e;

		if ( 27 == e.keyCode ) {
			e.preventDefault();
			target.classList.add( 'a11y-tip--hide' );

			/**
			 * Called when a tooltip is closed.
			 * @callback onClose
			 */
			if ( this.settings.onClose && 'function' === typeof this.settings.onClose ) {
				this.settings.onClose.call();
			}

			return false;
		}
	}

	/**
	 * Modifies ARIA based on click event.
	 *
	 * @listens click
	 * @param  {Object} e The click event object.
	 */
	manageTrigger( e ) {
		const triggerEl = e.target;

		if ( 'true' === triggerEl.getAttribute( 'aria-expanded' ) ) {
			triggerEl.setAttribute( 'aria-expanded', 'false' );

			/**
			 * Called when a tooltip is closed.
			 * @callback onClose
			 */
			if ( this.settings.onClose && 'function' === typeof this.settings.onClose ) {
				this.settings.onClose.call();
			}
		} else if ( 'false' === triggerEl.getAttribute( 'aria-expanded' ) ) {
			triggerEl.setAttribute( 'aria-expanded', 'true' );

			/**
			 * Called when a tooltip is opened.
			 * @callback onOpen
			 */
			if ( this.settings.onOpen && 'function' === typeof this.settings.onOpen ) {
				this.settings.onOpen.call();
			}
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Tooltip;




/***/ }),
/* 2 */,
/* 3 */
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

var Bio = function () {
	function Bio() {
		_classCallCheck(this, Bio);
	}

	_createClass(Bio, [{
		key: 'init',
		value: function init() {
			// eslint-disable-next-line no-console
			console.log('test');
		}
	}]);

	return Bio;
}();

exports.default = Bio;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VmMjdjMzliODc5ZTRkYTdjODgiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZW1lYWd1aWFyL3h0ZWFtLXRlc3Qvbm9kZV9tb2R1bGVzL0AxMHVwL2NvbXBvbmVudC10b29sdGlwL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmlvLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ0b29sdGlwU2VsZWN0b3IiLCJzdG9yaWVzIiwidG9vbHRpcCIsImJpbyIsIkJpbyIsImluaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUUsYUFBVztBQUNaO0FBQ0FBLFNBQVFDLEdBQVIsQ0FBYSxxRUFBYjs7QUFFQSxLQUFNQyxrQkFBa0IsVUFBeEI7O0FBRUEsS0FBTUMsVUFBVSxJQUFJQywwQkFBSixDQUFhRixlQUFiLEVBQThCLFlBQU07QUFDbkQ7QUFDQUYsVUFBUUMsR0FBUixDQUFhLGNBQWI7QUFDQSxFQUhlLENBQWhCOztBQUtBLEtBQU1JLE1BQU0sSUFBSUMsYUFBSixFQUFaOztBQUVBRCxLQUFJRSxJQUFKO0FBQ0EsQ0FkQyxHQUFGLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ2U7OztBQUdmO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdHQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTLE9BQU87O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFNBQVMsT0FBTzs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RQb0JELEc7Ozs7Ozs7eUJBQ2I7QUFDTjtBQUNBTixXQUFRQyxHQUFSLENBQWEsTUFBYjtBQUNBOzs7Ozs7a0JBSm1CSyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZWYyN2MzOWI4NzllNGRhN2M4OCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgdG9vbHRpcCBmcm9tICdAMTB1cC9jb21wb25lbnQtdG9vbHRpcCc7XG5pbXBvcnQgQmlvIGZyb20gJy4vY29tcG9uZW50cy9iaW8nO1xuXG4oIGZ1bmN0aW9uKCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRjb25zb2xlLmxvZyggJ0EgZm9vIHdhbGtzIGludG8gYSBiYXIsIHRha2VzIGEgbG9vayBhcm91bmQgYW5kIHNheXMgXCJIZWxsbyBXb3JsZCFcIicgKTtcblxuXHRjb25zdCB0b29sdGlwU2VsZWN0b3IgPSAnLnN0b3JpZXMnO1xuXG5cdGNvbnN0IHN0b3JpZXMgPSBuZXcgdG9vbHRpcCggdG9vbHRpcFNlbGVjdG9yLCAoKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyggJ3Rvb2x0aXAgaW5pdCcgKTtcblx0fSApO1xuXG5cdGNvbnN0IGJpbyA9IG5ldyBCaW8oKTtcblxuXHRiaW8uaW5pdCgpO1xufSgpICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBtb2R1bGUgQDEwdXAvVG9vbHRpcFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEFuIGFjY2Vzc2libGUgdG9vbHRpcCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnQgRWxlbWVudCBzZWxlY3RvciBmb3IgdGhlIHRvb2x0aXAgY29udGFpbmVyLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT2JqZWN0IG9mIG9wdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCB7XG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0b29sdGlwc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudCBFbGVtZW50IHNlbGVjdG9yIGZvciB0aGUgdG9vbHRpcCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCBvZiBvcHRpb25hbCBjYWxsYmFja3MuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZWxlbWVudCwgb3B0aW9ucyA9IHt9ICkge1xuXG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRvbkNyZWF0ZTogbnVsbCxcblx0XHRcdG9uT3BlbjogbnVsbCxcblx0XHRcdG9uQ2xvc2U6IG51bGwsXG5cdFx0fTtcblxuXHRcdC8vIFRvb2x0aXAgQ29udGFpbmVyc1xuXHRcdHRoaXMuJHRvb2x0aXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgJiYgMCA9PT0gdGhpcy4kdG9vbHRpcHMubGVuZ3RoICkge1xuXHRcdFx0Y29uc29sZS5lcnJvciggJzEwdXAgVG9vbHRpcDogVGFyZ2V0IG5vdCBmb3VuZC4gQSB2YWxpZCB0YXJnZXQgKHRvb2x0aXAgY29udGFpbmVyKSBtdXN0IGJlIHVzZWQuJyAgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnanMnICk7XG5cblx0XHQvLyBTZXR0aW5nc1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuXHRcdC8vIEJpbmQgaW50ZXJuYWwgbWV0aG9kc1xuXHRcdHRoaXMubWFuYWdlQm91bmRUcmlnZ2VyID0gZXZ0ID0+IHRoaXMubWFuYWdlVHJpZ2dlciggZXZ0ICk7XG5cdFx0dGhpcy5ib3VuZE1hbmFnZVRUICAgICAgPSBldnQgPT4gdGhpcy5tYW5hZ2VUVCggZXZ0ICk7XG5cdFx0dGhpcy5ib3VuZE1hbmFnZUVzYyAgICAgPSBldnQgPT4gdGhpcy5tYW5hZ2VFc2MoIGV2dCApO1xuXG5cdFx0dGhpcy4kdG9vbHRpcHMuZm9yRWFjaCggKCB0dENvbnRhaW5lciApID0+IHtcblx0XHRcdHRoaXMuc2V0dXBUb29sdGlwKCB0dENvbnRhaW5lciApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuXHRcdC8qKlxuXHRcdCAqIENhbGxlZCBhZnRlciB0aGUgdG9vbHRpcCBpcyBpbml0aWFsaXplZCBvbiBwYWdlIGxvYWQuXG5cdFx0ICogQGNhbGxiYWNrIG9uQ3JlYXRlXG5cdFx0ICovXG5cdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ3JlYXRlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLnNldHRpbmdzLm9uQ3JlYXRlICkge1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNyZWF0ZS5jYWxsKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgYSBnaXZlbiB0b29sdGlwIGFyZWEuXG5cdCAqXG5cdCAqIEBwYXJhbSAgIHtlbGVtZW50fSAkdHRDb250YWluZXIgVGhlIHRvb2x0aXAgY29udGFpbmluZyBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHNldHVwVG9vbHRpcCggdHRDb250YWluZXIgKSB7XG5cdFx0Y29uc3QgdHRUb2dnbGVDbGFzcyAgICAgICAgPSAnYTExeS10aXAtLXRvZ2dsZSc7XG5cdFx0Y29uc3QgdHRUcmlnZ2VyQ2xhc3MgICAgICAgPSAnYTExeS10aXBfX3RyaWdnZXInO1xuXHRcdGNvbnN0IHR0VHJpZ2dlclRvZ2dsZUNsYXNzID0gJ2ExMXktdGlwX190cmlnZ2VyLS10b2dnbGUnO1xuXHRcdGNvbnN0IHR0VHJpZ2dlciAgICAgICAgICAgID0gYC4keyAgdHRUcmlnZ2VyQ2xhc3N9YDtcblx0XHRjb25zdCB0dFRoZVRpcCAgICAgICAgICAgICA9ICcuYTExeS10aXBfX2hlbHAnO1xuXHRcdGxldCBuZXdCdXR0b247XG5cdFx0bGV0IG9yaWdpbmFsVHJpZ2dlcjtcblx0XHRsZXQgZ2V0VGlwSWQ7XG5cdFx0Y29uc3QgZm9jdXNhYmxlRWxlbWVudHMgICAgPSBbXG5cdFx0XHQnYScsXG5cdFx0XHQnYnV0dG9uJyxcblx0XHRcdCdpbnB1dCcsXG5cdFx0XHQndGV4dGFyZWEnLFxuXHRcdFx0J3NlbGVjdCcsXG5cdFx0XTtcblxuXHRcdC8vIFRoaXMgd2lsbCBiZSBuZWVkZWQgZm9yIGFueSBjb21wb25lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhbiBJRCBzZXRcblx0XHRjb25zdCBjb3VudCAgID0gMTtcblx0XHRjb25zdCBzZWxmICAgID0gdHRDb250YWluZXI7XG5cdFx0Y29uc3QgdHJpZ2dlciA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUcmlnZ2VyICk7XG5cdFx0Y29uc3QgdGlwICAgICA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUaGVUaXAgKTtcblxuXHRcdC8vIElmIGEgdHJpZ2dlciBpcyBub3QgYW4gaW5oZXJlbnRseSBmb2N1c2FibGUgZWxlbWVudCwgaXQnbGwgbmVlZCBhXG5cdFx0Ly8gdGFiaW5kZXguIEJ1dCBpZiBpdCBjYW4gYmUgaW5oZXJlbnRseSBmb2N1c2VkLCB0aGVuIGRvbid0IHNldCBhIHRhYmluZGV4LlxuXHRcdGlmICggISBmb2N1c2FibGVFbGVtZW50cy5pbmNsdWRlcyggdHJpZ2dlci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkgKSB7XG5cdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZSggJ3RhYmluZGV4JywgJzAnICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSB0aXAgZG9lc24ndCBoYXZlIGFuIElELCB0aGVuIHdlIG5lZWQgdG8gZ2VuZXJhdGUgb25lLlxuXHRcdGlmICggISB0aXAuZ2V0QXR0cmlidXRlKCAnaWQnICkgKSB7XG5cdFx0XHR0aXAuc2V0QXR0cmlidXRlKCAnaWQnLCBgdG9vbF90aXBfJHsgIGNvdW50fWAgKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIHRyaWdnZXIgZG9lc24ndCBoYXZlIGFuIGFyaWEtZGVzY3JpYmVkIGJ5LCB0aGVuIHdlIG5lZWRcblx0XHQvLyB0byBwb2ludCBpdCB0byB0aGUgdGlwJ3MgSUQuXG5cdFx0aWYgKCAhIHRyaWdnZXIuZ2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScgKSApIHtcblx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoICdpZCcgKSApO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBlbGVtZW50IGFmdGVyIGEgdG9vbHRpcCB0cmlnZ2VyIGRvZXMgbm90IGhhdmVcblx0XHQvLyB0aGUgcm9sZSBvZiB0b29sdGlwIHNldCwgdGhlbiBzZXQgaXQuXG5cdFx0aWYgKCAhIHRpcC5nZXRBdHRyaWJ1dGUoICdyb2xlJyApICkge1xuXHRcdFx0dGlwLnNldEF0dHJpYnV0ZSggJ3JvbGUnLCAndG9vbHRpcCcgKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIHRpcCBjb250YWluZXIgaGFzIHR0VG9nZ2xlQ2xhc3MsXG5cdFx0Ly8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIHRyaWdnZXIgaXMgYSBidXR0b24uXG5cdFx0aWYgKCBzZWxmLmNsYXNzTGlzdC5jb250YWlucyggdHRUb2dnbGVDbGFzcyApICkge1xuXG5cdFx0XHRvcmlnaW5hbFRyaWdnZXIgPSBzZWxmLnF1ZXJ5U2VsZWN0b3IoIHR0VHJpZ2dlciApLmlubmVySFRNTDtcblx0XHRcdG9yaWdpbmFsVHJpZ2dlciA9IG9yaWdpbmFsVHJpZ2dlci5yZXBsYWNlKCAvXlxccyt8XFxzKyQvZywgJycgKTtcblx0XHRcdGdldFRpcElkICAgICAgICA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUaGVUaXAgKS5nZXRBdHRyaWJ1dGUoICdpZCcgKTtcblx0XHRcdG5ld0J1dHRvbiAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XG5cblx0XHRcdG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2J1dHRvbicgKTtcblx0XHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCB0dFRyaWdnZXJDbGFzcyApO1xuXHRcdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoIHR0VHJpZ2dlclRvZ2dsZUNsYXNzICk7XG5cdFx0XHRuZXdCdXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScsIGdldFRpcElkICk7XG5cdFx0XHRuZXdCdXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblx0XHRcdG5ld0J1dHRvbi50ZXh0Q29udGVudCA9IG9yaWdpbmFsVHJpZ2dlcjtcblxuXHRcdFx0c2VsZi5yZW1vdmVDaGlsZCggc2VsZi5xdWVyeVNlbGVjdG9yKCB0dFRyaWdnZXIgKSApO1xuXHRcdFx0c2VsZi5pbnNlcnRCZWZvcmUoIG5ld0J1dHRvbiwgc2VsZi5maXJzdENoaWxkICk7XG5cblx0XHRcdC8vIFNldCBldmVudCBsaXN0ZW5lciBmb3IgdHJpZ2dlciBjbGlja1xuXHRcdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMubWFuYWdlQm91bmRUcmlnZ2VyICk7XG5cblx0XHR9IC8vIGlmIHNlbGYgY29udGFpbnMgdGhlIHRvZ2dsZUNsYXNzXG5cblx0XHRpZiAoIGZhbHNlID09PSBzZWxmLmNsYXNzTGlzdC5jb250YWlucyggdHRUb2dnbGVDbGFzcyApICkge1xuXHRcdFx0Ly8gU2V0IExpc3RlbmVycyBmb3IgY2FsbGJhY2tzIHRvIGZpcmVcblx0XHRcdHRpcC5hZGRFdmVudExpc3RlbmVyKCAndHJhbnNpdGlvbmVuZCcsIHRoaXMuYm91bmRNYW5hZ2VUVCApO1xuXHRcdH1cblxuXHRcdC8vIEhpZGUgdGhlIHRvb2x0aXAgb24gRVNDIGJlY2F1c2Ugd2UgaGF2ZSBlbXBhdGh5IGFuZCBzb21ldGltZXNcblx0XHQvLyB5b3UganVzdCBkb24ndCB3YW50IGEgdG9vbCB0aXAgYWxsIHVwIGluIHlvdXIgZmFjZSwgcmlnaHQ/XG5cdFx0Ly8gaWYgYSBrZXlib2FyZCB1c2VyIGRvZXNuJ3Qgd2FudC9uZWVkIHRoZSB0b29sdGlwIGFueW1vcmVcblx0XHQvLyBhbGxvdyB0aGVtIHRvIGhpZGUgaXQgYnkgcHJlc3NpbmcgdGhlIEVTQyBrZXkuXG5cdFx0Ly8gb25jZSB0aGV5IG1vdmUgZm9jdXMgYXdheSBmcm9tIHRoZSBlbGVtZW50IHRoYXQgaGFkIHRoZVxuXHRcdC8vIHRoZSB0b29sdGlwLCByZW1vdmUgdGhlIGhpZGUtdGlwIGNsYXNzIHNvIHRoYXQgdGhlXG5cdFx0Ly8gdGlwIGNhbiBiZSBhY2Nlc3NlZCBhZ2FpbiBvbiByZS1mb2N1cy5cblx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIHRoaXMuYm91bmRNYW5hZ2VFc2MgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0ZW5zIGZvciBgdHJhbnNpdGlvbmVuZGAuXG5cdCAqXG5cdCAqIEBsaXN0ZW5zIHRyYW5zaXRpb25lbmRcblx0ICogQHBhcmFtICAge09iamVjdH0gZSAtIFRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50IG9iamVjdC5cblx0ICovXG5cdG1hbmFnZVRUKCBlICkge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gZTtcblxuXHRcdGlmICggISBlLnBzZXVkb0VsZW1lbnQgKSB7XG5cblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2ExMXktdGlwLS1oaWRlJyApICkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2ExMXktdGlwLS1oaWRlJyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICcwJyA9PT0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGUudGFyZ2V0ICkub3BhY2l0eSApIHtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIGNsb3NlZC5cblx0XHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdFx0ICovXG5cdFx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5vbkNsb3NlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIG9wZW5lZC5cblx0XHRcdFx0ICogQGNhbGxiYWNrIG9uT3BlblxuXHRcdFx0XHQgKi9cblx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uT3BlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5zZXR0aW5ncy5vbk9wZW4gKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbk9wZW4uY2FsbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFsbG93cyB1c2VyIHRvICdlc2MnIG91dCBvZiBhIHRvb2x0aXAgd2l0aCBrZXl1cC5cblx0ICpcblx0ICogQGxpc3RlbnMga2V5dXBcblx0ICogQHBhcmFtICAge09iamVjdH0gZSBUaGUga2V5dXAgZXZlbnQgb2JqZWN0LlxuXHQgKi9cblx0bWFuYWdlRXNjKCBlICkge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gZTtcblxuXHRcdGlmICggMjcgPT0gZS5rZXlDb2RlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhMTF5LXRpcC0taGlkZScgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgd2hlbiBhIHRvb2x0aXAgaXMgY2xvc2VkLlxuXHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuc2V0dGluZ3Mub25DbG9zZSApIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNb2RpZmllcyBBUklBIGJhc2VkIG9uIGNsaWNrIGV2ZW50LlxuXHQgKlxuXHQgKiBAbGlzdGVucyBjbGlja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IGUgVGhlIGNsaWNrIGV2ZW50IG9iamVjdC5cblx0ICovXG5cdG1hbmFnZVRyaWdnZXIoIGUgKSB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsID0gZS50YXJnZXQ7XG5cblx0XHRpZiAoICd0cnVlJyA9PT0gdHJpZ2dlckVsLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgKSB7XG5cdFx0XHR0cmlnZ2VyRWwuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgd2hlbiBhIHRvb2x0aXAgaXMgY2xvc2VkLlxuXHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuc2V0dGluZ3Mub25DbG9zZSApIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAnZmFsc2UnID09PSB0cmlnZ2VyRWwuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcgKSApIHtcblx0XHRcdHRyaWdnZXJFbC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIG9wZW5lZC5cblx0XHRcdCAqIEBjYWxsYmFjayBvbk9wZW5cblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uT3BlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5zZXR0aW5ncy5vbk9wZW4gKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3Mub25PcGVuLmNhbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUvZW1lYWd1aWFyL3h0ZWFtLXRlc3Qvbm9kZV9tb2R1bGVzL0AxMHVwL2NvbXBvbmVudC10b29sdGlwL3NyYy90b29sdGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbyB7XG5cdGluaXQoKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyggJ3Rlc3QnICk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmlvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==