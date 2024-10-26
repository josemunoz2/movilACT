import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {

  cart: any[] = [];
  total: number = 0;
  shippingDetails: any = {};
  currentStep = 4;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();

    this.shippingDetails = JSON.parse(localStorage.getItem('shippingDetails') || '{}');
  }
}
