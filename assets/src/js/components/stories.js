import Accordion from './accordion';

/**
 * Handles stories notifications
 */
export default class Stories extends Accordion {
	/**
	 * Init parent class
	 * @param {string} selector Stories unique element
	 */
	constructor( selector ) {
		super( selector, '#stories__trigger' );

		this.collapsedClass = 'stories__dropdown_collapsed';
		this.triggerCollapsedClass = 'stories__trigger_collapsed';
	}
}
