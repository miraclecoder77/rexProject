import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportHomeComponent } from './sales-report-home.component';

describe('SalesReportHomeComponent', () => {
  let component: SalesReportHomeComponent;
  let fixture: ComponentFixture<SalesReportHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReportHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
