/**
 * Controls element collapsed or expanded status
 */
export default class Accordion {
	/**
	 * Init
	 * Save elements in cache
	 * @param {string} selector Element css unique selector
	 * @param {string} trigger Elemento to toggle accordion
	 */
	constructor( selector, trigger ) {
		this.element = window.document.querySelector( selector );
		this.trigger = window.document.querySelector( trigger );

		this.collapsedClass = 'accordion__collapsed';
		this.triggerCollapsedClass = 'trigger__collapsed';

		if ( this.trigger ) {
			this.trigger.addEventListener( 'click', () => this.toggle() );
		}
	}

	/**
	 * Expand or collapse based on current status
	 */
	toggle() {
		const { element, collapsedClass } = this;

		if ( ! element ) {
			return;
		}

		if ( element.classList.contains( collapsedClass ) ) {
			this.expand();
		} else {
			this.collapse();
		}
	}

	/**
	 * Close and add icon
	 */
	collapse() {
		const {
			element,
			trigger,
			collapsedClass,
			triggerCollapsedClass,
		} = this;

		if ( ! element ) {
			return;
		}

		element.classList.add( collapsedClass );
		element.setAttribute( 'aria-expanded', 'false' );

		if ( trigger ) {
			trigger.classList.remove( triggerCollapsedClass );
		}
	}

	/**
	 * Open and remove icon
	 */
	expand() {
		const {
			element,
			trigger,
			collapsedClass,
			triggerCollapsedClass,
		} = this;

		if ( ! element ) {
			return;
		}

		element.classList.remove( collapsedClass );
		element.setAttribute( 'aria-expanded', 'true' );

		if ( trigger ) {
			trigger.classList.add( triggerCollapsedClass );
		}
	}
}
