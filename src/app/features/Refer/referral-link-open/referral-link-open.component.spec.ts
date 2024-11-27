import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralLinkOpenComponent } from './referral-link-open.component';

describe('ReferralLinkOpenComponent', () => {
  let component: ReferralLinkOpenComponent;
  let fixture: ComponentFixture<ReferralLinkOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralLinkOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralLinkOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
