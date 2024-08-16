"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPaymentSummary = renderPaymentSummary;

var _cart = require("../../data/cart.js");

var _deliveryCart = require("../../data/deliveryCart.js");

var _products = require("../../data/products.js");

var _formatprice = require("../utils/formatprice.js");

// import {cart} from '../../data/cart.js';
function renderPaymentSummary() {
  var productPriceCents = 0;
  var shipingPriceCents = 0;
  var cartQuantitys = (0, _formatprice.cartQuantity)();

  _cart.cart.forEach(function (cartItem) {
    var product = (0, _products.getProducts)(cartItem.productID);
    productPriceCents += product.priceCents * cartItem.quantity;
    var deliveryOPtions = (0, _deliveryCart.getDeliveriOption)(cartItem.deliveryOptionId);
    shipingPriceCents += deliveryOPtions.pricecents;
  });

  var totalBeforeTax = productPriceCents + shipingPriceCents;
  var taxCents = totalBeforeTax * 0.1;
  var totalOrder = totalBeforeTax + taxCents;
  var HTMLPayamentRender = "\n    <div class=\"payment-summary-title\">\n    Order Summary\n  </div>\n\n  <div class=\"payment-summary-row\">\n    <div>Items (".concat(cartQuantitys, "):</div>\n    <div class=\"payment-summary-money\">$").concat((0, _formatprice.formatPrice)(productPriceCents), "</div>\n  </div>\n\n  <div class=\"payment-summary-row\">\n    <div>Shipping &amp; handling:</div>\n    <div class=\"payment-summary-money\">$").concat((0, _formatprice.formatPrice)(shipingPriceCents), "</div>\n  </div>\n\n  <div class=\"payment-summary-row subtotal-row\">\n    <div>Total before tax:</div>\n    <div class=\"payment-summary-money\">$").concat((0, _formatprice.formatPrice)(totalBeforeTax), "</div>\n  </div>\n\n  <div class=\"payment-summary-row\">\n    <div>Estimated tax (10%):</div>\n    <div class=\"payment-summary-money\">$").concat((0, _formatprice.formatPrice)(taxCents), "</div>\n  </div>\n\n  <div class=\"payment-summary-row total-row\">\n    <div>Order total:</div>\n    <div class=\"payment-summary-money\">$").concat((0, _formatprice.formatPrice)(totalOrder), "</div>\n  </div>\n\n  <button class=\"place-order-button button-primary js-place-order\">\n    Place your order\n  </button>\n    ");
  document.querySelector(".js-payment-summary").innerHTML = HTMLPayamentRender;
  document.querySelector('.js-place-order').addEventListener('click', function _callee() {
    var response, order;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('https://supersimplebackend.dev/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                cart: _cart.cart
              })
            }));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            order = _context.sent;
            console.log(order);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}