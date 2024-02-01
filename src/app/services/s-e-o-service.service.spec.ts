import { TestBed } from '@angular/core/testing';

import { SEOServiceService } from './s-e-o-service.service';

describe('SEOServiceService', () => {
  let service: SEOServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEOServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
