import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledCourseDetailComponent } from './enrolled-course-detail.component';

describe('EnrolledCourseDetailComponent', () => {
  let component: EnrolledCourseDetailComponent;
  let fixture: ComponentFixture<EnrolledCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolledCourseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
