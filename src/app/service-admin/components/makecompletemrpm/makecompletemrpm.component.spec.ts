import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompletemrpmComponent } from './makecompletemrpm.component';

describe('MakecompletemrpmComponent', () => {
  let component: MakecompletemrpmComponent;
  let fixture: ComponentFixture<MakecompletemrpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompletemrpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompletemrpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
