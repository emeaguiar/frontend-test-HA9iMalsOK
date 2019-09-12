import Accordion from './accordion';

/**
 * Controls bio collapsed or expanded status
 */
export default class Bio extends Accordion {
	/**
	 * Init parent class
	 * Save elements in cache
	 * @param {string} selector Bio element css unique selector
	 */
	constructor( selector ) {
		super( selector, `${ selector } ~ .more` );

		this.collapsedClass = 'bio__collapsed';
		this.triggerCollapsedClass = 'more__collapsed';
	}
}
