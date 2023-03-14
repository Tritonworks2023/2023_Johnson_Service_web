import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiEscalatorListComponent } from './addi-escalator-list.component';

describe('AddiEscalatorListComponent', () => {
  let component: AddiEscalatorListComponent;
  let fixture: ComponentFixture<AddiEscalatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddiEscalatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddiEscalatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
