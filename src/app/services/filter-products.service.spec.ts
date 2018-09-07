import { TestBed, inject } from '@angular/core/testing';

import { FilterProductsService } from './filter-products.service';

describe('FilterProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterProductsService]
    });
  });

  it('should be created', inject([FilterProductsService], (service: FilterProductsService) => {
    expect(service).toBeTruthy();
  }));
});
