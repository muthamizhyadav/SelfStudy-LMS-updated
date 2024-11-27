import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOverallRatingComponent } from './view-overall-rating.component';

describe('ViewOverallRatingComponent', () => {
  let component: ViewOverallRatingComponent;
  let fixture: ComponentFixture<ViewOverallRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOverallRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOverallRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
