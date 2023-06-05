import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanPdfviewComponent } from './van-pdfview.component';

describe('VanPdfviewComponent', () => {
  let component: VanPdfviewComponent;
  let fixture: ComponentFixture<VanPdfviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanPdfviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanPdfviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
