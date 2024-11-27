import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseComboModuleListComponent } from './purchase-combo-module-list.component';

describe('PurchaseComboModuleListComponent', () => {
  let component: PurchaseComboModuleListComponent;
  let fixture: ComponentFixture<PurchaseComboModuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseComboModuleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseComboModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
