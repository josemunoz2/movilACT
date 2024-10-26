import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingDetailsPage } from './shipping-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingDetailsPageRoutingModule {}

