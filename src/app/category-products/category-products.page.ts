import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';  

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  quantity: number;
}

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  products: Product[] = [];
  categoryId: number = 0;

  allProducts: Product[] = [
    { id: 1, name: 'NVIDIA RTX 3080', price: 899, imageUrl: 'assets/grafica/3080.jpg', categoryId: 1, quantity: 1 },
    { id: 2, name: 'NVIDIA RTX 3070', price: 699, imageUrl: 'assets/grafica/3070.jpg', categoryId: 1, quantity: 1 },
    { id: 3, name: 'NVIDIA RTX 3060', price: 499, imageUrl: 'assets/grafica/30600.png', categoryId: 1, quantity: 1 },
    { id: 4, name: 'AMD RX 6900 XT', price: 999, imageUrl: 'assets/grafica/AMD RX 6900 XT.png', categoryId: 1, quantity: 1 },
    { id: 5, name: 'AMD RX 6800 XT', price: 849, imageUrl: 'assets/grafica/AMD RX 6800 XT.png', categoryId: 1, quantity: 1 },
    { id: 6, name: 'AMD RX 6700 XT', price: 699, imageUrl: 'assets/grafica/AMD RX 6700 XT.png', categoryId: 1, quantity: 1 },
    { id: 7, name: 'AMD RX 6600 XT', price: 499, imageUrl: 'assets/grafica/AMD RX 6600 XT.png', categoryId: 1, quantity: 1 },
    { id: 8, name: 'NVIDIA GTX 1660 Ti', price: 299, imageUrl: 'assets/grafica/NVIDIA GTX 1660 Ti.png', categoryId: 1, quantity: 1 },
    { id: 9, name: 'NVIDIA GTX 1650', price: 199, imageUrl: 'assets/grafica/NVIDIA GTX 1650.png', categoryId: 1, quantity: 1 },

    { id: 10, name: 'Teclado Mecánico Razer', price: 129, imageUrl: 'assets/teclado/Teclado Mecánico Razer.png', categoryId: 2, quantity: 1 },
    { id: 11, name: 'Teclado Logitech G Pro', price: 149, imageUrl: 'assets/teclado/Teclado Logitech G Pro.png', categoryId: 2, quantity: 1 },
    { id: 12, name: 'Teclado Corsair K95', price: 199, imageUrl: 'assets/teclado/Teclado Corsair K95.png', categoryId: 2, quantity: 1 },
    { id: 13, name: 'Teclado HyperX Alloy', price: 99, imageUrl: 'assets/teclado/Teclado HyperX Alloy.png', categoryId: 2, quantity: 1 },
    { id: 14, name: 'Teclado SteelSeries Apex', price: 179, imageUrl: 'assets/teclado/Teclado SteelSeries Apex.png', categoryId: 2, quantity: 1 },
    { id: 15, name: 'Teclado Redragon K552', price: 59, imageUrl: 'assets/teclado/Teclado Redragon K552.png', categoryId: 2, quantity: 1 },
    { id: 16, name: 'Teclado Cougar Ultimus', price: 89, imageUrl: 'assets/teclado/Teclado Cougar Ultimus.png', categoryId: 2, quantity: 1 },
    { id: 17, name: 'Teclado Cooler Master MK730', price: 129, imageUrl: 'assets/teclado/Teclado Cooler Master MK730.png', categoryId: 2, quantity: 1 },
    { id: 18, name: 'Teclado Aukey KM-G12', price: 79, imageUrl: 'assets/teclado/Teclado Aukey KM-G12.png', categoryId: 2, quantity: 1 },

    { id: 19, name: 'Logitech G Pro Wireless', price: 149, imageUrl: 'assets/mouse/Logitech G Pro Wireless.png', categoryId: 3, quantity: 1 },
    { id: 20, name: 'Razer DeathAdder Elite', price: 79, imageUrl: 'assets/mouse/Razer DeathAdder Elite.png', categoryId: 3, quantity: 1 },
    { id: 21, name: 'SteelSeries Rival 600', price: 99, imageUrl: 'assets/mouse/SteelSeries Rival 600.png', categoryId: 3, quantity: 1 },
    { id: 22, name: 'Corsair M65 Pro', price: 89, imageUrl: 'assets/mouse/Corsair M65 Pro.png', categoryId: 3, quantity: 1 },
    { id: 23, name: 'Logitech G502', price: 89, imageUrl: 'assets/mouse/Logitech G502.png', categoryId: 3, quantity: 1 },
    { id: 24, name: 'Cooler Master MM710', price: 59, imageUrl: 'assets/mouse/Cooler Master MM710.png', categoryId: 3, quantity: 1 },
    { id: 25, name: 'Razer Viper Ultimate', price: 149, imageUrl: 'assets/mouse/Razer Viper Ultimate.png', categoryId: 3, quantity: 1 },
    { id: 26, name: 'HyperX Pulsefire Haste', price: 49, imageUrl: 'assets/mouse/HyperX Pulsefire Haste.png', categoryId: 3, quantity: 1 },
    { id: 27, name: 'Glorious Model O', price: 79, imageUrl: 'assets/mouse/Glorious Model O.png', categoryId: 3, quantity: 1 },

    { id: 28, name: 'HyperX Cloud II', price: 99, imageUrl: 'assets/audifonos/HyperX Cloud II.png', categoryId: 4, quantity: 1 },
    { id: 29, name: 'Razer Kraken X', price: 69, imageUrl: 'assets/audifonos/Razer Kraken X.png', categoryId: 4, quantity: 1 },
    { id: 30, name: 'SteelSeries Arctis 7', price: 149, imageUrl: 'assets/audifonos/SteelSeries Arctis 7.png', categoryId: 4, quantity: 1 },
    { id: 31, name: 'Corsair HS70 Pro', price: 109, imageUrl: 'assets/audifonos/Corsair HS70 Pro.png', categoryId: 4, quantity: 1 },
    { id: 32, name: 'Logitech G733', price: 129, imageUrl: 'assets/audifonos/Logitech G733.png', categoryId: 4, quantity: 1 },
    { id: 33, name: 'Sennheiser HD 599', price: 199, imageUrl: 'assets/audifonos/Sennheiser HD 599.png', categoryId: 4, quantity: 1 },
    { id: 34, name: 'Audio-Technica ATH-M50x', price: 149, imageUrl: 'assets/audifonos/Audio-Technica ATH-M50x.png', categoryId: 4, quantity: 1 },
    { id: 35, name: 'Beyerdynamic DT 990 Pro', price: 179, imageUrl: 'assets/audifonos/Beyerdynamic DT 990 Pro.png', categoryId: 4, quantity: 1 },
    { id: 36, name: 'Sony WH-1000XM4', price: 299, imageUrl: 'assets/audifonos/Sony WH-1000XM4.png', categoryId: 4, quantity: 1 }
  ];

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
    private toastController: ToastController  
  ) {}

  ngOnInit() {
    const categoryIdParam = this.route.snapshot.paramMap.get('id');
    this.categoryId = categoryIdParam ? +categoryIdParam : 0;

    this.loadProducts();
  }

  loadProducts() {

    this.products = this.allProducts.filter(product => product.categoryId === this.categoryId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.presentToast(`${product.name} agregado al carrito`);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }
}
