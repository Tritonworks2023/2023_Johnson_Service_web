import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiElevatorListComponent } from './addi-elevator-list.component';

describe('AddiElevatorListComponent', () => {
  let component: AddiElevatorListComponent;
  let fixture: ComponentFixture<AddiElevatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddiElevatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddiElevatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
