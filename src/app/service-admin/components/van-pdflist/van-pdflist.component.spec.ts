import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanPdflistComponent } from './van-pdflist.component';

describe('VanPdflistComponent', () => {
  let component: VanPdflistComponent;
  let fixture: ComponentFixture<VanPdflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanPdflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanPdflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
