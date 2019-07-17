// OnInit - для запуска функции on page load
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { ProductsService } from '../get-products-service/get-products.service'
// To sort table
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
    // селектор для замены
    selector: 'products-list',
    templateUrl: './products-list.html',
    styleUrls: [ './products-list.css' ]
  })
  export class ProductsList implements OnInit, OnDestroy {
    //was object[]
    products$: any;
    // Products to display
    displayProducts$: any;

    groupList$: any;

    radioButtonState: string;

    
    private httpSubscription: Subscription;
  
    constructor(private productsService: ProductsService){}
  
    
     
    // Возвращаем только объект с продуктами с JSON файла в products$
    fetchProducts(): void {
      this.httpSubscription = this.productsService.fetchProducts().subscribe(data => {
        this.displayProducts$=this.products$=data["products"]
        // to sort
        this.displayProducts$ = new MatTableDataSource(this.displayProducts$);
        this.displayProducts$.sort = this.sort;
        // to group filter
        this.groupList$ = this.products$.map(el => el['bsr_category']);
        // only unique
        this.groupList$ = [...new Set(this.groupList$)];
      });
    }

    // check for list empty
    listIsEmpty(): boolean {
      return !(this.displayProducts$.length as boolean);
    }
    
    // column order
    displayedColumns: string[] = ['name', 'brand', 'price', 'bsr_category', 'stars'];

    // sorting on click on th
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit(): void {
      this.fetchProducts();
    }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.httpSubscription.unsubscribe();
    }
}