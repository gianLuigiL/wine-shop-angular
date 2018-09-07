import { TestBed, inject } from '@angular/core/testing';

import { GrapesService } from './grapes.service';

describe('GrapesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrapesService]
    });
  });

  it('should be created', inject([GrapesService], (service: GrapesService) => {
    expect(service).toBeTruthy();
  }));
});
