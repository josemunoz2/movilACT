import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShippingDetailsPage } from './shipping-details.page';

describe('ShippingDetailsPage', () => {
  let component: ShippingDetailsPage;
  let fixture: ComponentFixture<ShippingDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
