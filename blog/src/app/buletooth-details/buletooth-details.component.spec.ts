import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuletoothDetailsComponent } from './buletooth-details.component';

describe('BuletoothDetailsComponent', () => {
  let component: BuletoothDetailsComponent;
  let fixture: ComponentFixture<BuletoothDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuletoothDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuletoothDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
