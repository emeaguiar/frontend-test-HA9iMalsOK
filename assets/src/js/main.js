/* eslint-disable no-unused-vars */
import Bio from './components/bio';
import Stories from './components/stories';

/**
 * Handles author card components
 */
class AuthorCard {
	/**
	 * Save component references
	 */
	constructor() {
		this.bio = new Bio( '#bio' );
		this.stories = new Stories( '#stories__dropdown' );
	}

	init() {
		if ( this.bio ) {
			this.bio.collapse();
		}

		if ( this.stories ) {
			this.stories.collapse();
		}
	}
}

const authorCard = new AuthorCard();

authorCard.init();
