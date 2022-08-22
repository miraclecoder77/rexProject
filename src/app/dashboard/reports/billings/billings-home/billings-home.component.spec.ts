import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsHomeComponent } from './billings-home.component';

describe('BillingsHomeComponent', () => {
  let component: BillingsHomeComponent;
  let fixture: ComponentFixture<BillingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
