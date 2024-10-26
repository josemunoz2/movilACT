import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesHistoryPageRoutingModule } from './invoices-history-routing.module';

import { InvoicesHistoryPage } from './invoices-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesHistoryPageRoutingModule
  ],
  declarations: [InvoicesHistoryPage]
})
export class InvoicesHistoryPageModule {}
