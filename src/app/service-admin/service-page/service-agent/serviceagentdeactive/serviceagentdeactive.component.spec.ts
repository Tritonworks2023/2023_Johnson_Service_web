import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceagentdeactiveComponent } from './serviceagentdeactive.component';

describe('ServiceagentdeactiveComponent', () => {
  let component: ServiceagentdeactiveComponent;
  let fixture: ComponentFixture<ServiceagentdeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceagentdeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceagentdeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
