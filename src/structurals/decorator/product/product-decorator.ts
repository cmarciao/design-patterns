import { ProductProtocol } from '../types/product-protocol';

/**
 * This class is a decorator that will be implemented in the decorated classes.
 */
export class ProductDecorator implements ProductProtocol {
	constructor(protected product: ProductProtocol) {}

	/**
     * Returns the product name.
     *
     * @returns product name.
     */
	getName(): string {
		return this.product.getName();
	}

	/**
     * Returns the product price.
     *
     * @returns product price.
     */
	getPrice(): number {
		return this.product.getPrice();
	}
}
