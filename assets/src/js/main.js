/* eslint-disable no-unused-vars */
import tooltip from '@10up/component-tooltip';

( function() {
	// eslint-disable-next-line no-console
	console.log( 'A foo walks into a bar, takes a look around and says "Hello World!"' );

	const tooltipSelector = '.stories';

	const stories = new tooltip( tooltipSelector, () => {
		// eslint-disable-next-line no-console
		console.log( 'tooltip init' );
	} );
}() );
