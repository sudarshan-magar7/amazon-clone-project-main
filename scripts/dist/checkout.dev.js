"use strict";

var _orderSummary = require("../scripts/checkout/orderSummary.js");

var _paymentSummary = require("./checkout/paymentSummary.js");

var _formatprice = require("./utils/formatprice.js");

var _products = require("../data/products.js");

require("../data/backend-practice.js");

new Promise(function (resolve) {
  (0, _products.cartLoad)(function () {
    resolve();
  });
}).then(function () {
  (0, _orderSummary.renderOrderSummary)();
  (0, _paymentSummary.renderPaymentSummary)();
});
/*
cartLoad(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/