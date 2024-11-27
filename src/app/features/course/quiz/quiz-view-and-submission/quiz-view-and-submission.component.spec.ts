import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewAndSubmissionComponent } from './quiz-view-and-submission.component';

describe('QuizViewAndSubmissionComponent', () => {
  let component: QuizViewAndSubmissionComponent;
  let fixture: ComponentFixture<QuizViewAndSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizViewAndSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizViewAndSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
