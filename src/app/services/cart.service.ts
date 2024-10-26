import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor() {}

  // Obtener el carrito del localStorage
  getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  // Guardar el carrito en el localStorage
  setCart(cart: any[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Añadir un producto al carrito
  addToCart(product: any) {
    const cart = this.getCart();
    
    // Verificar si el producto ya existe en el carrito
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // Si ya existe, incrementar la cantidad
      cart[existingProductIndex].quantity += 1;
    } else {
      // Si no existe, agregar el producto con cantidad inicial 1
      product.quantity = 1;
      cart.push(product);
    }

    // Guardar el carrito actualizado
    this.setCart(cart);
  }

  // Actualizar la cantidad de productos en el carrito
  updateProductQuantity(product: any) {
    const cart = this.getCart();
    const index = cart.findIndex((item: any) => item.id === product.id);

    if (index !== -1) {
      cart[index].quantity = product.quantity; // Actualiza la cantidad
      this.setCart(cart);  // Guarda el carrito actualizado
    }
  }

  // Calcular el total del carrito
  getTotal() {
    const cart = this.getCart();
    return cart.reduce((acc: number, product: { price: number; quantity: number; }) => acc + (product.price * product.quantity), 0);
  }

  // Eliminar un producto del carrito
  removeProduct(product: any) {
    const cart = this.getCart();
    const updatedCart = cart.filter((item: any) => item.id !== product.id);
    this.setCart(updatedCart);
  }
}
