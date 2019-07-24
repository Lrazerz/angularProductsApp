import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from './get-products-service/get-products.service';
 
@Injectable()
export class ProductEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Products Page] Load Products'),
    mergeMap(() => this.productsService.fetchProducts()
      .pipe(
        map(products => ({ type: '[Products API] Products Loaded Success', payload: products })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}