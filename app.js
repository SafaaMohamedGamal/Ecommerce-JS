const cartBtn = document.querySelector('.btn-cart');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDom = document.querySelector('.products-center');

//Cart to read from local storage
let cart = [];

//getting the products
class Products {
  async getProducts()
  {
    try {
      let result = await fetch('products.json');
      let data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

//display products
class UI {
}
//local storage
class Storage {
}


document.addEventListener('DOMContentLoaded', ()=>{
  const ui = new UI();
  const products = new Products();
  //get all products
  products.getProducts().then(data=>console.log(data))
})
