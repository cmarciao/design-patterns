import { ProductDecorator } from './product-decorator';

/**
 * This is a decorated class. In this case, the string (Stamped) will be added
 * to the product name, and the price will be increased by 10 units.
 */
export class ProductStampDecorator extends ProductDecorator {

	/**
     * Returns the product name.
     *
     * @returns product name.
     */
	getName(): string {
		return this.product.getName() + ' (Stamped)';
	}

	/**
     * Returns the product price.
     *
     * @returns product price.
     */
	getPrice(): number {
		return this.product.getPrice() + 10;
	}
}
