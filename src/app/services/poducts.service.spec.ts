import { TestBed } from '@angular/core/testing';

import { PoductsService } from './poducts.service';

describe('PoductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoductsService = TestBed.get(PoductsService);
    expect(service).toBeTruthy();
  });
});
