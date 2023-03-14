import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompletemrbdComponent } from './makecompletemrbd.component';

describe('MakecompletemrbdComponent', () => {
  let component: MakecompletemrbdComponent;
  let fixture: ComponentFixture<MakecompletemrbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompletemrbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompletemrbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
