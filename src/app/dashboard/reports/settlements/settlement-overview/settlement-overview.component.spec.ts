import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementOverviewComponent } from './settlement-overview.component';

describe('SettlementOverviewComponent', () => {
  let component: SettlementOverviewComponent;
  let fixture: ComponentFixture<SettlementOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
