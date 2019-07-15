import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilteringComponent } from './products-filtering.component';

describe('ProductsFilteringComponent', () => {
  let component: ProductsFilteringComponent;
  let fixture: ComponentFixture<ProductsFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
