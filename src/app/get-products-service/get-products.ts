// import { ProductsService } from '../get-products-service/get-products.service'
// import { Injectable } from '@angular/core';

// let products: {}[];
// let groupsOfProducts: string[];


// @Injectable()
// export class Products {

//     constructor(private productsService: ProductsService){}


//     // Возвращаем только объект с продуктами с JSON файла в products$
//     fetchProducts() {
//             this.productsService.fetchProducts().subscribe(data => {
//             products=data["products"]
//             // to group filter, only unique
//             groupsOfProducts = [...new Set(this.products.map(el => el['bsr_category']))] as string[];
//         });
//     }
// }