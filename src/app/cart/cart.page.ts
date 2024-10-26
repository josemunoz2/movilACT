import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any[] = [];
  total = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  // Cargar el carrito y calcular el total
  loadCart() {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  // Método para actualizar la cantidad de productos
  updateQuantity(product: any) {
    if (product.quantity < 1) {
      product.quantity = 1; // Prevenir cantidades menores a 1
    }

    this.cartService.updateProductQuantity(product);
    this.calculateTotal(); // Recalcular el total después de actualizar la cantidad
  }

  // Método para calcular el total basado en la cantidad de cada producto
  calculateTotal() {
    this.total = this.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }

  // Método para eliminar productos del carrito
  removeFromCart(product: any) {
    this.cartService.removeProduct(product);
    this.loadCart(); // Recargar el carrito y el total
  }

  // Método para continuar al detalle de envío
  goToShippingDetails() {
    localStorage.setItem('cartTotal', JSON.stringify(this.total));
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
    this.router.navigate(['/shipping-details']);
  }
}
