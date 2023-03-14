import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiEscalatorViewComponent } from './addi-escalator-view.component';

describe('AddiEscalatorViewComponent', () => {
  let component: AddiEscalatorViewComponent;
  let fixture: ComponentFixture<AddiEscalatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddiEscalatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddiEscalatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
