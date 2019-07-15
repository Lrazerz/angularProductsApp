// OnInit - для запуска функции on page load
import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductsService } from './products-list.service'
// To sort table
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface AmazonProduct {
  name: string;
  brand: string;
  price: number;
  stars: number;
  'bsr_category': string;
}

@Component({
    // селектор для замены
    selector: 'products-list',
    templateUrl: './products-list.html',
    styleUrls: [ './products-list.css' ]
  })
  export class ProductsList implements OnInit {
    //was object[]
    products$: any;
    // Products to display
    displayProducts$: any;

    groupList$: any;
  
    constructor(private productsService: ProductsService){}
  
    
     
    // Возвращаем только объект с продуктами с JSON файла в products$
    fetchProducts(): void {
      this.productsService.fetchProducts().subscribe(data => {
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
   
    //Старая фильтрация ( через input) через ts
    // filterProducts(): void {
    //   if(this.products$ !== undefined)
    //   {
    //     // фильтруем элементы
    //     this.displayProducts$ = this.products$.filter( (element) => 
    //       {
    //         // возвращаем индекс вхождения нашей подстроки в строку с именем элемента
    //         // ~ - вместо проверки на равенство 0
    //         return ~(""+element["name"]).toLowerCase().indexOf((<HTMLInputElement>document.querySelector('.filter-block__search')).value.toLowerCase())
    //     })
  
    //     // Показываем подсказку, только если нету продуктов с таким фильтром
    //     if(this.displayProducts$.length == 0)
    //     {
    //       console.log(this.displayProducts$);
    //       document.querySelector('.empty-search-tip').classList.remove('visually-hidden');
    //     }
    //     else {
    //       document.querySelector('.empty-search-tip').classList.add('visually-hidden');
    //     }
    //     this.displayProducts$ = new MatTableDataSource(this.displayProducts$);
    //     this.displayProducts$.sort = this.sort;
    //   }
    // }

    applyFilter(filterValue: string) {
      this.displayProducts$.filter = filterValue.trim().toLowerCase();
      console.log(this.displayProducts$);
    }

    // Проверка на пустоту списка
    listIsEmpty(): boolean {
      return !(this.displayProducts$.length as boolean);
    }
    
    // Тут задаем и порядок столбцов
    displayedColumns: string[] = ['name', 'brand', 'price', 'bsr_category', 'stars'];

    
    lastCheckedButton;
    
    // po radiobutton
    toFilterCheckBox(event) {
      this.lastCheckedButton = event;
      this.displayProducts$.data = this.products$.filter(el => el['bsr_category'] === event.value);
    }

    clearFilters() {
      console.log(this.lastCheckedButton)
      this.lastCheckedButton.source.checked = false;
      document.querySelector('input').value = "";
      console.log(document.querySelectorAll('.filter-category-button')[0])
      document.querySelectorAll('.filter-category-button').forEach( el => {(<HTMLInputElement>el).checked = false;});
      // Возвращаем данные
      this.displayProducts$.data = this.products$;
      this.applyFilter("");
    }




    // Для сортировки при нажатии на th
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
      this.fetchProducts();
    }
    
}