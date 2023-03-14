import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAuditComponent } from './report-audit.component';

describe('ReportAuditComponent', () => {
  let component: ReportAuditComponent;
  let fixture: ComponentFixture<ReportAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
