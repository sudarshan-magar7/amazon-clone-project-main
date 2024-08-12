import {formatPrice} from '../scripts/utils/formatprice.js';
describe('Test Suites:',()=>{
    it('Test for Pricecents',()=>{
        expect(formatPrice(2095)).toEqual('20.95');
    });
});