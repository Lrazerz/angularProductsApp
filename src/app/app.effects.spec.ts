import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductEffects } from './effects';
import { ProductsService } from './get-products-service/get-products.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
      providers: [
        ProductEffects,
        ProductsService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProductEffects>(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
