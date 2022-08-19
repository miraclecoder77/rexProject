import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBreakdownComponent } from './full-breakdown.component';

describe('FullBreakdownComponent', () => {
  let component: FullBreakdownComponent;
  let fixture: ComponentFixture<FullBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBreakdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
