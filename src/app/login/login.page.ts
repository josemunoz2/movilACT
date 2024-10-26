import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
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

  login() {
    if (this.email === '' || this.password === '') {
      this.presentAlert('Error', 'Por favor, ingrese tanto el email como la contraseña.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (users: any) => {
        if (users.length > 0) {
          this.presentAlert('Bienvenido', '¡Inicio de sesión exitoso!');
          
          localStorage.setItem('userProfile', JSON.stringify(users[0]));
          

          this.router.navigate(['/home']);
        } else {
 
          this.presentAlert('Error', 'El email o la contraseña son incorrectos o no está registrado.');
        }
      },
      (err) => {
   
        this.presentAlert('Error', 'Ocurrió un error al intentar iniciar sesión.');
      }
    );
  }
}
