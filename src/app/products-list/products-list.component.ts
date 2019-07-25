import { Component, OnInit, ViewChild, OnDestroy, DoCheck } from '@angular/core';
import { ProductsService } from '../get-products-service/get-products.service'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.html',
    styleUrls: [ './products-list.css' ]
  })
  export class ProductsList implements OnInit, OnDestroy, DoCheck {
    products$: [];
    displayProducts$: any;
    groupList$: [];
    radioButtonState: string;
    private httpSubscription: Subscription;
    productsNotConverted: boolean = true;

    MethodToTesting() {
        
        this.store.subscribe(data => {this.displayProducts$ = data.products})
    }

    constructor(private productsService: ProductsService,
                private store: Store<{products: any }> ) {
                // this.store.subscribe(data => {this.displayProducts$ = data.products})
                this.MethodToTesting();
    }

    ngDoCheck(): void {
        if(this.productsNotConverted && this.displayProducts$.length)
            this.ConvertToSortable();

    }

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    ConvertToSortable() {
        this.products$ = this.displayProducts$;
        // to sort
        this.displayProducts$ = new MatTableDataSource(this.displayProducts$);
        this.displayProducts$.sort = this.sort;
        // to group filter
        this.groupList$ = <[]>this.products$.map(el => el['bsr_category']);
        
        // only unique
        this.groupList$ = <[]>[...new Set(this.groupList$)];
        // only 1 times
        this.productsNotConverted = false;
    }
    
    displayedColumns: string[] = ['name', 'brand', 'price', 'bsr_category', 'stars'];

    ngOnInit(): void {
      this.store.dispatch({ type: '[Products Page] Load Products' });
    }

    ngOnDestroy(): void {
      this.httpSubscription.unsubscribe();
    }
}