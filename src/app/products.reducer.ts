import { createReducer, on } from '@ngrx/store';
import { getProducts } from './products.actions';


export const initialProductsState = [];

export const productsReducer = createReducer(initialProductsState,
// on(getProducts,(state,action) => {console.log('2');return action.payload['products'];}),
on(getProducts,(state,action) => {console.log('2');return action.payload;}),

);