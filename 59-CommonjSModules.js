const cart = [];
const shippingCost = 10;
const totalPrice = 237;
const totalQuantity = 23;

// EXPORT ~~~~~~~~~~~~~~~~~
export.addToCart = function(product, quantity) {
    cart.push({ product, quantity });

    console.log(`${quantity} ${product} added to cart whose shipping cost is ${shippingCost}`);

};

// IMPORT ~~~~~~~~~~~~~~~~~
const { addToCart } = require('./shoppingCart.js');