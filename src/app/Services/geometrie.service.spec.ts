import { TestBed } from '@angular/core/testing';

import { GeometrieService } from './geometrie.service';

describe('GeometrieService', () => {
  let service: GeometrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeometrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
