import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompleteprComponent } from './makecompletepr.component';

describe('MakecompleteprComponent', () => {
  let component: MakecompleteprComponent;
  let fixture: ComponentFixture<MakecompleteprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompleteprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompleteprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
