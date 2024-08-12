"use strict";

var _formatprice = require("../scripts/utils/formatprice.js");

describe('Test Suites:', function () {
  it('Test for Pricecents', function () {
    expect((0, _formatprice.formatPrice)(2095)).toEqual('20.95');
  });
});