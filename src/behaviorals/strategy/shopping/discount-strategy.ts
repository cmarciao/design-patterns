import { ShoppingCart } from './shopping-cart';

/**
 * Class to calculate the desired discount to be applied to the total price of
 * the cart.
 */
export class DiscountStrategy {
	protected discount: number = 0;

	/**
     * Calculates the final cart discount.
     *
     * @param cart shopping cart to calculate the discount.
     * @returns the discount value.
     */
	getDiscount(cart: ShoppingCart): number {
		return cart.getSubTotal();
	}
}
