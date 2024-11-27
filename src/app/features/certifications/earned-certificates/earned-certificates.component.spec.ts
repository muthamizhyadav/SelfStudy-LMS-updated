import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedCertificatesComponent } from './earned-certificates.component';

describe('EarnedCertificatesComponent', () => {
  let component: EarnedCertificatesComponent;
  let fixture: ComponentFixture<EarnedCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarnedCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarnedCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
