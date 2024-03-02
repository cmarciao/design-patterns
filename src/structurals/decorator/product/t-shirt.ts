import { ProductProtocol } from '../types/product-protocol';

/**
 * This class is a exemple of some product.
 */
export class TShirt implements ProductProtocol {
	private name = 'TShirt';
	private price = 49.9;

	/**
     * Returns the product name.
     *
     * @returns product name.
     */
	getName(): string {
		return this.name;
	}

	/**
     * Returns the product price.
     *
     * @returns product price.
     */
	getPrice(): number {
		return this.price;
	}

}
