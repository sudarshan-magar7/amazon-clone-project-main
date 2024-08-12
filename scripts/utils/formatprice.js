import {cart}  from '../../data/cart.js';
export function formatPrice(priceCents){
    return((Math.round(priceCents)/100).toFixed(2));
}
export function cartQuantity(){
    let cartItemQuantity=0;
cart.forEach(cartItem => {
    cartItemQuantity+=cartItem.quantity;
});
return cartItemQuantity;
}


