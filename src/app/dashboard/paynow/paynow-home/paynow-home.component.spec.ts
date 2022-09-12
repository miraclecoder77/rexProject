import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynowHomeComponent } from './paynow-home.component';

describe('PaynowHomeComponent', () => {
  let component: PaynowHomeComponent;
  let fixture: ComponentFixture<PaynowHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynowHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
