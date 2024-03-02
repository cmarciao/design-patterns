import { ProductDecorator } from './product-decorator';

/**
 * This is a decorated class. In this case, the string (Customization) will be
 * added to the product name, and the price will be increased by 50 units.
 */
export class ProductCustomizationDecorator extends ProductDecorator {

	/**
     * Returns the product name.
     *
     * @returns product name.
     */
	getName() {
		return this.product.getName() + ' (Customization)';
	}

	/**
     * Returns the product price.
     *
     * @returns product price.
     */
	getPrice() {
		return this.product.getPrice() + 50;
	}
}
