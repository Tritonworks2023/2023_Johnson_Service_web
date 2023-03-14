import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecompleteadComponent } from './makecompletead.component';

describe('MakecompleteadComponent', () => {
  let component: MakecompleteadComponent;
  let fixture: ComponentFixture<MakecompleteadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecompleteadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecompleteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
