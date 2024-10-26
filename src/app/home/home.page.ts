import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  categories = [
    { id: 1, name: 'Tarjetas Gráficas', imageUrl: 'assets/grafica/11.png' },
    { id: 2, name: 'Teclados', imageUrl: 'assets/grafica/teclado.png' },
    { id: 3, name: 'Mouse', imageUrl: 'assets/grafica/mouse.png' },
    { id: 4, name: 'Audífonos', imageUrl: 'assets/grafica/ace.png' }
  ];

  constructor(private router: Router) {}

  goToCategory(categoryId: number) {
    this.router.navigate(['/category-products', categoryId]);
  }
}


