import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentFeedbackComponent } from './view-student-feedback.component';

describe('ViewStudentFeedbackComponent', () => {
  let component: ViewStudentFeedbackComponent;
  let fixture: ComponentFixture<ViewStudentFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStudentFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
