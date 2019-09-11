/* eslint-disable no-unused-vars */
import Bio from './components/bio';

class AuthorCard {
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
