import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDataServComponent } from './temp-data-serv.component';

describe('TempDataServComponent', () => {
  let component: TempDataServComponent;
  let fixture: ComponentFixture<TempDataServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDataServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDataServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
