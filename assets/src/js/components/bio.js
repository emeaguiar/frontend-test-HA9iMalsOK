/**
 * Controls bio collapsed or expanded status
 */
export default class Bio {
	/**
	 * Init
	 * Save elements in cache
	 * @param {string} selector Bio element css unique selector
	 */
	constructor( selector ) {
		this.element = window.document.querySelector( selector );
		this.trigger = window.document.querySelector( `${ selector } ~ .more` );

		if ( this.trigger ) {
			this.trigger.addEventListener( 'click', () => this.toggleBio() );
		}
	}

	/**
	 * Expand or collapse based on current status
	 */
	toggleBio() {
		const { element } = this;

		if ( ! element ) {
			return;
		}

		if ( element.classList.contains( 'bio__collapsed' ) ) {
			this.expand();
		} else {
			this.collapse();
		}
	}

	/**
	 * Close and add icon
	 */
	collapse() {
		const { element } = this;

		if ( ! element ) {
			return;
		}

		element.classList.add( 'bio__collapsed' );
		element.setAttribute( 'aria-expanded', 'false' );
	}

	/**
	 * Open and remove icon
	 */
	expand() {
		const { element } = this;

		if ( ! element ) {
			return;
		}

		element.classList.remove( 'bio__collapsed' );
		element.setAttribute( 'aria-expanded', 'true' );
	}
}
