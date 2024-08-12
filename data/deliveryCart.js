export const deliveryOptions=[{
    id:'1',
    days:7,
    pricecents:0
},{
    id:'2',
    days:3,
    pricecents:399
},{
    id:'3',
    days:1,
    pricecents:799
}];

export function getDeliveriOption(deliveryOptionId){
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
          deliveryOption = option;
        }
      });
      return deliveryOption||deliveryOption[0];
}