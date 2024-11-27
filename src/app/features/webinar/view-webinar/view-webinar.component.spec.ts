import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebinarComponent } from './view-webinar.component';

describe('ViewWebinarComponent', () => {
  let component: ViewWebinarComponent;
  let fixture: ComponentFixture<ViewWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWebinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
