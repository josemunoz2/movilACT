import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    postalCode: '',
    id: 1 
  };

  profileImage: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient, private toastController: ToastController) {} 

  ngOnInit() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.user = JSON.parse(savedProfile);
    }

    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  
  saveProfile() {
    this.http.put(`http://localhost:3000/users/${this.user.id}`, this.user)
      .subscribe(() => {
        localStorage.setItem('userProfile', JSON.stringify(this.user));
        localStorage.setItem('profileImage', this.profileImage as string);
        this.presentToast('Perfil actualizado exitosamente'); 
      });
  }
  
}
