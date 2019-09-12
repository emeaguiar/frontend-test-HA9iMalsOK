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
		this.tabletWidth = 768;
	}

	init() {
		if ( this.bio && this.isMobile() ) {
			this.bio.collapse();
		}

		if ( this.stories ) {
			this.stories.collapse();
		}
	}

	isMobile() {
		return window.outerWidth < this.tabletWidth;
	}
}

const authorCard = new AuthorCard();

authorCard.init();
