import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = []; 

  constructor() {
    this.loadCart(); 
  }


  loadCart() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }


  getCart() {
    return this.cart;
  }


  addToCart(product: any) {
    this.cart.push(product); 
    this.saveCart(); 
  }

 
  removeProduct(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1); 
      this.saveCart(); 
    }
  }


  getTotal() {
    return this.cart.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0);
  }


  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0); 
  }
}
