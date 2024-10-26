import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  address: string = '';
  postalCode: string = '';

  constructor(private http: HttpClient, private router: Router, private toastController: ToastController) {} 

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  register() {

    if (!this.email || !this.password || !this.firstName || !this.lastName || !this.phone || !this.address || !this.postalCode) {
      this.presentToast('Todos los campos son obligatorios.', 'danger');
      return;
    }

    const newUser = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      address: this.address,
      postalCode: this.postalCode
    };


    this.http.post('http://localhost:3000/users', newUser).subscribe(
      () => {
        this.presentToast('Registro exitoso.', 'success');
        this.router.navigate(['/login']); 
      },
      (error) => {
        this.presentToast('Error al registrar. Intenta nuevamente.', 'danger');
        console.error('Registro fallido', error);
      }
    );
  }
}

