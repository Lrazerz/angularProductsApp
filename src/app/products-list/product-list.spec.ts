import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsList } from './products-list.component';
import { ProductsFilteringComponent} from '../products-filtering/products-filtering.component';
import { AppMaterialModule } from '../app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../get-products-service/get-products.service';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { productsReducer } from '../products.reducer';




const routes: Routes =[
    { path: '', component: ProductsList, pathMatch: "full" }]

describe('ProductsList', () => {
    let component: ProductsList;
    let fixture: ComponentFixture<ProductsList>;
    let service: ProductsService;
    let spy: jasmine.Spy;
    let mockProduct: {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ StoreModule.forRoot({ products: productsReducer }), HttpClientModule, FormsModule, AppMaterialModule, BrowserAnimationsModule, RouterModule.forRoot(routes) ],
            declarations: [ ProductsList, ProductsFilteringComponent ],
            providers: [ProductsService]
        })
        .compileComponents()
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsList);
        component = fixture.componentInstance;
        //injector - сущность, которая позволяет создавать все наши зависимости для компонента
        service = fixture.debugElement.injector.get(ProductsService);
        // нужен шпион на методе getOne
        mockProduct = {name: 'Taiga', weight: 30 };
        spy = spyOn(service, 'fetchProducts').and.returnValues(of({}));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //Проверка что был вызван
    it('should call ProductsService', () => {
        component.MethodToTesting();
        expect(spy.calls.any()).toBeTruthy();
    });

    it('should set Product as Object', () => {
        component.MethodToTesting();
        expect(component.displayProducts$).toEqual([]);
    })
})





