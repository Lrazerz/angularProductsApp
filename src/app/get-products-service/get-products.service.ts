import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

// Возвращаем Observable
  fetchProducts(): Observable<any> {
    // return this.http.get('https://demo8421975.mockable.io/products');
    return this.http.get('https://5d32e98ebecf3e0014ae5438.mockapi.io/products/products');
   
}
}