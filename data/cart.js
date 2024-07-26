export let cart=[{
    productID:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
},{
    productID:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:2,
}];

export function addToACart(productID){
    let matching;
    cart.forEach((item)=>{
      if(productID===item.productID){
        matching=item;
      }
    });
    
    if(matching){
      matching.quantity+=1;
    }else{
      cart.push({
        productID:productID,
        quantity:1
      });
    }
  }


export function cartShow(){
    let cartOrderQuantity=0;
    cart.forEach((item)=>{
      cartOrderQuantity+=item.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML=cartOrderQuantity;
  }