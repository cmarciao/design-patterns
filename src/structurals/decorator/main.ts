import { TShirt } from './product/t-shirt';

import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCustomizationDecorator } from './product/product-customization-decorator';

/** Here, we've just created a simple product instance. */
const tShirt = new TShirt();
console.log(
	`Name: ${tShirt.getName()},`,
	`Price: ${tShirt.getPrice()}`
);

/** Here, we decorate the product. */
const tShirtWithStamp = new ProductStampDecorator(tShirt);
console.log(
	`Name: ${tShirtWithStamp.getName()},`,
	`Price: ${tShirtWithStamp.getPrice()}`
);

/** Here, we decorate the product. */
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
console.log(
	`Name: ${customizedTShirt.getName()},`,
	`Price: ${customizedTShirt.getPrice()}`
);
