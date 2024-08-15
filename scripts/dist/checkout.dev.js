"use strict";

var _orderSummary = require("../scripts/checkout/orderSummary.js");

var _paymentSummary = require("./checkout/paymentSummary.js");

var _formatprice = require("./utils/formatprice.js");

require("../data/backend-practice.js");

(0, _orderSummary.renderOrderSummary)();
(0, _paymentSummary.renderPaymentSummary)();