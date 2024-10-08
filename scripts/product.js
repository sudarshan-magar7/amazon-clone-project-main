import {cart,cartShow,addToACart} from "../data/cart.js"
import {products,cartLoad} from "../data/products.js"
import { formatPrice } from "./utils/formatprice.js";
cartLoad(productsGrid);
function productsGrid(){
let HTMLdiv='';
  products.forEach(products=>{
    cartShow();
    const htmldivadd=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${products.starUrl()}">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${products.priceProduct()}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${products.clothSizeHtml()}
          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-to-cart-button" data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`;
        HTMLdiv+=htmldivadd;

  });
  const Showgrid=document.querySelector('.product-grid-show');
  Showgrid.innerHTML=HTMLdiv;

const button=document.querySelectorAll('.js-to-cart-button')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    let productID=button.dataset.productId;
    addToACart(productID);
    cartShow();

    console.log(cart);
  })
})
}

