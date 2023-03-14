import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiElevatorViewComponent } from './addi-elevator-view.component';

describe('AddiElevatorViewComponent', () => {
  let component: AddiElevatorViewComponent;
  let fixture: ComponentFixture<AddiElevatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddiElevatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddiElevatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
