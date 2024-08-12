import {cartQuantity} from '../utils/formatprice.js';
export function checkOutCartQuantity(){
    const items=cartQuantity();
    const itemsall=items+` items`;
    document.querySelector('.return-to-home-link').innerHTML=itemsall;
}
checkOutCartQuantity();