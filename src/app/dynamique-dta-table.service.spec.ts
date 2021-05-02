import { TestBed } from '@angular/core/testing';

import { DynamiqueDtaTableService } from './dynamique-dta-table.service';

describe('DynamiqueDtaTableService', () => {
  let service: DynamiqueDtaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamiqueDtaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
