import { Component } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products$: [];
  // Products to display
  displayProducts$: {name:string} [];

  constructor(private productsService: ProductsService){}

  /**
   * Возвращаем только объект с продуктами с JSON файла в products$
   */
  fetchProducts() {
    this.productsService.fetchProducts().subscribe(data => this.displayProducts$=this.products$=data["products"]);
  }


  filterProducts() {
    if(this.products$ !== undefined)
    {
      // фильтруем элементы
      this.displayProducts$ = this.products$.filter( (element) => 
        {
          // возвращаем индекс вхождения нашей подстроки в строку с именем элемента
          // ~ - вместо проверки на равенство -1
          return ~(""+element["name"]).toLowerCase().indexOf((<HTMLInputElement>document.querySelector('.filter-block__search')).value.toLowerCase())
      })

      // Показываем подсказку, только если нету продуктов с таким фильтром
      if(this.displayProducts$.length == 0)
      {
        console.log(this.displayProducts$);
        document.querySelector('.empty-search-tip').classList.remove('visually-hidden');
      }
      else {
        document.querySelector('.empty-search-tip').classList.add('visually-hidden');
      }
    }
  }
}
