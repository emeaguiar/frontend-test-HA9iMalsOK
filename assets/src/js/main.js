/* eslint-disable no-unused-vars */
import Bio from './components/bio';

/**
 * Handles author card components
 */
class AuthorCard {
	/**
	 * Save component references
	 */
	constructor() {
		this.bio = new Bio( '#bio' );
	}

	init() {
		if ( this.bio ) {
			this.bio.collapse();
		}
	}
}

const authorCard = new AuthorCard();

authorCard.init();
