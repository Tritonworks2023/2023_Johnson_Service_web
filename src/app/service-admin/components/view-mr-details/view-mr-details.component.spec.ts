import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMrDetailsComponent } from './view-mr-details.component';

describe('ViewMrDetailsComponent', () => {
  let component: ViewMrDetailsComponent;
  let fixture: ComponentFixture<ViewMrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
