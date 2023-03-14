import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompletepmComponent } from './makecompletepm.component';

describe('MakecompletepmComponent', () => {
  let component: MakecompletepmComponent;
  let fixture: ComponentFixture<MakecompletepmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompletepmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompletepmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
