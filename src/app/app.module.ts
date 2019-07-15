// Этот файл - модуль, который относится к Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductsService } from './get-products-service/get-products.service'
import { ProductsList } from './products-list/products-list.component'
import { AppMaterialModule } from './app-material.module';
import { ProductsFilteringComponent } from './products-filtering/products-filtering.component';

// декоратор для класса
@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, AppMaterialModule ],
  // Наш сервис, который получает JSON
  providers: [ ProductsService ],
  // Потому что AppComponent будет являться частью нашего модуля
  declarations: [ AppComponent, ProductsList, ProductsFilteringComponent ],
  // корневые компоненты, с которых начнется построение приложения
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
