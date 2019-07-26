import { TestBed, inject } from '@angular/core/testing'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


import { ProductsService } from './get-products.service'

describe('ProductsService', () => { 
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;   
    let service: ProductsService;
    beforeEach( () => { 
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductsService]
            
        });
    
    // inject http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);

     } );


    it('should be Object', inject([ProductsService, HttpTestingController],
        (servicee:ProductsService,backend:HttpTestingController) => {
            
            let mockProduct = {name: 'Product'};

            servicee.fetchProducts().subscribe(data => { 
                
                return expect(data).toEqual(mockProduct);
                }
            );
            backend.expectOne({
                method: 'GET',
                url: 'https://5d32e98ebecf3e0014ae5438.mockapi.io/products/products',
                
            }).flush(mockProduct);
        }) )
})