import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private alertController: AlertController) {}

  async canActivate(): Promise<boolean> {
    const userProfile = localStorage.getItem('userProfile');
    
    if (userProfile) {
      return true;
    } else {
      await this.showAlert('Acceso Denegado', 'Debes iniciar sesión para acceder a esta página.');
      this.router.navigate(['/login']);
      return false;
    }
  }

  // Método para mostrar una alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
