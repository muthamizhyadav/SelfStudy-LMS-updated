import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralScreenComponent } from './referral-screen.component';

describe('ReferralScreenComponent', () => {
  let component: ReferralScreenComponent;
  let fixture: ComponentFixture<ReferralScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
