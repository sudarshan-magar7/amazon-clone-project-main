import { cart } from "../../data/cart.js";
// import {cart} from '../../data/cart.js';
import { deliveryOptions } from "../../data/deliveryCart.js";
import { getProducts } from "../../data/products.js";
import { getDeliveriOption } from "../../data/deliveryCart.js";
import { formatPrice } from "../utils/formatprice.js";
import {cartQuantity} from '../utils/formatprice.js';
export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shipingPriceCents = 0;
  let cartQuantitys=cartQuantity();
  cart.forEach((cartItem) => {
    const product = getProducts(cartItem.productID);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOPtions = getDeliveriOption(cartItem.deliveryOptionId);
    shipingPriceCents += deliveryOPtions.pricecents;
  });
  const totalBeforeTax = productPriceCents + shipingPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalOrder = totalBeforeTax + taxCents;
  let HTMLPayamentRender = `
    <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${cartQuantitys}):</div>
    <div class="payment-summary-money">$${formatPrice(productPriceCents)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatPrice(shipingPriceCents)}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${formatPrice(totalBeforeTax)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${formatPrice(taxCents)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatPrice(totalOrder)}</div>
  </div>

  <button class="place-order-button button-primary js-place-order">
    Place your order
  </button>
    `;
  document.querySelector(".js-payment-summary").innerHTML = HTMLPayamentRender;

  document.querySelector('.js-place-order').addEventListener('click', async ()=>{
    const response=await fetch('https://supersimplebackend.dev/orders',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        cart:  cart
      })
    });
    const order= await response.json();
    console.log(order);
  });
}
