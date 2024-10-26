import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.page.html', 
  styleUrls: ['./shipping-details.page.scss'], 
})
export class ShippingDetailsPage implements OnInit {


  shippingDetails = {
    name: '',
    address: '',
    postalCode: '',
    phone: ''
  };

  currentStep = 2; 

  constructor(private router: Router) {}

  ngOnInit() {}

 
  submitShippingDetails() {
    if (this.shippingDetails.name && this.shippingDetails.address && this.shippingDetails.postalCode && this.shippingDetails.phone) {
      localStorage.setItem('shippingDetails', JSON.stringify(this.shippingDetails));

      this.currentStep = 3;
      this.router.navigate(['/payment']);
    } else {
      alert('Por favor, rellena todos los campos.');
    }
  }

  confirmShipping() {
    if (this.shippingDetails.name && this.shippingDetails.address) {
      localStorage.setItem('shippingDetails', JSON.stringify(this.shippingDetails));

      this.currentStep = 3; 
      this.router.navigate(['/order-confirmation']);
    } else {
      alert('Por favor, rellena al menos el nombre y la dirección.');
    }
  }
}
