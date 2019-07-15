import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-filtering',
  templateUrl: './products-filtering.component.html',
  styleUrls: ['./products-filtering.component.css']
})
export class ProductsFilteringComponent implements OnInit {

  constructor() { }

  
  @Input() displayProducts: any;
  @Input() products: any;
  @Input() groupOfProducts: any;
  

  applyFilter(filterValue: string) {
    this.displayProducts.filter = filterValue.trim().toLowerCase();

    console.log(this.displayProducts);
  }

  lastCheckedButton;
    
    // po radiobutton
    toFilterCheckBox(event) {
      this.lastCheckedButton = event;
      this.displayProducts.data = this.products.filter(el => el['bsr_category'] === event.value);
    }

    clearFilters() {
      console.log(this.lastCheckedButton)
      this.lastCheckedButton.source.checked = false;
      document.querySelector('input').value = "";
      console.log(document.querySelectorAll('.filter-category-button')[0])
      document.querySelectorAll('.filter-category-button').forEach( el => {(<HTMLInputElement>el).checked = false;});
      // Возвращаем данные
      this.displayProducts.data = this.products;
      this.applyFilter("");
    }

  ngOnInit() {
  }

}
