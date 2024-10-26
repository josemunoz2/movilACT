import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicesHistoryPage } from './invoices-history.page';

describe('InvoicesHistoryPage', () => {
  let component: InvoicesHistoryPage;
  let fixture: ComponentFixture<InvoicesHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
