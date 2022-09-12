import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexpayComponent } from './rexpay.component';

describe('RexpayComponent', () => {
  let component: RexpayComponent;
  let fixture: ComponentFixture<RexpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
