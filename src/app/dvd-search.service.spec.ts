import { TestBed } from '@angular/core/testing';

import { DvdSearchService } from './dvd-search.service';

describe('DvdSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DvdSearchService = TestBed.get(DvdSearchService);
    expect(service).toBeTruthy();
  });
});
