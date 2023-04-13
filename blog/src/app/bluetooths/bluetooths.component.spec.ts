import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothsComponent } from './bluetooths.component';

describe('BluetoothsComponent', () => {
  let component: BluetoothsComponent;
  let fixture: ComponentFixture<BluetoothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluetoothsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluetoothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
