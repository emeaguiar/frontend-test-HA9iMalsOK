/* eslint-disable no-unused-vars */
import Bio from './components/bio';

( function() {
	// eslint-disable-next-line no-console
	console.log( 'A foo walks into a bar, takes a look around and says "Hello World!"' );

	const bio = new Bio( '#bio' );

	bio.collapse();
}() );
