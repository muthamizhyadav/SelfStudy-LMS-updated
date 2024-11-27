import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSubmissionComponent } from './assessment-submission.component';

describe('AssessmentSubmissionComponent', () => {
  let component: AssessmentSubmissionComponent;
  let fixture: ComponentFixture<AssessmentSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
