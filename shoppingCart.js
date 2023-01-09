// console.log('I Am Invincible');                                                    ---->(1)

// export const Myself = 'I am Iron Man';                                          -------->(2)

//     cart.push({ product, quantity });                                          -----------> 3
// export const addToCart = function(product, quantity) {
//     console.log(`${quantity} ${product} has been succesfully added to the cart`);
// };


const shippingCost = 10;
const cart = [];


const totalPrice = 42000;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} has been successfully added to the cart`);
};