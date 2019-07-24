import { createAction, props } from '@ngrx/store';

export const getProducts = createAction('[Products API] Products Loaded Success', props<{payload:any}>());
