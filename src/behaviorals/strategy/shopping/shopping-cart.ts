import { ProductProtocol } from '../types/ProductProtocol';
import { DiscountStrategy } from './discount-strategy';

/**
 * Class to control the shopping cart.
 */
export class ShoppingCart {
	private products: ProductProtocol[] = [];
	private _discountStrategy: DiscountStrategy = new DiscountStrategy();

	/**
     * Add new products to the cart.
     *
     * @param products products to be added.
     */
	addProduct(...products: ProductProtocol[]): void {
		products.forEach((product) => this.products.push(product));
	}

	/**
     * Lists all the products in the cart.
     *
     * @returns list of all products.
     */
	getProducts(): ProductProtocol[] {
		return this.products;
	}

	/**
     * Calculates the total price of the the cart without applying any discounts.
     *
     * @returns the total price of ther cart without any discount.
     */
	getSubTotal(): number {
		return this.products.reduce((sum, product) => sum + product.price, 0);
	}

	/**
     * Calculates the total price of the cart with discounts applied.
     *
     * @returns the total price of the cart with discounts.
     */
	getTotal(): number {
		const subTotal = this.getSubTotal();

		return subTotal - this._discountStrategy.getDiscount(this);
	}

	/**
     * Adds a discount to be applied to the total price of the cart.
     *
     * @param discount instance of a discount class to be applied.
     */
	set discount(discount: DiscountStrategy) {
		this._discountStrategy = discount;
	}
}
