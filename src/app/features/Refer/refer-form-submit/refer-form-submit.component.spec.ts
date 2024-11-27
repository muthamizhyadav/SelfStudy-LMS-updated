import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFormSubmitComponent } from './refer-form-submit.component';

describe('ReferFormSubmitComponent', () => {
  let component: ReferFormSubmitComponent;
  let fixture: ComponentFixture<ReferFormSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferFormSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
