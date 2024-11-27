import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCourseAssignmentStatusComponent } from './view-all-course-assignment-status.component';

describe('ViewAllCourseAssignmentStatusComponent', () => {
  let component: ViewAllCourseAssignmentStatusComponent;
  let fixture: ComponentFixture<ViewAllCourseAssignmentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCourseAssignmentStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCourseAssignmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
