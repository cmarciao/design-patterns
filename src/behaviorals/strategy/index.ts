import { ShoppingCart } from './shopping/shopping-cart';

import { NewDiscount } from './shopping/new-discount';
import { DefaultDiscount } from './shopping/default-discount';

/* Creating an instance and using a discount. */
const shoppingCart = new ShoppingCart();

shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct(
	{name: 'Produto 1', price: 100},
	{name: 'Produto 2', price: 100},
	{name: 'Produto 3', price: 100}
);

console.log('Default discount');
console.log('Sub total: ', shoppingCart.getSubTotal());
console.log('Total: ', shoppingCart.getTotal());


/* Creating an new instance and using a different discount. */
const shoppingCart2 = new ShoppingCart();

shoppingCart2.discount = new NewDiscount();
shoppingCart2.addProduct(
	{name: 'Produto 4', price: 200},
	{name: 'Produto 5', price: 200},
	{name: 'Produto 6', price: 200}
);

console.log();
console.log('New discount');
console.log('Sub total: ', shoppingCart2.getSubTotal());
console.log('Total: ', shoppingCart2.getTotal());
