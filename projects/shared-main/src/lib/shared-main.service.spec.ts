import { TestBed } from '@angular/core/testing';

import { SharedMainService } from './shared-main.service';

describe('SharedMainService', () => {
  let service: SharedMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
