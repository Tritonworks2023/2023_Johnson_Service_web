import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFormCountComponent } from './service-form-count.component';

describe('ServiceFormCountComponent', () => {
  let component: ServiceFormCountComponent;
  let fixture: ComponentFixture<ServiceFormCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFormCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFormCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
