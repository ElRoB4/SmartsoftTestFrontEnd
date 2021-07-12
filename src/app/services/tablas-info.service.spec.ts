import { TestBed } from '@angular/core/testing';

import { TablasInfoService } from './tablas-info.service';

describe('TablasInfoService', () => {
  let service: TablasInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablasInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
