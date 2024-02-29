import { ShoppingCart } from './shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class DefaultDiscount extends DiscountStrategy {

	/**
     * Calculates the final cart discount.
     * In this case, if the total price was:
     *
     * 100 <= total <= 200 - 10 percent discount.
     * 200 <= total <= 300 - 20 percent discount.
     * 300 <= total - 30 percent discount.
     *
     * @param cart shopping cart to calculate the discount.
     * @returns the discount value.
     */
	getDiscount(cart: ShoppingCart): number {
		const total = cart.getSubTotal();

		if(total >= 100 && total <= 200) {
			this.discount = 10;
		} else if(total >= 200 && total <= 300) {
			this.discount = 20;
		} else if(total > 300) {
			this.discount = 30;
		}

		return total * (this.discount / 100);
	}
}
