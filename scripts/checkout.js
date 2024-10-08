import {renderOrderSummary} from '../scripts/checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import {cartQuantity} from './utils/formatprice.js';
import {cartLoad}  from '../data/products.js';
import '../data/backend-practice.js';

new Promise((resolve)=>{
    cartLoad(()=>{
        resolve();
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

/*
cartLoad(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/
