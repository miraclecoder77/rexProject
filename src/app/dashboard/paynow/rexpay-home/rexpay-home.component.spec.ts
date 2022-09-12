import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexpayHomeComponent } from './rexpay-home.component';

describe('RexpayHomeComponent', () => {
  let component: RexpayHomeComponent;
  let fixture: ComponentFixture<RexpayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexpayHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexpayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
