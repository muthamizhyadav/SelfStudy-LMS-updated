import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCertificatesComponent } from './upcoming-certificates.component';

describe('UpcomingCertificatesComponent', () => {
  let component: UpcomingCertificatesComponent;
  let fixture: ComponentFixture<UpcomingCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
