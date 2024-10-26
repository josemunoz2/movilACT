import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

 
  resetPassword() {
    if (this.email === '') {
      this.presentAlert('Error', 'Por favor, ingrese su email.');
      return;
    }

    
    this.authService.getUserByEmail(this.email).subscribe((users: any) => {
      if (users.length > 0) {
        
        const user = users[0];
        this.presentAlert('Contraseña Recuperada', `Su contraseña es: ${user.password}`);
      } else {
      
        this.presentAlert('Error', 'El email ingresado no está registrado.');
      }
    }, err => {
      this.presentAlert('Error', 'Ocurrió un error al intentar restablecer la contraseña.');
    });
  }
}
