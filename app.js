import { addToCart } from "./pubSubEvents/addItemsToCart.js";
import { cartItems } from "./pubSubEvents/cart.js";
import { countItems } from "./pubSubEvents/countItems.js";

addToCart();

cartItems();

countItems();
