import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetakePaymentComponent } from './retake-payment.component';

describe('RetakePaymentComponent', () => {
  let component: RetakePaymentComponent;
  let fixture: ComponentFixture<RetakePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetakePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetakePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
