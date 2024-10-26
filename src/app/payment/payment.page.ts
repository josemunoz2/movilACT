import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  paymentDetails = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: ''
  };

  currentStep = 3; 

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  
  async submitPayment() {
  
    if (this.paymentDetails.cvc.length !== 3) {
      const toast = await this.toastController.create({
        message: 'El CVC debe tener exactamente 3 dígitos',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      toast.present();
      return;
    }


    const storedShippingDetails = localStorage.getItem('shippingDetails');
    const storedTotal = localStorage.getItem('cartTotal');
    const storedCartItems = localStorage.getItem('cartItems'); 

    if (storedShippingDetails && storedTotal && storedCartItems) {
      const shippingDetails = JSON.parse(storedShippingDetails);
      const cartTotal = JSON.parse(storedTotal);
      const cartItems = JSON.parse(storedCartItems); 

  
      const newInvoice = {
        shippingDetails: shippingDetails,
        cartItems: cartItems,
        totalAmount: cartTotal,
        date: new Date().toISOString()
      };

    
      let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
      
      invoices.push(newInvoice);
      
      
      localStorage.setItem('invoices', JSON.stringify(invoices));

      
      const toast = await this.toastController.create({
        message: 'Pago procesado con éxito',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();

      setTimeout(() => {
        this.router.navigate(['/order-confirmation']);
      }, 2000); 
    } else {
      const toast = await this.toastController.create({
        message: 'No se encontraron datos de envío o del carrito',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      toast.present();
    }
  }

  
  confirmPayment() {
    
    console.log("Confirmando el pago...");

    this.router.navigate(['/order-confirmation']);
  }
}
