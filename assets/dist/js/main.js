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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	// eslint-disable-next-line no-console
	console.log('A foo walks into a bar, takes a look around and says "Hello World!"');

	var tooltipSelector = '.stories';

	var stories = new _componentTooltip2.default(tooltipSelector, function () {
		// eslint-disable-next-line no-console
		console.log('tooltip init');
	});
})(); /* eslint-disable no-unused-vars */

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




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTIwYjI5MmM3ZmE2ZGU1ZjRlNGQiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZW1lYWd1aWFyL3h0ZWFtLXRlc3Qvbm9kZV9tb2R1bGVzL0AxMHVwL2NvbXBvbmVudC10b29sdGlwL3NyYy90b29sdGlwLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ0b29sdGlwU2VsZWN0b3IiLCJzdG9yaWVzIiwidG9vbHRpcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1REE7Ozs7OztBQUVFLGFBQVc7QUFDWjtBQUNBQSxTQUFRQyxHQUFSLENBQWEscUVBQWI7O0FBRUEsS0FBTUMsa0JBQWtCLFVBQXhCOztBQUVBLEtBQU1DLFVBQVUsSUFBSUMsMEJBQUosQ0FBYUYsZUFBYixFQUE4QixZQUFNO0FBQ25EO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBYSxjQUFiO0FBQ0EsRUFIZSxDQUFoQjtBQUlBLENBVkMsR0FBRixDLENBSEEsbUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ2U7OztBQUdmO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdHQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTLE9BQU87O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFNBQVMsT0FBTzs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTIwYjI5MmM3ZmE2ZGU1ZjRlNGQiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHRvb2x0aXAgZnJvbSAnQDEwdXAvY29tcG9uZW50LXRvb2x0aXAnO1xuXG4oIGZ1bmN0aW9uKCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRjb25zb2xlLmxvZyggJ0EgZm9vIHdhbGtzIGludG8gYSBiYXIsIHRha2VzIGEgbG9vayBhcm91bmQgYW5kIHNheXMgXCJIZWxsbyBXb3JsZCFcIicgKTtcblxuXHRjb25zdCB0b29sdGlwU2VsZWN0b3IgPSAnLnN0b3JpZXMnO1xuXG5cdGNvbnN0IHN0b3JpZXMgPSBuZXcgdG9vbHRpcCggdG9vbHRpcFNlbGVjdG9yLCAoKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyggJ3Rvb2x0aXAgaW5pdCcgKTtcblx0fSApO1xufSgpICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBtb2R1bGUgQDEwdXAvVG9vbHRpcFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEFuIGFjY2Vzc2libGUgdG9vbHRpcCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnQgRWxlbWVudCBzZWxlY3RvciBmb3IgdGhlIHRvb2x0aXAgY29udGFpbmVyLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT2JqZWN0IG9mIG9wdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCB7XG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0b29sdGlwc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudCBFbGVtZW50IHNlbGVjdG9yIGZvciB0aGUgdG9vbHRpcCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCBvZiBvcHRpb25hbCBjYWxsYmFja3MuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZWxlbWVudCwgb3B0aW9ucyA9IHt9ICkge1xuXG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRvbkNyZWF0ZTogbnVsbCxcblx0XHRcdG9uT3BlbjogbnVsbCxcblx0XHRcdG9uQ2xvc2U6IG51bGwsXG5cdFx0fTtcblxuXHRcdC8vIFRvb2x0aXAgQ29udGFpbmVyc1xuXHRcdHRoaXMuJHRvb2x0aXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIGVsZW1lbnQgJiYgMCA9PT0gdGhpcy4kdG9vbHRpcHMubGVuZ3RoICkge1xuXHRcdFx0Y29uc29sZS5lcnJvciggJzEwdXAgVG9vbHRpcDogVGFyZ2V0IG5vdCBmb3VuZC4gQSB2YWxpZCB0YXJnZXQgKHRvb2x0aXAgY29udGFpbmVyKSBtdXN0IGJlIHVzZWQuJyAgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnanMnICk7XG5cblx0XHQvLyBTZXR0aW5nc1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuXHRcdC8vIEJpbmQgaW50ZXJuYWwgbWV0aG9kc1xuXHRcdHRoaXMubWFuYWdlQm91bmRUcmlnZ2VyID0gZXZ0ID0+IHRoaXMubWFuYWdlVHJpZ2dlciggZXZ0ICk7XG5cdFx0dGhpcy5ib3VuZE1hbmFnZVRUICAgICAgPSBldnQgPT4gdGhpcy5tYW5hZ2VUVCggZXZ0ICk7XG5cdFx0dGhpcy5ib3VuZE1hbmFnZUVzYyAgICAgPSBldnQgPT4gdGhpcy5tYW5hZ2VFc2MoIGV2dCApO1xuXG5cdFx0dGhpcy4kdG9vbHRpcHMuZm9yRWFjaCggKCB0dENvbnRhaW5lciApID0+IHtcblx0XHRcdHRoaXMuc2V0dXBUb29sdGlwKCB0dENvbnRhaW5lciApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuXHRcdC8qKlxuXHRcdCAqIENhbGxlZCBhZnRlciB0aGUgdG9vbHRpcCBpcyBpbml0aWFsaXplZCBvbiBwYWdlIGxvYWQuXG5cdFx0ICogQGNhbGxiYWNrIG9uQ3JlYXRlXG5cdFx0ICovXG5cdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ3JlYXRlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLnNldHRpbmdzLm9uQ3JlYXRlICkge1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNyZWF0ZS5jYWxsKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgYSBnaXZlbiB0b29sdGlwIGFyZWEuXG5cdCAqXG5cdCAqIEBwYXJhbSAgIHtlbGVtZW50fSAkdHRDb250YWluZXIgVGhlIHRvb2x0aXAgY29udGFpbmluZyBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHNldHVwVG9vbHRpcCggdHRDb250YWluZXIgKSB7XG5cdFx0Y29uc3QgdHRUb2dnbGVDbGFzcyAgICAgICAgPSAnYTExeS10aXAtLXRvZ2dsZSc7XG5cdFx0Y29uc3QgdHRUcmlnZ2VyQ2xhc3MgICAgICAgPSAnYTExeS10aXBfX3RyaWdnZXInO1xuXHRcdGNvbnN0IHR0VHJpZ2dlclRvZ2dsZUNsYXNzID0gJ2ExMXktdGlwX190cmlnZ2VyLS10b2dnbGUnO1xuXHRcdGNvbnN0IHR0VHJpZ2dlciAgICAgICAgICAgID0gYC4keyAgdHRUcmlnZ2VyQ2xhc3N9YDtcblx0XHRjb25zdCB0dFRoZVRpcCAgICAgICAgICAgICA9ICcuYTExeS10aXBfX2hlbHAnO1xuXHRcdGxldCBuZXdCdXR0b247XG5cdFx0bGV0IG9yaWdpbmFsVHJpZ2dlcjtcblx0XHRsZXQgZ2V0VGlwSWQ7XG5cdFx0Y29uc3QgZm9jdXNhYmxlRWxlbWVudHMgICAgPSBbXG5cdFx0XHQnYScsXG5cdFx0XHQnYnV0dG9uJyxcblx0XHRcdCdpbnB1dCcsXG5cdFx0XHQndGV4dGFyZWEnLFxuXHRcdFx0J3NlbGVjdCcsXG5cdFx0XTtcblxuXHRcdC8vIFRoaXMgd2lsbCBiZSBuZWVkZWQgZm9yIGFueSBjb21wb25lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhbiBJRCBzZXRcblx0XHRjb25zdCBjb3VudCAgID0gMTtcblx0XHRjb25zdCBzZWxmICAgID0gdHRDb250YWluZXI7XG5cdFx0Y29uc3QgdHJpZ2dlciA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUcmlnZ2VyICk7XG5cdFx0Y29uc3QgdGlwICAgICA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUaGVUaXAgKTtcblxuXHRcdC8vIElmIGEgdHJpZ2dlciBpcyBub3QgYW4gaW5oZXJlbnRseSBmb2N1c2FibGUgZWxlbWVudCwgaXQnbGwgbmVlZCBhXG5cdFx0Ly8gdGFiaW5kZXguIEJ1dCBpZiBpdCBjYW4gYmUgaW5oZXJlbnRseSBmb2N1c2VkLCB0aGVuIGRvbid0IHNldCBhIHRhYmluZGV4LlxuXHRcdGlmICggISBmb2N1c2FibGVFbGVtZW50cy5pbmNsdWRlcyggdHJpZ2dlci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkgKSB7XG5cdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZSggJ3RhYmluZGV4JywgJzAnICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSB0aXAgZG9lc24ndCBoYXZlIGFuIElELCB0aGVuIHdlIG5lZWQgdG8gZ2VuZXJhdGUgb25lLlxuXHRcdGlmICggISB0aXAuZ2V0QXR0cmlidXRlKCAnaWQnICkgKSB7XG5cdFx0XHR0aXAuc2V0QXR0cmlidXRlKCAnaWQnLCBgdG9vbF90aXBfJHsgIGNvdW50fWAgKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIHRyaWdnZXIgZG9lc24ndCBoYXZlIGFuIGFyaWEtZGVzY3JpYmVkIGJ5LCB0aGVuIHdlIG5lZWRcblx0XHQvLyB0byBwb2ludCBpdCB0byB0aGUgdGlwJ3MgSUQuXG5cdFx0aWYgKCAhIHRyaWdnZXIuZ2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScgKSApIHtcblx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoICdpZCcgKSApO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBlbGVtZW50IGFmdGVyIGEgdG9vbHRpcCB0cmlnZ2VyIGRvZXMgbm90IGhhdmVcblx0XHQvLyB0aGUgcm9sZSBvZiB0b29sdGlwIHNldCwgdGhlbiBzZXQgaXQuXG5cdFx0aWYgKCAhIHRpcC5nZXRBdHRyaWJ1dGUoICdyb2xlJyApICkge1xuXHRcdFx0dGlwLnNldEF0dHJpYnV0ZSggJ3JvbGUnLCAndG9vbHRpcCcgKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIHRpcCBjb250YWluZXIgaGFzIHR0VG9nZ2xlQ2xhc3MsXG5cdFx0Ly8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIHRyaWdnZXIgaXMgYSBidXR0b24uXG5cdFx0aWYgKCBzZWxmLmNsYXNzTGlzdC5jb250YWlucyggdHRUb2dnbGVDbGFzcyApICkge1xuXG5cdFx0XHRvcmlnaW5hbFRyaWdnZXIgPSBzZWxmLnF1ZXJ5U2VsZWN0b3IoIHR0VHJpZ2dlciApLmlubmVySFRNTDtcblx0XHRcdG9yaWdpbmFsVHJpZ2dlciA9IG9yaWdpbmFsVHJpZ2dlci5yZXBsYWNlKCAvXlxccyt8XFxzKyQvZywgJycgKTtcblx0XHRcdGdldFRpcElkICAgICAgICA9IHNlbGYucXVlcnlTZWxlY3RvciggdHRUaGVUaXAgKS5nZXRBdHRyaWJ1dGUoICdpZCcgKTtcblx0XHRcdG5ld0J1dHRvbiAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XG5cblx0XHRcdG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2J1dHRvbicgKTtcblx0XHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCB0dFRyaWdnZXJDbGFzcyApO1xuXHRcdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoIHR0VHJpZ2dlclRvZ2dsZUNsYXNzICk7XG5cdFx0XHRuZXdCdXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScsIGdldFRpcElkICk7XG5cdFx0XHRuZXdCdXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblx0XHRcdG5ld0J1dHRvbi50ZXh0Q29udGVudCA9IG9yaWdpbmFsVHJpZ2dlcjtcblxuXHRcdFx0c2VsZi5yZW1vdmVDaGlsZCggc2VsZi5xdWVyeVNlbGVjdG9yKCB0dFRyaWdnZXIgKSApO1xuXHRcdFx0c2VsZi5pbnNlcnRCZWZvcmUoIG5ld0J1dHRvbiwgc2VsZi5maXJzdENoaWxkICk7XG5cblx0XHRcdC8vIFNldCBldmVudCBsaXN0ZW5lciBmb3IgdHJpZ2dlciBjbGlja1xuXHRcdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMubWFuYWdlQm91bmRUcmlnZ2VyICk7XG5cblx0XHR9IC8vIGlmIHNlbGYgY29udGFpbnMgdGhlIHRvZ2dsZUNsYXNzXG5cblx0XHRpZiAoIGZhbHNlID09PSBzZWxmLmNsYXNzTGlzdC5jb250YWlucyggdHRUb2dnbGVDbGFzcyApICkge1xuXHRcdFx0Ly8gU2V0IExpc3RlbmVycyBmb3IgY2FsbGJhY2tzIHRvIGZpcmVcblx0XHRcdHRpcC5hZGRFdmVudExpc3RlbmVyKCAndHJhbnNpdGlvbmVuZCcsIHRoaXMuYm91bmRNYW5hZ2VUVCApO1xuXHRcdH1cblxuXHRcdC8vIEhpZGUgdGhlIHRvb2x0aXAgb24gRVNDIGJlY2F1c2Ugd2UgaGF2ZSBlbXBhdGh5IGFuZCBzb21ldGltZXNcblx0XHQvLyB5b3UganVzdCBkb24ndCB3YW50IGEgdG9vbCB0aXAgYWxsIHVwIGluIHlvdXIgZmFjZSwgcmlnaHQ/XG5cdFx0Ly8gaWYgYSBrZXlib2FyZCB1c2VyIGRvZXNuJ3Qgd2FudC9uZWVkIHRoZSB0b29sdGlwIGFueW1vcmVcblx0XHQvLyBhbGxvdyB0aGVtIHRvIGhpZGUgaXQgYnkgcHJlc3NpbmcgdGhlIEVTQyBrZXkuXG5cdFx0Ly8gb25jZSB0aGV5IG1vdmUgZm9jdXMgYXdheSBmcm9tIHRoZSBlbGVtZW50IHRoYXQgaGFkIHRoZVxuXHRcdC8vIHRoZSB0b29sdGlwLCByZW1vdmUgdGhlIGhpZGUtdGlwIGNsYXNzIHNvIHRoYXQgdGhlXG5cdFx0Ly8gdGlwIGNhbiBiZSBhY2Nlc3NlZCBhZ2FpbiBvbiByZS1mb2N1cy5cblx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIHRoaXMuYm91bmRNYW5hZ2VFc2MgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0ZW5zIGZvciBgdHJhbnNpdGlvbmVuZGAuXG5cdCAqXG5cdCAqIEBsaXN0ZW5zIHRyYW5zaXRpb25lbmRcblx0ICogQHBhcmFtICAge09iamVjdH0gZSAtIFRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50IG9iamVjdC5cblx0ICovXG5cdG1hbmFnZVRUKCBlICkge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gZTtcblxuXHRcdGlmICggISBlLnBzZXVkb0VsZW1lbnQgKSB7XG5cblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2ExMXktdGlwLS1oaWRlJyApICkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2ExMXktdGlwLS1oaWRlJyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICcwJyA9PT0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGUudGFyZ2V0ICkub3BhY2l0eSApIHtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIGNsb3NlZC5cblx0XHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdFx0ICovXG5cdFx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5vbkNsb3NlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIG9wZW5lZC5cblx0XHRcdFx0ICogQGNhbGxiYWNrIG9uT3BlblxuXHRcdFx0XHQgKi9cblx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uT3BlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5zZXR0aW5ncy5vbk9wZW4gKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbk9wZW4uY2FsbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFsbG93cyB1c2VyIHRvICdlc2MnIG91dCBvZiBhIHRvb2x0aXAgd2l0aCBrZXl1cC5cblx0ICpcblx0ICogQGxpc3RlbnMga2V5dXBcblx0ICogQHBhcmFtICAge09iamVjdH0gZSBUaGUga2V5dXAgZXZlbnQgb2JqZWN0LlxuXHQgKi9cblx0bWFuYWdlRXNjKCBlICkge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gZTtcblxuXHRcdGlmICggMjcgPT0gZS5rZXlDb2RlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhMTF5LXRpcC0taGlkZScgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgd2hlbiBhIHRvb2x0aXAgaXMgY2xvc2VkLlxuXHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuc2V0dGluZ3Mub25DbG9zZSApIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNb2RpZmllcyBBUklBIGJhc2VkIG9uIGNsaWNrIGV2ZW50LlxuXHQgKlxuXHQgKiBAbGlzdGVucyBjbGlja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IGUgVGhlIGNsaWNrIGV2ZW50IG9iamVjdC5cblx0ICovXG5cdG1hbmFnZVRyaWdnZXIoIGUgKSB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsID0gZS50YXJnZXQ7XG5cblx0XHRpZiAoICd0cnVlJyA9PT0gdHJpZ2dlckVsLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgKSB7XG5cdFx0XHR0cmlnZ2VyRWwuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgd2hlbiBhIHRvb2x0aXAgaXMgY2xvc2VkLlxuXHRcdFx0ICogQGNhbGxiYWNrIG9uQ2xvc2Vcblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuc2V0dGluZ3Mub25DbG9zZSApIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5vbkNsb3NlLmNhbGwoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAnZmFsc2UnID09PSB0cmlnZ2VyRWwuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcgKSApIHtcblx0XHRcdHRyaWdnZXJFbC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSB0b29sdGlwIGlzIG9wZW5lZC5cblx0XHRcdCAqIEBjYWxsYmFjayBvbk9wZW5cblx0XHRcdCAqL1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uT3BlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5zZXR0aW5ncy5vbk9wZW4gKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3Mub25PcGVuLmNhbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUvZW1lYWd1aWFyL3h0ZWFtLXRlc3Qvbm9kZV9tb2R1bGVzL0AxMHVwL2NvbXBvbmVudC10b29sdGlwL3NyYy90b29sdGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=