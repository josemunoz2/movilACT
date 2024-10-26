import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  getProducts(): Observable<any[]> {
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(product: any) {
    return this.firestore.collection('products').add(product);
  }

  deleteProduct(productId: string) {
    return this.firestore.collection('products').doc(productId).delete();
  }

  updateProduct(productId: string, productData: any) {
    return this.firestore.collection('products').doc(productId).update(productData);
  }
}
