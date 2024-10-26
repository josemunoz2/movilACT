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
  currentStep = 1; 

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  // total carrito
  loadCart() {
    this.cart = this.cartService.getCart(); 
    this.total = this.cartService.getTotalPrice(); 
  }

  removeFromCart(product: any) {
    this.cartService.removeProduct(product); 
    this.loadCart(); 
  }

  
  goToShippingDetails() {
    
    localStorage.setItem('cartTotal', JSON.stringify(this.total));

    localStorage.setItem('cartItems', JSON.stringify(this.cart));

  
    this.currentStep = 2; 
    this.router.navigate(['/shipping-details']);
  }
}
