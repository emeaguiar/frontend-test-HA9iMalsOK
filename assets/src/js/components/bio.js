export default class Bio {
	constructor( element ) {
		this.element = window.document.querySelector( element );
		this.trigger = window.document.querySelector( `${ element } ~ .more` );

		if ( this.trigger ) {
			this.trigger.addEventListener( 'click', () => this.toggleBio() );
		}
	}

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

	collapse() {
		const { element } = this;

		if ( ! element ) {
			return;
		}

		element.classList.add( 'bio__collapsed' );
		element.setAttribute( 'aria-expanded', 'false' );
	}

	expand() {
		const { element } = this;

		if ( ! element ) {
			return;
		}

		element.classList.remove( 'bio__collapsed' );
		element.setAttribute( 'aria-expanded', 'true' );
	}
}
