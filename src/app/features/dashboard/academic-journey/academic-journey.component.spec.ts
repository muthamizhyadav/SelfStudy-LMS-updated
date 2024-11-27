import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicJourneyComponent } from './academic-journey.component';

describe('AcademicJourneyComponent', () => {
  let component: AcademicJourneyComponent;
  let fixture: ComponentFixture<AcademicJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
