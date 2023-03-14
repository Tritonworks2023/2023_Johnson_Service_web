import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompletebdComponent } from './makecompletebd.component';

describe('MakecompletebdComponent', () => {
  let component: MakecompletebdComponent;
  let fixture: ComponentFixture<MakecompletebdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompletebdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompletebdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
