import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any> {
    return this.http.get('https://demo8421975.mockable.io/products');
  }
}