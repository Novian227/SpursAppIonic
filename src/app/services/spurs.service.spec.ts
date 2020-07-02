import { TestBed } from '@angular/core/testing';

import { SpursService } from './spurs.service';

describe('SpursService', () => {
  let service: SpursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
