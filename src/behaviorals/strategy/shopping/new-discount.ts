import { ShoppingCart } from './shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class NewDiscount extends DiscountStrategy {

	/**
     * Calculates the final cart discount.
     * In this case, if the total price was bigger than 150, the discount will be
     * 5 percent.
     *
     * @param cart shopping cart to calculate the discount.
     * @returns the discount value.
     */
	getDiscount(cart: ShoppingCart): number {
		const total = cart.getSubTotal();

		if(total >= 150) {
			this.discount = 5;
		}

		return total * (this.discount / 100);
	}
}
