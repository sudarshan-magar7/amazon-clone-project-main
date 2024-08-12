import { cart, cartRemove, updateDeliveryOption } from "../../data/cart.js";
import { products,getProducts} from "../../data/products.js";
import { formatPrice, } from "../utils/formatprice.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveriOption } from "../../data/deliveryCart.js";
import {renderPaymentSummary} from '../checkout/paymentSummary.js';
import {checkOutCartQuantity} from '../checkout/cheoutHeader.js';
let now = dayjs();
export function renderOrderSummary(){
let carthtml = "";
checkOutCartQuantity();
cart.forEach((itemCart) => {
  const productID = itemCart.productID;
  const matchingProducts=getProducts(productID);

  const deliveryOptionId = itemCart.deliveryOptionId;
  let deliveryOption=getDeliveriOption(deliveryOptionId);

  // deliveryOptions.forEach((option) => {
  //   if (option.id === deliveryOptionId) {
  //     deliveryOption = option;
  //   }
  // });
  const today = dayjs();
  const delivaryDay = today.add(deliveryOption.days, "days");
  const dateString = delivaryDay.format("dddd, MMMM  D");

  carthtml += `<div class="cart-item-container js-cart-container-${
    matchingProducts.id
  }">
<div class="delivery-date">
  Delivery date: ${dateString}
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingProducts.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${matchingProducts.name}
    </div>
    <div class="product-price">
      $${formatPrice(matchingProducts.priceCents)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label">${itemCart.quantity}</span>
      </span>
      <span class="update-quantity-link link-primary">
        Update
      </span>
      <span class="delete-quantity-link link-primary js-delete-cart-quantity" data-delete-data="${
        matchingProducts.id
      }">
        Delete
      </span> 
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
      ${deliveryOptionsHTML(matchingProducts, itemCart)}
  </div>
</div>
</div>`;
});
document.querySelector(".order-summary").innerHTML = carthtml;
function deliveryOptionsHTML(matchingProducts, itemCart) {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const delivaryDay = today.add(deliveryOption.days, "days");
    const dateString = delivaryDay.format("dddd, MMMM  D");

    const priceString =
      deliveryOption.pricecents === 0
        ? "Free"
        : `$${formatPrice(deliveryOption.pricecents)}-`;
    const isCheked = deliveryOption.id === itemCart.deliveryOptionId;
    html += `
    <div class="delivery-option js-delivery-option" data-product-id="${
      matchingProducts.id
    }" data-delivery-option-id="${deliveryOption.id}">
      <input type="radio"
        ${isCheked ? "checked" : ""}
        class="delivery-option-input"
        name="delivery-option-${matchingProducts.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          ${priceString} Shipping
        </div>
      </div>
    </div>
    `;
  });
  renderPaymentSummary();
  return html;
}

document.querySelectorAll(".js-delete-cart-quantity").forEach((link) => {
  link.addEventListener("click", () => {
    let productID = link.dataset.deleteData;
    cartRemove(productID);
    const container = document.querySelector(`.js-cart-container-${productID}`);
    container.remove();
    checkOutCartQuantity();
    renderPaymentSummary();
  });
});

document.querySelectorAll(".js-delivery-option").forEach((element) => {
  element.addEventListener("click", () => {
    let productId=element.dataset.productId;
    let deliveryOptionId=element.dataset.deliveryOptionId;
    updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
  });
});
};