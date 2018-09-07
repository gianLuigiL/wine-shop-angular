import { TestBed, inject } from '@angular/core/testing';

import { ProductsSorterService } from './products-sorter.service';

describe('ProductsSorterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsSorterService]
    });
  });

  it('should be created', inject([ProductsSorterService], (service: ProductsSorterService) => {
    expect(service).toBeTruthy();
  }));
});
