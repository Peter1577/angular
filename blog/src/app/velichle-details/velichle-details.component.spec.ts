import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelichleDetailsComponent } from './velichle-details.component';

describe('VelichleDetailsComponent', () => {
  let component: VelichleDetailsComponent;
  let fixture: ComponentFixture<VelichleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelichleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelichleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
