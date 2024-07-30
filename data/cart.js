export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[{
    productID:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1,
    deliveryOptionId:'1'
},{
    productID:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionId:'2'
}];
}


function storeData(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
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
        quantity:1,
        deliveryOptionId:'3'
      });
    }
    storeData();
  }


export function cartShow(){
    let cartOrderQuantity=0;
    cart.forEach((item)=>{
      cartOrderQuantity+=item.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML=cartOrderQuantity;
    
  }


export  function cartRemove(productID){
    const newCart=[];
    cart.forEach((itemCart)=>{
      if(itemCart.productID!==productID){
        newCart.push(itemCart);
      }
    })
    cart=newCart;
    storeData();
  }