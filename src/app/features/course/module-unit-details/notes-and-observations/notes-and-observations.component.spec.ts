import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAndObservationsComponent } from './notes-and-observations.component';

describe('NotesAndObservationsComponent', () => {
  let component: NotesAndObservationsComponent;
  let fixture: ComponentFixture<NotesAndObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAndObservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesAndObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
