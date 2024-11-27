import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialReadingComponent } from './essential-reading.component';

describe('EssentialReadingComponent', () => {
  let component: EssentialReadingComponent;
  let fixture: ComponentFixture<EssentialReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
