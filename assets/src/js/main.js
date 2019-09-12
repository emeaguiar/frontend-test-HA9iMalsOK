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
		this.tabletWidth = 767;
	}

	/**
	 * Init components
	 */
	init() {
		if ( this.stories ) {
			this.stories.collapse();
		}

		window.matchMedia( `(max-width: ${ this.tabletWidth }px)` )
			.addListener( ( event ) => this.toggleBio( event ) );
	}

	/**
	 * Turn Bio on or off depending on media query
	 * @param {Object} event Triggered Matchmedia object
	 */
	toggleBio( event ) {
		if ( this.bio && event.matches ) {
			this.bio.collapse();
		} else {
			this.bio.expand();
		}
	}
}

const authorCard = new AuthorCard();

authorCard.init();
