import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCertificateComponent } from './sample-certificate.component';

describe('SampleCertificateComponent', () => {
  let component: SampleCertificateComponent;
  let fixture: ComponentFixture<SampleCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
