import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShippingDetailsPageRoutingModule } from './shipping-details-routing.module';
import { ShippingDetailsPage } from './shipping-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingDetailsPageRoutingModule
  ],
  declarations: [ShippingDetailsPage]
})
export class ShippingDetailsPageModule {}
