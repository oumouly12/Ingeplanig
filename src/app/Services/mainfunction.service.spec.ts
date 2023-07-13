import { TestBed } from '@angular/core/testing';

import { MainfunctionService } from './mainfunction.service';

describe('MainfunctionService', () => {
  let service: MainfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
