import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSubmitFormComponent } from './feedback-submit-form.component';

describe('FeedbackSubmitFormComponent', () => {
  let component: FeedbackSubmitFormComponent;
  let fixture: ComponentFixture<FeedbackSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSubmitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
