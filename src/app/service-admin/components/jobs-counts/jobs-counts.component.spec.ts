import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCountsComponent } from './jobs-counts.component';

describe('JobsCountsComponent', () => {
  let component: JobsCountsComponent;
  let fixture: ComponentFixture<JobsCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
