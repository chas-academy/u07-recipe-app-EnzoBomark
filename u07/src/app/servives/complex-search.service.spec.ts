import { TestBed } from '@angular/core/testing';

import { ComplexSearchService } from './complex-search.service';

describe('ComplexSearchService', () => {
  let service: ComplexSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
