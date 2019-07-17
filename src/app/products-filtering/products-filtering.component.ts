import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router'

import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';





// need group filter after reload
@Component({
  selector: 'app-products-filtering',
  templateUrl: './products-filtering.component.html',
  styleUrls: ['./products-filtering.component.css']
})
export class ProductsFilteringComponent implements OnInit, OnDestroy, 
OnChanges {


  
  @Input() displayProducts: any;
  @Input() products: any;
  @Input() groupOfProducts: any;

  private querySubscription: Subscription;
    
  // searchquery binded to routing and input
  searchQuery;
  radioButState: string;
  searchGroupQuery;
  lastCheckedButton;

  // check reload
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
  
   // search for input value
    applyFilter(filterValue: string) {
    if(filterValue !== undefined && this.displayProducts !== undefined) {
        this.displayProducts.filter = filterValue.trim().toLowerCase();
        this.updateRoute();
    }
    }

    // group filter ( radiobutton )
    groupFilterRadio(event) {
        this.lastCheckedButton = event;
        this.displayProducts.data = this.products.filter(el => el['bsr_category'] === event.value);
    }

    // добавить все группы
    clearFilters() {
        this.applyFilter("");
        this.searchQuery = "";
        this.searchGroupQuery = "";
        this.radioButState = "";
        // return data, deleted to group filter
        this.displayProducts.data = this.products;
        this.updateRoute();
    }

    // update route on input changes
    updateRoute() {
      // If route have no parameters queries, just route to main page
      if(!(this.searchQuery || this.searchGroupQuery))
        this.router.navigate(['']);

      else {
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

    ngOnInit() {
    }

    ngOnChanges(): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      if(this.groupOfProducts && this.reloadCheckDone === false && (this.searchQuery || this.searchGroupQuery)) {
        this.applyFilter(this.searchQuery);
        this.reloadCheckDone = true;
        // reload radio-button with group filter state
        this.radioButState = this.searchGroupQuery;
        // "change" event dont occurs, when we change button from comp (?)
        console.log(this.searchGroupQuery);
        this.displayProducts.data = this.products.filter(el => el['bsr_category'] === this.searchGroupQuery);
      }
    }

    ngOnDestroy() {
    this.querySubscription.unsubscribe();
    }
}
