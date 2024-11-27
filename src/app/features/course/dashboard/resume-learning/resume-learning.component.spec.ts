import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLearningComponent } from './resume-learning.component';

describe('ResumeLearningComponent', () => {
  let component: ResumeLearningComponent;
  let fixture: ComponentFixture<ResumeLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
