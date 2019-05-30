import { TestBed } from '@angular/core/testing';

import { PanstwaService } from './panstwa.service';

describe('PanstwaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanstwaService = TestBed.get(PanstwaService);
    expect(service).toBeTruthy();
  });
});
