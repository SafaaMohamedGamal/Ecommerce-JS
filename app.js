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
      console.log("======before");
      let products = data.items;
      console.log("======after");
      products = products.map(item=>{
        const {title, price} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title, price, id, image};
      })
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
  products.getProducts().then(products=>console.log(products))
})
