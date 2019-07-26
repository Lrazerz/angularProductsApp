import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router'

import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs'



@Component({
  selector: 'app-products-filtering',
  templateUrl: './products-filtering.component.html',
  styleUrls: ['./products-filtering.component.css']
})
export class ProductsFilteringComponent implements OnInit, OnDestroy, 
OnChanges {
    ngOnInit() {
        
    }
    @Input() displayProducts: any;
    @Input() products: any;
    @Input() groupOfProducts: any;
    private querySubscription: Subscription;
    searchQuery: string;
    radioButState: string;
    searchGroupQuery: string;
    lastCheckedButton: any;

    reloadCheckDone: boolean;
    tofirstIteration: boolean;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.searchQuery = queryParam['search'];
                this.searchGroupQuery = queryParam['group'];
            }
        );
        this.tofirstIteration = false;
        this.reloadCheckDone = false;
    }

    applyFilter(filterValue: string) {
        if(filterValue !== undefined && this.displayProducts !== undefined) {
            this.displayProducts.filter = filterValue.trim().toLowerCase();
            this.updateRoute();
        }
    }

    groupFilterRadio(event) {
        this.lastCheckedButton = event;
        this.displayProducts.data = this.products.filter(el => el['bsr_category'] === event.value);
    }

    clearFilters() {
        this.applyFilter("");
        this.searchQuery = "";
        this.searchGroupQuery = "";
        this.radioButState = "";
        this.showAllGroups();
        this.updateRoute();
    }

    updateRoute() {
        if(!(this.searchQuery || this.searchGroupQuery)) {
            this.router.navigate(['']);
        } else {
        this.router.navigate(
            [''], 
            {
                queryParams:{
                    'search': this.searchQuery, 
                    'group': this.searchGroupQuery
                }
            }
        );
        }
    }

    ngOnChanges(): void {
        if(this.groupOfProducts && this.reloadCheckDone === false && (this.searchQuery || this.searchGroupQuery)) {
        this.applyFilter(this.searchQuery);
        this.reloadCheckDone = true;
        this.radioButState = this.searchGroupQuery;
        if(this.searchGroupQuery)
            this.displayProducts.data = this.products.filter(el => el['bsr_category'] === this.searchGroupQuery);
        }
    }

    showAllGroups() {
        this.displayProducts.data = this.products;
    }

    ngOnDestroy() {
    this.querySubscription.unsubscribe();
    }
}
