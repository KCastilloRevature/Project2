import { TestBed } from '@angular/core/testing';

import { CalcountService } from './calcount.service';

describe('CalcountService', () => {
  let service: CalcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
