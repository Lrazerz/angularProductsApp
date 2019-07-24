import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductEffects } from './effects';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ]
    });

//     effects = TestBed.get<ProductEffects>(ProductEffects);
//   });

//   it('should be created', () => {
//     expect(effects).toBeTruthy();
//   });
});
