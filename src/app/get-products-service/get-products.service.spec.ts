import { TestBed, inject } from '@angular/core/testing'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


import { ProductsService } from './get-products.service'

describe('ProductsService', () => {
    // прост типизируем, undefined
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
    
    // service = new ProductsService(httpClient);
    //Now requests made in the course of your tests will hit the 
    // testing backend instead of the normal backend.

    // tests begin

     } );

    //  it('should contain object',  (done) => {
    //      service.fetchProducts().subscribe(data => {
    //         expect(data).toBe(Object);
    //         done();
    //      });
    //     expect(service).toBeTruthy();
    //  },10000
    //  );


    it('should be Object', inject([ProductsService, HttpTestingController],
        (servicee:ProductsService,backend:HttpTestingController) => {
            
            let mockUser = {name: 'John'}

            servicee.fetchProducts().subscribe(data => { 
                
                return expect(data).toEqual(mockUser);
                }
            );
            backend.expectOne({
                method: 'GET',
                url: 'https://demo8421975.mockable.io/products',
                
            }).flush(mockUser);
            
            

            
        
        }) )



})