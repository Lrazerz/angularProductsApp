import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../app-material.module'
import { ProductsFilteringComponent } from './products-filtering.component';
import { FormsModule } from '@angular/forms';
import { ProductsList } from '../products-list/products-list.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
    { path: '', component: ProductsList, pathMatch: "full" }]

describe('ProductsFilteringComponent', () => {
  let component: ProductsFilteringComponent;
  let fixture: ComponentFixture<ProductsFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilteringComponent, ProductsList ],
      imports: [ BrowserAnimationsModule, AppMaterialModule, RouterModule.forRoot(routes), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
}
)
;
