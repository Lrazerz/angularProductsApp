import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsService } from './get-products-service/get-products.service'
import { ProductsList } from './products-list/products-list.component'
import { AppMaterialModule } from './app-material.module';
import { ProductsFilteringComponent } from './products-filtering/products-filtering.component';

import { Routes, RouterModule } from '@angular/router';


import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects'

import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';

const routes: Routes =[
  { path: '', component: ProductsList, pathMatch: "full" }
]

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule, 
                BrowserAnimationsModule, AppMaterialModule,
                RouterModule.forRoot(routes), 
                StoreModule.forRoot({ products: productsReducer }), 
                EffectsModule.forRoot([ProductEffects]) 
            ],
    providers: [ ProductsService ],
    declarations: [ AppComponent, ProductsList, ProductsFilteringComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
