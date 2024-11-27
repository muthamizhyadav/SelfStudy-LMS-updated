import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMilestoneComponent } from './upcoming-milestone.component';

describe('UpcomingMilestoneComponent', () => {
  let component: UpcomingMilestoneComponent;
  let fixture: ComponentFixture<UpcomingMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMilestoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
