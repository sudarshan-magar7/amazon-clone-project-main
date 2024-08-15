"use strict";

var _cart = require("../data/cart.js");

var _products = require("../data/products.js");

var _formatprice = require("./utils/formatprice.js");

(0, _products.cartLoad)(productsGrid);

function productsGrid() {
  var HTMLdiv = '';

  _products.products.forEach(function (products) {
    (0, _cart.cartShow)();
    var htmldivadd = "<div class=\"product-container\">\n          <div class=\"product-image-container\">\n            <img class=\"product-image\"\n              src=\"".concat(products.image, "\">\n          </div>\n\n          <div class=\"product-name limit-text-to-2-lines\">\n            ").concat(products.name, "\n          </div>\n\n          <div class=\"product-rating-container\">\n            <img class=\"product-rating-stars\"\n              src=\"").concat(products.starUrl(), "\">\n            <div class=\"product-rating-count link-primary\">\n              ").concat(products.rating.count, "\n            </div>\n          </div>\n\n          <div class=\"product-price\">\n            ").concat(products.priceProduct(), "\n          </div>\n\n          <div class=\"product-quantity-container\">\n            <select>\n              <option selected value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n            </select>\n          </div>\n          ").concat(products.clothSizeHtml(), "\n          <div class=\"product-spacer\"></div>\n\n          <div class=\"added-to-cart\">\n            <img src=\"images/icons/checkmark.png\">\n            Added\n          </div>\n\n          <button class=\"add-to-cart-button button-primary js-to-cart-button\" data-product-id=\"").concat(products.id, "\">\n            Add to Cart\n          </button>\n        </div>");
    HTMLdiv += htmldivadd;
  });

  var Showgrid = document.querySelector('.product-grid-show');
  Showgrid.innerHTML = HTMLdiv;
  var button = document.querySelectorAll('.js-to-cart-button').forEach(function (button) {
    button.addEventListener('click', function () {
      var productID = button.dataset.productId;
      (0, _cart.addToACart)(productID);
      (0, _cart.cartShow)();
      console.log(_cart.cart);
    });
  });
}