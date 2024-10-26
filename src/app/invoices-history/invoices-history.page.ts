import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoices-history',
  templateUrl: './invoices-history.page.html',
  styleUrls: ['./invoices-history.page.scss'],
})
export class InvoicesHistoryPage implements OnInit {

  invoices: any[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    this.loadInvoices();
  }

 
  loadInvoices() {
    const storedInvoices = localStorage.getItem('invoices');
    if (storedInvoices) {
      this.invoices = JSON.parse(storedInvoices);
    }
  }

 
  clearInvoices() {
    localStorage.removeItem('invoices');
    this.invoices = [];
    alert('Historial de boletas eliminado con éxito');
  }

 
  deleteInvoice(index: number) {
    this.invoices.splice(index, 1);  
    localStorage.setItem('invoices', JSON.stringify(this.invoices));  
  }

 
  goBack() {
    this.location.back();
  }
}
