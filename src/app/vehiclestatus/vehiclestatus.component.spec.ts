import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclestatusComponent } from './vehiclestatus.component';

describe('VehiclestatusComponent', () => {
  let component: VehiclestatusComponent;
  let fixture: ComponentFixture<VehiclestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
