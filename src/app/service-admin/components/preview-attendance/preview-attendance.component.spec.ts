import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAttendanceComponent } from './preview-attendance.component';

describe('PreviewAttendanceComponent', () => {
  let component: PreviewAttendanceComponent;
  let fixture: ComponentFixture<PreviewAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
