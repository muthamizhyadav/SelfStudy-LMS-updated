import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStudentFeedbackComponent } from './write-student-feedback.component';

describe('WriteStudentFeedbackComponent', () => {
  let component: WriteStudentFeedbackComponent;
  let fixture: ComponentFixture<WriteStudentFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteStudentFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteStudentFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
