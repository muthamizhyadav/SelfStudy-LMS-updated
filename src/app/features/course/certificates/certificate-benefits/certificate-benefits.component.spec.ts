import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateBenefitsComponent } from './certificate-benefits.component';

describe('CertificateBenefitsComponent', () => {
  let component: CertificateBenefitsComponent;
  let fixture: ComponentFixture<CertificateBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
