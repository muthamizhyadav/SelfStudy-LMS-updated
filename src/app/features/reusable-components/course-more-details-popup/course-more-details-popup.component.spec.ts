import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMoreDetailsPopupComponent } from './course-more-details-popup.component';

describe('CourseMoreDetailsPopupComponent', () => {
  let component: CourseMoreDetailsPopupComponent;
  let fixture: ComponentFixture<CourseMoreDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseMoreDetailsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseMoreDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
